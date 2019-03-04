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
            "block_height":1.8*inch,
            "margin":0.6*inch,
            "y_top":9.5*inch
            }
    }

    FONT="Helvetica-Bold"
    FONT_SIZE=25

    def __init__(self):
        pass

    def stringWidth(self, text):
        return stringWidth(text, self.FONT, self.FONT_SIZE) 

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
        c.drawImage('template/logo.jpg', 0, 10*inch, 8.5*inch, 1*inch)
        c.setTitle("BlankMath.com");
        c.setFont(self.FONT, self.FONT_SIZE)

        for index, value in enumerate(equations):
            x = template['margin'] + (index%blocks_per_row)*template['block_width']
            y = template['y_top'] - floor(index/blocks_per_row)*template['block_height']
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
    gen.generate('{"equations":["7+12=x", "20-1=x", "10+x=99", "55+x=99", "x+9=23", "19+22=x"], "template":"horizontal"}')

