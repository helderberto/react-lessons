# Webpack Dev Server

## [Descrição](#descricão)

Oferece a funcionalidade de um servidor onde acompanha as mudanças dos arquivos e cria um novo _bundle_ em tempo de execução.

## [Instalação](#instalação)

* Rodar o comando `npm install --save-dev webpack-dev-server`.

## [Configuração](#configuração)

* Editar o arquivo de `webpack.config.js`, adicionar o `publicPath` onde será atualizado o bundle em memória:
```
module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/' // pode ser utilizado o mesmo caminho de `dist`
  }
}
```
