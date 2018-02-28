import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Valor inicial'
    }
  }

  render () {
    return (
      <div className='container'>
        <form>
          <input type='text' value={this.state.value} onChange={(e) => {
            this.setState({ value: e.target.value })
          }} />
        </form>
      </div>
    )
  }
}

export default App
