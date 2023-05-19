# Sumarização Automática de Textos

Este repositório contém informações e recursos relacionados a um projeto de pesquisa sobre sumarização automática de textos. O objetivo do projeto é desenvolver e avaliar algoritmos de sumarização capazes de gerar resumos coerentes e informativos a partir de textos longos.

## Sobre o Projeto

A sumarização automática de textos é uma área de pesquisa em processamento de linguagem natural (PLN) que busca desenvolver métodos para criar resumos concisos e informativos a partir de documentos ou conjuntos de documentos. O projeto explora diferentes técnicas e abordagens de sumarização, incluindo algoritmos baseados em extração e abstração, e avalia seu desempenho por meio de métricas quantitativas e qualitativas.

## Configuração do Ambiente

### Linux

1. Instale o Python 3.10 executando o seguinte comando:
```bash
sudo apt update
sudo apt install python3.10
```

2. Instale o npm (Node.js Package Manager) executando o seguinte comando:

```bash
sudo apt update
sudo apt install npm
```

3. Execute o script `setup_linux.sh` para configurar o ambiente do projeto no Linux:
```bash
bash setup_linux.sh
```

### Windows

1. Baixe e instale o Python 3.10 a partir do site oficial: https://www.python.org/downloads/

2. Baixe e instale o Node.js a partir do site oficial: https://nodejs.org/

3. Execute o script `setup_windows.ps1` para configurar o ambiente do projeto no Windows. Abra o PowerShell e execute o seguinte comando:
```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
./setup_windows.ps1
```

## Estrutura do Repositório

O repositório possui a seguinte estrutura de arquivos e diretórios:

- tcc_project/
  - code/
    - backend/
      - src/
        - algorithm/
          - marques_algorithm.py
        - main.py
      - requirements.txt
    - frontend/
      - public/
        - index.html
      - src/
        - components/
          - Summary.js
          - TextEditor.js
          - SummaryResult.js
        - index.js
      - package.json
  - tcc_documentation/

## Como Contribuir

Contribuições ao projeto são bem-vindas! Se você deseja contribuir com código, correções de bugs, melhorias na documentação ou sugestões, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para sua contribuição (exemplo: `git checkout -b feature/nova-funcionalidade`).
3. Faça as alterações e commits necessários.
4. Faça um push para a branch criada no seu fork (exemplo: `git push origin feature/nova-funcionalidade`).
5. Crie um Pull Request no repositório original.

Antes de enviar sua contribuição, certifique-se de que seu código segue as diretrizes de estilo e que todos os testes unitários estão passando.

## Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para obter detalhes.

## Contato

Se você tiver dúvidas, sugestões ou comentários sobre o projeto, sinta-se à vontade para entrar em contato através do e-mail: micasmarques1132@gmail.com

# Proximos passos

1. **Aprimoramento do algoritmo de Marques:**
   - Identificar limitações e pontos fracos do algoritmo atual.
   - Pesquisar técnicas de processamento de linguagem natural e aprendizado de máquina relevantes para abordar essas limitações.
   - Implementar melhorias no algoritmo e avaliar seu impacto no desempenho da sumarização.
   - Realizar experimentos comparativos com outros algoritmos de sumarização para validar as melhorias.

2. **Adaptação a diferentes tipos de texto e domínios de conhecimento:**
   - Selecionar diferentes tipos de texto e domínios de conhecimento para análise.
   - Identificar características específicas e desafios associados a cada tipo de texto e domínio.
   - Adaptar o algoritmo de Marques para lidar com essas características e desafios.
   - Avaliar a eficácia do algoritmo adaptado em cada tipo de texto e domínio.

3. **Sumarização multilíngue:**
   - Identificar idiomas de interesse para a pesquisa.
   - Coletar e preparar conjuntos de dados de texto nesses idiomas.
   - Adaptar o algoritmo de Marques para lidar com as peculiaridades linguísticas de cada idioma.
   - Avaliar o desempenho do algoritmo adaptado na sumarização de textos nos idiomas selecionados.

4. **Sumarização personalizada:**
   - Identificar fatores relevantes para a personalização de resumos (por exemplo, conhecimento prévio, preferências de estilo, objetivos de leitura).
   - Desenvolver modelos e técnicas para incorporar esses fatores no processo de sumarização.
   - Implementar a personalização no algoritmo de Marques.
   - Avaliar a eficácia dos resumos personalizados gerados pelo algoritmo adaptado.

5. **Avaliação de resumos gerados:**
   - Revisar métodos existentes de avaliação humana e métricas automáticas para sumarização de texto.
   - Propor abordagens aprimoradas para avaliar a qualidade dos resumos gerados.
   - Desenvolver um protocolo de avaliação que combine avaliação humana e métricas automáticas.
   - Aplicar o protocolo de avaliação aos resumos gerados pelo algoritmo de Marques e comparar com outros algoritmos de sumarização.

6. **Integração com outras áreas de Processamento de Linguagem Natural (PLN):**
   - Identificar técnicas de PLN complementares à sumarização automática de texto (por exemplo, análise de sentimento, classificação de texto, extração de informação).
   - Desenvolver métodos para integrar o algoritmo de Marques com essas técnicas.
   - Implementar soluções combinadas que aproveitem as sinergias entre as técnicas de PLN.
   - Avaliar o desempenho e a eficácia das soluções integradas em diferentes cenários e tipos de texto.