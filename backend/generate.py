import json
from math import floor
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch, cm
from reportlab.lib.pagesizes import letter

class ExamGenerator:

    LAYOUTS={
        "horizontal":{
            "block_width":(8.5*inch/2),
            "block_height":0.5*inch
            }
    }

    def __init__(self):
        pass

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
            templage_name = jsondata['template']

        template = self.LAYOUTS[templage_name]

        print(type(equations))
        print(len(equations))

        c = canvas.Canvas('/tmp/result.pdf', pagesize=letter)
        c.drawImage('template/logo.jpg', 0, 10*inch, 8.5*inch, 1*inch)
        c.setTitle("BlankMath.com");
        c.setFont("Helvetica-Bold", 25)

        for index, value in enumerate(equations):
            x = 0.6*inch + (index%2)*template['block_width']
            y = 9.5*inch - floor(index/2)*template['block_height']
            self.drawEquation(c, self.expandEquation(value), x, y)
            pass

        c.showPage()
        c.save()

    def expandEquation(self, text):
        result=""
        # Remove all spaces, I will add them back
        text = text.replace(" ", "")
        for index, char in enumerate(text):
            if char in ['+','-', '*', '/']:
                result = result + ' ' + char + ' '
            elif char == 'x':
                result = result + '___'
            else:
                result = result + char
        return result

    def drawEquation(self, my_canvas, text, x, y):
        print("Will draw text@", x, y)
        my_canvas.drawString(x, y, text)

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
    gen.generate('{"equations":["7+x=12", "20-x=5", "10+x=99", "55+x=99"], "template":"horizontal"}')

