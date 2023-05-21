FROM python:3.10-slim
RUN pip install --upgrade pip
WORKDIR /app
COPY ./requirements.txt .
RUN pip install -r requirements.txt
RUN python3 -m nltk.downloader stopwords punkt
COPY ./src .
CMD [ "python3", "main.py"]