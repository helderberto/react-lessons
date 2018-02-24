# Webpack

## O que é?

O Webpack é um _module bundler_ um sistema de módulos, onde ele diversos módulos e cria um _bundle_ em `EcmaScript5` no formato que os browsers possam compreender.

A ferramenta oferece diversas funcionalidades e você pode saber mais dos seus poderes na própria documentação clicando [aqui](https://webpack.github.io).

## Instalação

* Rodar o comando `npm install --save-dev webpack`.

## Configurações

* Criar arquivo `webpack.config.js` na raíz do projeto;
* Necessário definir a entrada e saída padrão, conforme o exemplo a seguir:
```
'use strict';

const path = require('path');

// É utilizado para evitar conflitos de sistemas operacionais
path.join(__dirname, '', '')

// Exportação de módulo common JS
module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
```
