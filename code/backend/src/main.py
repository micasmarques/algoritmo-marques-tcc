from flask import Flask, request, jsonify
from flask_cors import CORS
from algorithm.marques_algorithm import summarize
import tempfile
import PyPDF2

app = Flask(__name__)
CORS(app)


@app.route('/summarize', methods=['POST'])
def summarize_text():
    data = request.get_json()
    text = data['text']
    num_sentences = int(data['num_sentences'])
    summary = summarize(text, num_sentences)
    return jsonify(summary=summary)


@app.route('/upload', methods=['POST'])
def upload_pdf():
    file = request.files['file']
    temp_file = tempfile.NamedTemporaryFile(delete=False)
    file.save(temp_file.name)

    with open(temp_file.name, 'rb') as pdf_file:
        pdf_reader = PyPDF2.PdfReader(pdf_file)
        text = ''
        for page in pdf_reader.pages:
            text += page.extract_text()

    num_sentences = request.form.get('num_sentences')
    if num_sentences is None:
        num_sentences = 1
    else:
        num_sentences = int(num_sentences)

    summary = summarize(text, num_sentences)
    return jsonify(summary=summary)


if __name__ == '__main__':
    app.run(debug=True)
