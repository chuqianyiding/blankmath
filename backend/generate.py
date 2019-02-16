from reportlab.pdfgen import canvas
from reportlab.lib.units import inch, cm
from reportlab.lib.pagesizes import letter

c = canvas.Canvas('result.pdf', pagesize=letter)
c.drawImage('template/logo.jpg', 0, 10*inch, 8.5*inch, 1*inch)
c.setTitle("BlankMath.com");
c.showPage()
c.save()

class ExamGenerator:
    def __init__(self):
        pass
    def generate(self, data):
        c = canvas.Canvas('result.pdf', pagesize=letter)
        c.drawImage('template/logo.jpg', 0, 10*inch, 8.5*inch, 1*inch)
        c.setTitle("BlankMath.com");
        c.showPage()
        c.save()
        pass
    def drawEquation(self, cvs, text, x, y):
        pass
    

if __name == "__main__":
    gen = ExamGenerator()
    gen.generate('["7+x=12", "20-x=5"]')
