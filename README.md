# Identificador de Duplicatas em Arquivos de Texto

Esta biblioteca em Node.js processa arquivos de texto para identificar palavras que se repetem dentro de cada parágrafo, gerando um relatório em um arquivo de destino.

## Descrição

O projeto utiliza uma interface de linha de comando (CLI) para ler um arquivo de entrada, filtrar palavras com 3 ou mais caracteres, remover pontuações e contabilizar duplicatas. O resultado final é salvo em um arquivo chamado `resultado.txt` no diretório especificado pelo usuário.

## Funcionalidades

- Processamento de texto via linha de comando.
- Limpeza automática de caracteres especiais e pontuação.
- Identificação de palavras duplicadas por parágrafo.
- Exportação de resultados para arquivos locais.

## Pré-requisitos

- Node.js instalado.
- Dependências listadas no `package.json` (Commander, Chalk).

## Instalação

1. Clone o repositório.
2. No terminal, instale as dependências:

```bash
npm install
```

## Como usar

A biblioteca utiliza flags para definir o arquivo de origem e a pasta de destino via Commander.

### Comando Padrão

```bash
node cli.js -t [caminho-do-arquivo] -d [diretorio-de-saida]
```

### Opções

- `-v, --version`: Exibe a versão atual da biblioteca.
- `-t, --texto`: Caminho do arquivo .txt ou .md a ser analisado.
- `-d, --destino`: Caminho do diretório onde o arquivo resultado.txt será criado.

## Desenvolvimento (Nodemon)

Para facilitar o desenvolvimento, o projeto utiliza o Nodemon. Ele monitora as alterações nos arquivos e reinicia a execução automaticamente, evitando a necessidade de rodar o comando manualmente a cada mudança no código.

Para usar o script de desenvolvimento (caso configurado no seu package.json):

```bash
npm run dev
```

## Estrutura de Saída

O arquivo gerado conterá o seguinte formato:

```plaintext
Palavras duplicadas no paragrafo 1: palavra1, palavra2 

Palavras duplicadas no paragrafo 2: palavra3
```

## Tecnologias Utilizadas

- Node.js: Ambiente de execução (módulos fs e path).
- Commander.js: Framework para criação de interfaces de linha de comando.
- Chalk: Biblioteca para estilização e cores no terminal.
- Nodemon: Ferramenta de monitoramento para reinicialização automática durante o desenvolvimento (npm run dev).

## Autor

Gabriel Steffens (gabste8831)