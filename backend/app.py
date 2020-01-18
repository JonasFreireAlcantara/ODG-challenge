from flask import Flask
from flask import jsonify

import pandas as pd

import json

app = Flask(__name__)


@app.route('/')
def index():
    return "Hello, World!"

@app.route('/teste', methods=['GET'])
def get_teste():
    teste = { 'ola': 'mensagem_ola' }
    return jsonify(teste)

@app.route('/data', methods=['GET'])
def get_dataset():
    dataset = pd.read_csv('heart.csv')
    # dataset = dataset.to_json(orient='records')
    dataset = json.loads(dataset.to_json(orient='records'))
    # print(jsonify(dataset))
    return jsonify(dataset)

if __name__ == '__main__':
    app.run(debug=True)