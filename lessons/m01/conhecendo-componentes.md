# Conhecendo componentes ReactJS

## [Descrição](#descrição)

Os componentes criados em React por convenção são criados utilizando a primeira letra maiúscula para serem diferenciados de tags HTML's comuns;

## [Convenções](#convenções)

* Você sempre deve adicionar o método `render` para retornar a marcação interna do componente;
  * Não quebrar as tags HTML após o `return` no método `render`, pois o javascript automaticamente adiciona `;` por padrão caso não encontre elementos, ocasionando erros de sintaxe;
  * Você não pode retornar elementos sem uma tag que envolvá-os, não há possibilidade de retornar mais de um elemento sem que estejam envolvidos por um elemento pai.

```
## EXEMPLOS INVÁLIDOS: ##
export default class Title extends React.Component {
  render(
    return 
      <h1>
        Hello World
      </h1>
  )
}

export default class Title extends React.Component {
  render(
    return (
      <h1>Hello World</h1>
      <span>You're Welcome</span>
    )
  )
}

## EXEMPLOS VÁLIDOS: ##
export default class Title extends React.Component {
  render(
    return (
      <h1>Hello World</h1>
    )
  )
}

export default class Title extends React.Component {
  render(
    return (
      <div>
        <h1>Hello World</h1>
        <span>You're Welcome</span>
      </div>
    )
  )
}
```
