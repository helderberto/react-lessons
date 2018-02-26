# Sobre a biblioteca ReactJS

## [Descrição](#descrição)

ReactJS é uma biblioteca criada pelo Facebook para facilitar a criação de interfaces de usuários (UI).

## [Convenções](#convenções)

Componentes React por convençam devem sempre iniciar com a primeira letra maiúscula para diferenciar-se de elementos HTML comuns.

## [Quando não utilizar](#quando-não-utilizar)

Sistemas que servem apenas para exibição de conteúdo, como: Websites institucionais, blogs.

## [Problemas que resolve](#problemas-que-resolve)

* Modularização (Separação de responsabilidades);
* Componentização;
* Performance (Manipulação de DOM).

## [Observações](#observações)

``React.createElement !== document.createElement``

Quando utilizado React para criar elementos é gerado um objeto com as propriedades React, diferente de `document.createElement` que gera um elemento html.
