from flask import Flask
from flask import jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return "Hello, World!"

@app.route('/teste', methods=['GET'])
def get_teste():
    teste = { 'ola': 'mensagem_ola' }
    return jsonify(teste)


if __name__ == '__main__':
    app.run(debug=True)