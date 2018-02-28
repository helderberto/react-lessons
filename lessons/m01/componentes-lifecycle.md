# Lifecycle

## [componentWillMount](#componentwillmount)

O método `componentWillMount` é executado antes de o componente ser renderizado, neste caso deve ser evitado de efetuar manipulações de DOM. 
Como o React pode ser executado tanto do lado do servidor como no front, este método também executa do lado do servidor 
sendo que o elemento não está na tela no momento da execução.

## [componentDidMount](#componentdidmount)

O método `componentDidMount` é executado logo após o componente ter sido renderizado. Neste caso você pode utilizar para manipulação de DOM e também para bibliotecas de terceiros.

## [render](#render)

O método `render` é executado sempre que o componente tem o DOM renderizado no browzer.

## [componentWillUnmount](#componentwillunmount)

O método `componentWillUnmount` é executado sempre que o componente for desmontado.

## [componentWillReceiveProps](#componentwillreceiveprops)

O método `componentWillReceiveProps` é atualizado sempre que recebe novas propriedades, recebendo como parâmetro `nextProps`. Este é o momento adequado para que você altere o `state` do seu componente antes que ele seja renderizado.

## [shouldComponentUpdate](#shouldcomponentupdate)

O método `shouldComponentUpdate` é executado quando você por alguma razão quer evitar que o componente seja atualizado, ele recebe dois parâmetros `nextProps` e `nextState` onde você pode utiliza-los para fazer verificações para não atualização do componente.

## [componentWillUpdate](#componentwillupdate)

O método `componentWillUpdate` é executado após o componente ter suas propriedades atualizads, é indicado o uso para efetuar verificações, mas não devem ser modificados estados do componente neste momento.

## [componentDidUpdate](#componentdidupdate)

O método `componentDidUpdate` é executado após a renderização do componente, ele tem dois parâmetros para utilização `prevProps` e `prevState`. Uma observação interessante neste método é que você consegue ter um histórico de alterações do componente, pois sempre consegue pegar a alteração anterior.
