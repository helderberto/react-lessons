# Lifecycle

## [componentWillMount](#componentwillmount)

O método `componentWillMount` é executado antes de o componente ser renderizado, neste caso deve ser evitado de efetuar manipulações de DOM. 
Como o React pode ser executado tanto do lado do servidor como no front, este método também executa do lado do servidor 
sendo que o elemento não está na tela no momento da execução.

## [componentDidMount](#componentdidmount)

O método `componentDidMount` é executado logo após o componente ter sido renderizado. Neste caso você pode utilizar para manipulação de DOM e também para bibliotecas de terceiros.

## [render](#render)

O método `render` é utilizado para renderizar os elementos do seu componente.

## [componentWillUnmount](#componentwillunmount)

O método `componentWillUnmount` é utilizado para desmontar componentes.

## [componentWillReceiveProps](#componentwillreceiveprops)

O método `componentWillReceiveProps` é atualizado sempre que recebe novas propriedades, recebendo como parâmetro `nextProps`.
