from collections import defaultdict
from heapq import nlargest
from string import punctuation

from nltk.corpus import stopwords
from nltk.probability import FreqDist
from nltk.tokenize import word_tokenize, sent_tokenize


def tokenize(text):
    sentences = sent_tokenize(text)
    words = word_tokenize(text)

    return sentences, words


def remove_stopwords(words):
    stopwords_set = set(stopwords.words('portuguese') + list(punctuation))
    words = [word for word in words if word not in stopwords_set]

    return words


def rank_sentences(sentences, freq):
    ranked_sentences = defaultdict(int)

    for i, sentence in enumerate(sentences):
        for word in word_tokenize(sentence.lower()):
            if word in freq:
                ranked_sentences[i] += freq[word]

    return ranked_sentences


def summarize(text, num_sentences):
    try:
        sentences, words = tokenize(text)

        words = remove_stopwords(words)

        freq = FreqDist(words)

        ranked_sentences = rank_sentences(sentences, freq)

        important_sentences = nlargest(num_sentences, ranked_sentences, ranked_sentences.get)

        important_sentences.sort()

        return [sentences[i] for i in important_sentences]
    except Exception as e:
        print(f"Error in summarizing text: {e}")
        raise e
        return None
