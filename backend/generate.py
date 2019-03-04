import json
import re
from math import floor
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch, cm
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase.pdfmetrics import stringWidth

class ExamGenerator:

    LAYOUTS={
        "horizontal":{
            "block_width":(3.6*inch),
            "block_height":1.0*inch,
            "margin":0.6*inch,
            "y_top":9.5*inch
            },
        "vertical":{
            "block_width":(1.5*inch),
            "block_height":2.2*inch,
            "margin":0.6*inch,
            "y_top":9.5*inch
            }
    }

    FONT="Helvetica-Bold"
    FONT_SIZE=25
    PAGE_HEIGHT=11*inch
    PAGE_WIDTH=8.5*inch

    def __init__(self):
        pass

    def stringWidth(self, text):
        return stringWidth(text, self.FONT, self.FONT_SIZE) 

    def printHeader(self, c):
        """
        Args:
            c: The canvas to draw on
        """
        c.drawImage('template/logo.jpg', 0, 10*inch, 8.5*inch, 1*inch)

    def generate(self, data):
        """
        Args:
            data: string in JSON format
        """
        jsondata = json.loads(data)
        equations = jsondata['equations']
        if not "template" in jsondata:
            template_name = "horizontal"
        else:
            template_name = jsondata['template']

        template = self.LAYOUTS[template_name]

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
            c.setFont(self.FONT, self.FONT_SIZE)
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
                result = result + '  =  '
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
        if template_name == 'horizontal':
            print("Will draw text horizontally @", x, y)
            text = self.horizontalExpand(text)
            width = self.stringWidth(text)
            parts = text.split('___')
            print('Spliting horizontal: ', parts)
            my_canvas.drawString(x, y, parts[0])
            start_x = x + self.stringWidth(parts[0])
            margin=-0.1*inch
            rect_width = 0.6*inch
            rect_height = 0.6*inch
            my_canvas.roundRect(start_x+margin, y - 0.2*inch, rect_width, rect_height, 0.1*inch)
            start_x = start_x + rect_width + 2*margin
            my_canvas.drawString(start_x, y, parts[1])


        elif template_name == 'vertical':
            text = self.verticalExpand(text)
            print("Will draw text vertically @", x, y, " as ", text)
            tokens = re.split(" |=", text)
            print(tokens)
            reverse_tokens = [x[::-1] for x in tokens]
            print(reverse_tokens)
            pass_eq = 0
            for index, value in enumerate(tokens):
                value_to_draw = value
                width = self.stringWidth(value) 
                #height = stringHeight(value, self.FONT, self.FONT_SIZE) 
                start_y = y - 0.35*inch*(index - pass_eq)
                if value in ['+', '-', '*', '/']:
                    pass_eq=1
                    start_x = x + 0.65*inch
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
        '"25+12=x", "26-1=x", "27+x=99", "28+x=99", "x+29=23", "30+22=x"'
        '], "template":"vertical"}'
        )
    print(test_case)
    gen.generate(test_case)

