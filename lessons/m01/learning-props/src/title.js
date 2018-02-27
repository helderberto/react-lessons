import React from 'react'

class Title extends React.Component {
  render () {
    return (
      <h1>Olá {this.props.name + ' ' + this.props.lastname}!</h1>
    )
  }
}

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Sem sobrenome'
}

export default Title
