'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      time: 0,
      showTimer: true
    }

    console.log('constructor app')
  }

  componentWillMount () {
    console.log('componentWillMount app')
  }

  componentDidMount () {
    console.log('componentDidMount app')
  }

  render () {
    console.log('render app')

    return (
      <div>
        <Timer time={this.state.time} />
        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}>Change props</button>
      </div>
    )
  }
}

export default App
