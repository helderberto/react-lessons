# Webpack

## O que é?

O Webpack é um _module bundler_ um sistema de módulos, onde ele diversos módulos e cria um _bundle_ em `EcmaScript5` no formato que os browsers possam compreender.

A ferramenta oferece diversas funcionalidades e você pode saber mais dos seus poderes na própria documentação clicando [aqui](https://webpack.github.io).

## [Instalação](#webpack-install)

* Rodar o comando `npm install --save-dev webpack`.

## [Configuração](#webpack-config)

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

## [Módulos](#webpack-modules)

Adicionando módulos a serem carregados:

```
module.exports = {
  entry: path.join(__dirname, 'src', 'index'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  // Neste ponto é carregado o módulo babel no arquivo webpack
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel-loader'
    }]
  }
}
```

## [Sourcemaps](#webpack-sourcemaps)

Sourcemaps mapeiam os elementos com seus arquivos de origem, facilitando na hora de efetuar o debug, sem você ter de lidar com o arquivo gerado pelo webpack.

```
module.exports = {
  devtool: 'source-map',

  entry: path.join(__dirname, 'src', 'index'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  // Neste ponto é carregado o módulo babel no arquivo webpack
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel-loader'
    }]
  }
}
```
