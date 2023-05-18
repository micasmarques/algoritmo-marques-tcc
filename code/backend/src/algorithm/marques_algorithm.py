# marques_algorithm.py
from nltk.tokenize import word_tokenize
from nltk.tokenize import sent_tokenize
from nltk.corpus import stopwords
from string import punctuation
from nltk.probability import FreqDist
from collections import defaultdict
from heapq import nlargest


def summarize(text, qtd_sentences):
    sentencas = sent_tokenize(text)
    palavras = word_tokenize(text.lower())

    var_stopwords = set(stopwords.words('portuguese') + list(punctuation))
    palavras_sem_stopwords = [palavra for palavra in palavras if palavra not in var_stopwords]

    frequencia = FreqDist(palavras_sem_stopwords)

    sentencas_importantes = defaultdict(int)

    for i, sentenca in enumerate(sentencas):
        for palavra in word_tokenize(sentenca.lower()):
            if palavra in frequencia:
                sentencas_importantes[i] += frequencia[palavra]

    idx_sentencas_importantes = nlargest(qtd_sentences, sentencas_importantes, sentencas_importantes.get)

    return [sentencas[i] for i in sorted(idx_sentencas_importantes)]
