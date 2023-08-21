# Teste TypeScript

Este projeto foi desenvolvido como um teste das linguagens TypeScript e Sass para substituir o JavaScript e CSS convencionais.

## Como instalar

Antes de tudo, deve-se instalar Node.JS através do site oficial. *https://nodejs.org/en/download/*

Após a instalação do Node, deve-se instalar o npm com o seguinte comando:

```sh
$ npm install -g npm
```

Para instalar o TypeScript e o Sass, deve-se usar os comandos:

```sh
$ npm install -g typescript
$ npm install -g sass
```

## Como configurar

Com o TypeScript instalado, basta criar, se direcionar para a pasta do projeto e utilizar o seguinte comando para criar um arquivo *tsconfig.json* completo:

```sh
$ tsc --init
```

Após os passos anteriores, basta criar arquivos *.html*, *.sass*, *.ts* e uma pasta *dist/*.

Sempre que alterar o arquivo TypeScript, insira `tsc` no terminal para compilar o código para JavaScript que será salvo no diretório *dist/*. Pode-se definir o local da seguinte forma:

```json
{
    "outDir": "./dist"
}
```

### Observações

Para compilar o código Sass automaticamente, insira no terminal:

```sh
$ sass --watch styles.sass styles.css
```