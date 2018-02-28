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

O método `componentWillReceiveProps` é atualizado sempre que recebe novas propriedades, recebendo como parâmetro `nextProps`. Este é o momento adequado para que você altere o `state` do seu componente antes que ele seja renderizado.

## [shouldComponentUpdate](#shouldcomponentupdate)

O método `shouldComponentUpdate` é utilizado quando você por alguma razão quer evitar que o componente seja atualizado, ele recebe dois parâmetros 
`nextProps` e `nextState` onde você pode utiliza-los para fazer verificações para não atualização do componente.

## [componentWillUpdate](#componentwillupdate)

O método `componentWillUpdate` é utilizado para fazer alguma verificação ou alguma chamada, mas não devem ser modificados estados do componente neste momento.
