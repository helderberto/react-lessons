import React from 'react'
import Title from './title'

class App extends React.Component {
  render () {
    return (
      <div>
        <Title name='Helder' />
        <label htmlFor='input' data-label='input'>Input</label>
        <input type='text' id='input' aria-hidden='true' />
      </div>
    )
  }
}

export default App
