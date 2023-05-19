from flask import Flask, request, jsonify
from flask_cors import CORS

from algorithm.marques_algorithm import summarize

app = Flask(__name__)
CORS(app)


@app.route('/summarize', methods=['POST'])
def summarize_text():
    data = request.get_json()
    text = data['text']
    num_sentences = int(data['num_sentences'])
    summary = summarize(text, num_sentences)
    return jsonify(summary=summary)


if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)
