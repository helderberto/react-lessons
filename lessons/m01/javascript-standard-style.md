# JavaScript Standard Style

## [Descrição](#descrição)

É utilizado para garantir a qualidade de código, tem alguns padrões definidos a serem seguidos para que o código siga um padrão de escrita.
Para saber mais detalhes sobre o que ele proporciona de funcionalidades acesse [aqui](https://standardjs.com) a documentação.

## [Instalação](#instalação)

Efetue a instalação utilizando o seguinte comando `npm i --save-dev standard standard-loader`.

## [Configuração](#configuração)

* Após efetuar a instalação, você deve configurar o `loader` do módulo no arquivo `webpack.config.js`:

```
Perceba que na chamada enforce: 'pre' você esta dizendo para ser executado o módulo antes de ser compilado o arquivo 
pelo módulo babel e após será executado o loader babel.

module: {
  rules: [
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'standard-loader'
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
  ]
}
```

## [Regras](#regras)

* 2 espaços – para indentação;
* Aspas simples para _strings_ – exceto em casos de _scaping_;
* Sem variáveis não utilizadas;
* Sem ponto em vírgula. É sério, fique tranquilo!;
* Não comece linhas com (, [ ou `;
* Espaço depois da condição `if (condition) { ... }`;
* Espaço depois `function nome function nome (arg) { ... }`;
* Sempre use === em vez de == - mas para verificar `obj == null` é permitido;
* Sempre faça uso do parâmetro de função `err` node.js;
* Sempre adicione o prefixo do browser global com _window_, exceto _document_ e _navigator_;
* Evite o uso acidental de globais do navegador como _open_, _length_, _event_, e _name_.
