# React hot loader

## [Descrição](#descrição)

Serve como `live reload` com o diferencial de atualizar apenas os componentes que são alterados, sem atualizar toda a página.

## [Instalação](#instalação)

Para instalar o `React hot loader` você deve executar o seguinte comando `npm i --save-dev react-hot-loader`;

## [Configuração](#configuração)

* Incluir no arquivo `.babelrc`:
```
{
  "presets": ["es2015", "stage-0", "react"],
  "plugins": ["react-hot-loader/babel"]
}
```

* Incluir no arquivo `webpack.config.js` as chamadas `entry`, carregar `webpack` e a chamada do plugin:
```
'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

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

* Crie um arquivo chamado `server.js` na raíz do projeto, com as seguintes configurações:

```
'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Listening on http://localhost:3000');
});
```

* Vamos incluir em nosso `index.js` a chamada para `react-hot-loader` da seguinte maneira:

```
'use strict';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    renderApp(NextApp);
  });
}
```

* Adicione uma chamada `start` em seu arquivo `package.json`:

```
"scripts": {
  "start": "node server.js"
},
```

* Execute em seu terminal o seguinte comando `npm start`, e acesse em seu navegador `http://localhost:3000`.
