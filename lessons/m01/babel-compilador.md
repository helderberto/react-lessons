# Babel é um compilador JavaScript

[BabelJS](https://babeljs.io) é um compilador JavaScript indicado na própria documentação do React onde tem a funcionalidade de compilar 
os scripts para que o browser reconheça as funcionalidades do ES6, ES7. Segue um exemplo de código a seguir:

## Instalação

Para instalar no seu projeto, deve ser executado o comando `npm i --save-dev babel-core`.

## Presets

Para utilizar presets em conjunto com o BabelJS, você deve instalar `npm i --save-dev babel-loader`.

* Alguns presets que vamos utilizar:
  * Preset para utilização de ES6, deve ser instalado `npm i --save-dev babel-preset-es2015`;
  * Preset para utilização versões mais atuais do EcmaScript como funcionalidades do ES7, deve ser instalado `npm i --save-dev babel-preset-stage-0`.

## Configuração

Após efetuadas as instalações você deve criar o arquivo `.babelrc` na raíz do seu projeto definindo os presets que serão utilizados no seu projeto.

Exemplo de `.babelrc` a seguir:
```
{
  "presets": ['es2015', 'stage-0']
}
```

Neste momento deve ser atualizado o arquivo `webpack.config.js` para ser utilizado o BabelJS para compilar e ser gerado o bundle utilizando os presets carregados.

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
