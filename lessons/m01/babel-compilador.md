# Babel é um compilador JavaScript

[BabelJS](https://babeljs.io) é um compilador JavaScript indicado na própria documentação do React onde tem a funcionalidade de compilar 
os scripts para que o browser reconheça as funcionalidades do ES6, ES7. Segue um exemplo de código a seguir:

```
  <div id="app"></div>
  
  // Carregamos as bibliotecas antes do fechamento </body> de nosso HTML
  <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script> // babel compiler

  <script type="text/babel">
    ReactDOM.render(
      <h1>Hello World</h1>, 
      document.getElementById('app')
    );
  </script>
```