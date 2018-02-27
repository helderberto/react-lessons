import React from 'react'

class Title extends React.Component {
  render () {
    return (
      <h1>Olá {this.props.name + ' ' + this.props.lastname.first + ' ' + this.props.lastname.last}!</h1>
    )
  }
}

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: {
    first: 'Sem',
    last: 'sobrenome'
  }
}

export default Title
