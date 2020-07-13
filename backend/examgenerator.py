import re
from math import floor
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch, cm
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase.pdfmetrics import stringWidth
import json

class ExamGenerator:

    """
    Notes on layout:
    Bottom : y==0
    Left:x==0
    """

    LAYOUTS={
        "3num20":{
            "block_width":(3.6*inch),
            "block_height":0.9*inch,
            "margin":0.6*inch,
            "y_top":9.5*inch,
            "font_size":25
            },
        "3num30":{
            "block_width":(2.5*inch),
            "block_height":0.9*inch,
            "margin":0.5*inch,
            "y_top":9.5*inch,
            "font_size":15
            },
        "3num50":{
            "block_width":(2.5*inch),
            "block_height":0.65*inch,
            "margin":0.5*inch,
            "y_top":9.5*inch,
            "font_size":15
            },
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
            "block_width":(1.915*inch),
            "block_height":0.7*inch,
            "margin":0.41*inch,
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
        """
        Find a template to best fit this page using the number of equations,
        and the layout on this page.
        """
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
            elif template_name == "3num":
                if numEquations > 30:
                    template_name += "50"
                elif numEquations > 20:
                    template_name += "30"
                else:
                    template_name += "20"

        return (template_name, self.LAYOUTS[template_name])

    def _generatePage(self, jsondata, c):
        equations = jsondata['equations']
        template_name, template = self.findTemplate(jsondata)

        blocks_per_row = (8.5*inch-2*template['margin'])/(template['block_width'])
        blocks_per_row = floor(blocks_per_row)
        print('blocks per row', blocks_per_row)

        print(type(equations))
        print(len(equations))

        start_index = 0
        finished = False

        if 'horizontal' in template_name:
            c.setStrokeColorRGB(1, 1, 1)
            c.setFillColorRGB(0.9, 0.9, 0.9)
            vertLineX = template['margin']+template['block_width']-0.1*inch
            drawRect = False
            while vertLineX + template['block_width']< 8.5*inch:
                drawRect=not drawRect
                if drawRect:
                    c.rect(vertLineX, template['margin'], template['block_width'], template['y_top'], fill=1)
                    c.rect(0, 0, 10, 10)
                    c.line(vertLineX, template['margin'], vertLineX, 100)
                    #c.line(vertLineX, template['y_top']+template['block_height'], vertLineX, template['margin'])
                vertLineX += template['block_width']
            c.setFillColorRGB(0, 0, 0)
        #c.setStrokeColorRGB(0, 0, 0)
        #c.setDash()

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
                self.drawEquation(template_name, c, value, x, y, template)
                    
        c.showPage()

    def generate(self, data):
        """
        Args:
            data: string in JSON format from user's request body
        """
        jsonData = json.loads(data)

        c = canvas.Canvas('/tmp/result.pdf', pagesize=letter)
        c.setTitle("BlankMath.com");

        if 'countPerPage' in jsonData:
            countPerPage=int(jsonData['countPerPage'])
            equations = jsonData['equations']
            while len(equations) > 0:
                countThisPage = min(countPerPage, len(equations))
                jsonData['equations'] = equations[:countThisPage]
                self._generatePage(jsonData, c)
                del equations[:countThisPage]
        else:
            self._generatePage(jsonData, c)
        
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
        result = result.replace('*', '×')
        result = result.replace('/', '÷')
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

        result = result.replace('*', '×')
        result = result.replace('/', '÷')
        return result

    def drawVerticalDiv(self, text):
        pass

    def drawEquation(self, template_name, my_canvas, text, x, y, template):
        """ Draws an equation at the specified point on the specified canvas
        Args:
            template_name: Name of the template
            my_canvas: canvas to draw on
            text: The text representation of the string
            x: x coordinate of the place to draw, representing the bottem left cornor
            y: y coordinate of the place to draw, representing the bottem left cornor
            template: template object to draw
        """
        if 'horizontal' in template_name or '3num' in template_name:
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
            margin=-0.05*inch
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

            my_canvas.setStrokeColorRGB(0.75, 0.75, 0.75)
            if 'o' in text:
                # Reuse the dimention of the rect.
                my_canvas.roundRect(rect_x, rect_y, rect_width, rect_height, stroke)
                #my_canvas.circle(rect_x + rect_width / 2, rect_y+rect_height/2, rect_width/4)
            else:
                my_canvas.roundRect(rect_x, rect_y, rect_width, rect_height, stroke)
            my_canvas.setStrokeColorRGB(0, 0, 0)
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
        elif 'vertical_div' in template_name:
            self.drawVerticalDiv(my_canvas, text, x, y, template)
        else:
            print("I do not know how to draw this", template_name)
