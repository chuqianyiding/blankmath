"""

POST https://api.blankmath.com/

Json body:

{
    "equations": array of equation strings, with "x" representing the missing number to be replaced with a rectangle. Example: ["1+x=2","5-7=x","9+x=100","1+x=2"]
    "template": how the equations are arranged. Can be "horizontal" or "vertical"
    "countPerPage": The amount of equations to be fit in a page. If more equations are given, the generated result will contain more than 1 page.
}
"""

import json
from examgenerator import ExamGenerator


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
        'statusCode':201,
        'headers': {
            'Content-Type':'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Be_ver': '0.1'
        },
        'body': "https://r.blankmath.com/"+hash+'.pdf'
    }

if __name__ == "__main__":
    print('Please run test.py for a local test. Otherwise, this file runs in AWS lambda')
