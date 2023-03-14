from flask import Flask
import pandas as pd
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/getJSON')
def JsonAPI():
    df=pd.read_excel("test.xlsx")
    return df.to_json(orient = "records")

if __name__ == '__main__':
    app.run()