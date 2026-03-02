import fs from "fs";
import path from "path";
import trataerros from "./erros/funcoesErro.js";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from "./helpers.js";
import { program } from "commander";
import chalk from "chalk";


program
  .version('0.0.1')
  .option('-t , --texto <string>', 'Caminho do arquivo de texto a ser processado')
  .option('-d , --destino <string>', 'Caminho do diretório onde o resultado será salvo')
  .action((options) => {
    console.clear();
    const { texto, destino } = options;
    if (!texto || !destino) {
      console.error(chalk.red('Erro: Ambos os parâmetros --texto e --destino são obrigatórios.'));
      program.help();
      return;
    }

    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try{
      processaArquivo(caminhoTexto, caminhoDestino);
      console.log(chalk.green('texto processado com sucesso!'));
    } catch (erro) {
      console.log(chalk.red('Erro ao processar o arquivo.'), erro.message);
    }
  })

program.parse();  

function processaArquivo(texto, destino) {
  fs.readFile(texto, "utf-8", (erro, texto) => {
    try {
      if (erro) throw erro;
      const resultado = contaPalavras(texto);
      criaESalvaArquivo(resultado, destino);
    } catch (erro) { 
      trataerros(erro);
    }
  });
}


async function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = montaSaidaArquivo(listaPalavras);
  try {
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log("Arquivo criado com sucesso!");
  } catch (erro) {
    throw erro;
  }
}