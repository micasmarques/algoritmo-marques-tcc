#!/bin/bash

# Atualiza a lista de pacotes
sudo apt-get update -y

# Verifica se o python3.10 está instalado
if ! command -v python3.10 &> /dev/null
then
    echo "Python 3.10 não está instalado. Instalando agora..."
    sudo add-apt-repository ppa:deadsnakes/ppa -y
    sudo apt-get update -y
    sudo apt-get install python3.10 -y
else
    echo "Python 3.10 já está instalado."
fi

# Instala o pip para o Python 3.10
sudo apt-get install python3.10-distutils -y
curl https://bootstrap.pypa.io/get-pip.py | sudo python3.10

# Instala os pacotes Python
python3.10 -m pip install nltk flask flask_cors PyPDF2

# Baixa os arquivos nltk
python3.10 -m nltk.downloader stopwords punkt

# Verifica se o Node.js e npm estão instalados
if ! command -v node &> /dev/null
then
    echo "Node.js não está instalado. Instalando agora..."
    curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "Node.js já está instalado."
fi

# Muda para o diretório do frontend e roda o npm install
cd code/frontend
npm install

# Volta para o diretório principal
cd ../..

# Roda o programa principal Python
cd code/backend/src
nohup python3.10 main.py &

# Muda para o diretório do frontend e roda o npm start
cd ../../frontend
npm start
