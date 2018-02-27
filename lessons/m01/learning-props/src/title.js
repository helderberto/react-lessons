import React from 'react'

class Title extends React.Component {
  render () {
    return (
      <h1>Olá {this.props.name}!</h1>
    )
  }
}

export default Title
