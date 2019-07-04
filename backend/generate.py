import json
import re
from math import floor
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch, cm
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase.pdfmetrics import stringWidth

class ExamGenerator:

    LAYOUTS={
        "horizontal20":{
            "block_width":(3.6*inch),
            "block_height":0.9*inch,
            "margin":0.6*inch,
            "y_top":9.5*inch,
            "font_size":25
            },
        "horizontal30":{
            "block_width":(2.5*inch),
            "block_height":0.9*inch,
            "margin":0.5*inch,
            "y_top":9.5*inch,
            "font_size":18
            },
        "horizontal52":{
            "block_width":(1.925*inch),
            "block_height":0.7*inch,
            "margin":0.4*inch,
            "y_top":9.5*inch,
            "font_size":14
            },
        "vertical20":{
            "block_width":(1.5*inch),
            "block_height":2.2*inch,
            "margin":0.25*inch,
            "y_top":9.5*inch,
            "line_width":0.35*inch,
            "font_size":25
            },
        "vertical30":{
            "block_width":(1.2*inch),
            "block_height":1.8*inch,
            "margin":0.5*inch,
            "y_top":9.5*inch,
            "line_width":0.35*inch,
            "font_size":20
            },
        "vertical49":{
            "block_width":(1.0*inch),
            "block_height":1.3*inch,
            "margin":0.5*inch,
            "y_top":9.5*inch,
            "line_width":0.3*inch,
            "font_size":15
            },
        "vertical56":{
            "block_width":(1.0*inch),
            "block_height":1.1*inch,
            "margin":0.5*inch,
            "y_top":9.5*inch,
            "line_width":0.22*inch,
            "font_size":12
            }
    }

    FONT="Helvetica-Bold"
    PAGE_HEIGHT=11*inch
    PAGE_WIDTH=8.5*inch

    def __init__(self):
        pass

    def stringWidth(self, text, font_size):
        return stringWidth(text, self.FONT, font_size) 

    def printHeader(self, c):
        """
        Args:
            c: The canvas to draw on
        """
        c.drawImage('template/logo.jpg', 0, 10*inch, 8.5*inch, 1*inch)

    def findTemplate(self, jsondata):
        if not "template" in jsondata:
            template_name = "horizontal"
        else:
            template_name = jsondata['template']

        if "problems_per_page" in jsondata:
            template_name += str(jsondata["problems_per_page"])
        else:
            numEquations = len(jsondata["equations"])
            if template_name=="vertical":
                if numEquations > 49:
                    template_name += "56"
                elif numEquations >= 30:
                    template_name += "49"
                else:
                    template_name += "30"
            elif template_name=="horizontal":
                if numEquations > 30:
                    template_name += "52"
                else:
                    template_name += "30"

        return (template_name, self.LAYOUTS[template_name])

    def generate(self, data):
        """
        Args:
            data: string in JSON format
        """
        jsondata = json.loads(data)
        equations = jsondata['equations']
        template_name, template = self.findTemplate(jsondata)

        blocks_per_row = (8.5*inch-2*template['margin'])/(template['block_width'])
        blocks_per_row = floor(blocks_per_row)
        print('blocks per row', blocks_per_row)

        print(type(equations))
        print(len(equations))

        c = canvas.Canvas('/tmp/result.pdf', pagesize=letter)
        c.setTitle("BlankMath.com");

        start_index = 0
        finished = False
        while start_index < len(equations) and not finished:
            c.setFont(self.FONT, template['font_size'])
            self.printHeader(c)
            finished = True
            for index, value in enumerate(equations):
                i = index - start_index
                if i < 0:
                    continue
                x = template['margin'] + (i%blocks_per_row)*template['block_width']
                y = template['y_top'] - floor(i/blocks_per_row)*template['block_height']
                if y<template['block_height']:
                    # New page
                    c.showPage()
                    start_index = index
                    finished = False
                    break
                else:
                    self.drawEquation(template_name, c, value, x, y, template)

        c.showPage()
        c.save()

    def horizontalExpand(self, text):
        result=""
        # Remove all spaces, I will add them back
        text = text.replace(" ", "")
        for index, char in enumerate(text):
            if char in ['+','-', '*', '/']:
                result = result + '  ' + char + '  '
            elif char == '=':
                result = result + '   =   '
            elif char == 'x':
                result = result + '___'
            else:
                result = result + char
        return result

    def verticalExpand(self, text):
        print("Expand ", text)
        result=str("")
        # Remove all spaces, I will add them back
        text = text.replace(" ", "")
        for index, char in enumerate(text):
            if char in ['+','-', '*', '/']:
                result = result + ' ' + char + ' '
            elif char == '=':
                result = result + ' ___ '
            elif char == 'x':
                result = result + '#'
            else:
                result = result + char

        return result

    def drawEquation(self, template_name, my_canvas, text, x, y, template):
        if 'horizontal' in template_name:
            print("Will draw text horizontally @", x, y)
            text = self.horizontalExpand(text)
            width = self.stringWidth(text, template['font_size'])
            if 'x' in text:
                sign = '___'
            elif 'o' in text:
                sign = 'o'
            else:
                sign = '___'
            parts = text.split(sign)
            print('Spliting horizontal: ', parts)
            my_canvas.drawString(x, y, parts[0])
            start_x = x + self.stringWidth(parts[0], template['font_size'])
            margin=-0.1*inch
            rect_width = 0.55*inch
            rect_height = 0.55*inch
            
            rect_y = y - 0.2*inch
            stroke = 0.09*inch
            if 'o' in text:
                margin = 0.2*inch
                rect_width = 0.35*inch
                rect_height = 0.35*inch
                rect_y = y - 0.1*inch
            rect_x = start_x+margin
            
            print("Rect dimension: %d %d %d %d "%(rect_width,rect_height,rect_x,rect_y))

            if 'o' in text:
                # Reuse the dimention of the rect.
                my_canvas.roundRect(rect_x, rect_y, rect_width, rect_height, stroke)
                #my_canvas.circle(rect_x + rect_width / 2, rect_y+rect_height/2, rect_width/4)
            else:
                my_canvas.roundRect(rect_x, rect_y, rect_width, rect_height, stroke)
            start_x = start_x + rect_width + 2*margin
            my_canvas.drawString(start_x, y, parts[1])


        elif 'vertical' in template_name:
            text = self.verticalExpand(text)
            print("Will draw text vertically @", x, y, " as ", text)
            tokens = re.split(" |=", text)
            print(tokens)
            reverse_tokens = [x[::-1] for x in tokens]
            print(reverse_tokens)
            pass_eq = 0
            for index, value in enumerate(tokens):
                value_to_draw = value
                width = self.stringWidth(value, template['font_size']) 
                start_y = y - template["line_width"]*(index - pass_eq)
                if value in ['+', '-', '*', '/']:
                    pass_eq=1
                    start_x = x + 0.4*template['block_width']
                elif value == '#':
                    value_to_draw = '    '
                    start_x = x + 0.4*inch
                else:
                    start_x = x + template['block_width'] - width
                if value_to_draw == '___':
                    start_y = start_y + 0.15*inch
                    my_canvas.line(start_x, start_y, start_x + width, start_y)
                else:
                    my_canvas.drawString(start_x, start_y, value_to_draw)
        else:
            print("I do not know how to draw this", template_name)

def lambda_handler(event, context):

    import boto3
    import hashlib

    gen = ExamGenerator()
    gen.generate(event['body'])
    in_file = open('/tmp/result.pdf', 'rb')
    data = in_file.read()
    in_file.close()

    hash = hashlib.sha1(data).hexdigest();
    s3=boto3.client('s3')
    s3.put_object(Body=data, Bucket="r.blankmath.com", Key=hash+'.pdf', ContentType='application/pdf')

    return {
        'statusCode':200,
        'headers': {
            'Content-Type':'text/plain',
            'Access-Control-Allow-Origin': '*'
        },
        'body': "https://r.blankmath.com/"+hash+'.pdf'
    }

if __name__ == "__main__":
    gen = ExamGenerator()
    test_case = ('{"equations":['
        '"1+12=x", "2-1=x", "3+x=99", "4+x=99", "x+5=23", "6+22=x",'
        '"7+12=x", "8-1=x", "9+x=99", "10+x=99", "x+11=23", "12+22=x",'
        '"13+12=x", "14-1=x", "15+x=99", "16+x=99", "x+17=23", "18+22=x",'
        '"19+12=x", "20-1=x", "21+x=99", "22+x=99", "x+23=23", "24+22=x",'
        '"25+12=x", "26-1=x", "27+x=99", "28+x=99", "x+29=23", "30+22=x",'
        '"31+12=x", "32-1=x", "33+x=99", "34x=99", "x+35=23", "36+22=x",'
        '"37+12=x", "38-1=x", "39+x=99", "40+x=99", "x+41=23", "42+22=x",'
        '"43+12=x", "44-1=x", "45+x=99", "46+x=99", "x+47=23", "48+22=x",'
        '"49+12=x", "50-1=x", "51+x=99", "52+x=99", "x+53=23", "54+22=x",'
        '"55+12=x", "56-1=x", "57+x=99", "58+x=99", "x+59=23", "60+22=x"'
        '], "template":"horizontal"}'
        )
    test_case2 = ('{"equations":['
        '"1+12=x", "2-1=x", "3+x=99", "4+x=99", "x+5=23", "6+22=x",'
        '"7+12=x", "8-1=x", "9+x=99", "10+x=99", "x+11=23", "12+22=x",'
        '"13+12=x", "14-1=x", "15+x=99", "16+x=99", "x+17=23", "18+22=x",'
        '"19+12=x", "20-1=x", "21+x=99", "22+x=99", "x+23=23", "24+22=x",'
        '"25+12=x", "26-1=x", "27+x=99", "28+x=99", "x+29=23", "30+22=x"'
        '], "template":"horizontal"}'
        )
    test_case3 = ('{"equations":['
        '"1o12", "2o1", "3o99", "4o99", "5o23", "6o6",'
        '"7o12", "8o2", "9o99", "10o99", "11o23", "12o22"'
        '], "template":"horizontal"}'
        )
    print(test_case3)
    gen.generate(test_case3)

