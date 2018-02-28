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

    console.log('constructor')
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  render () {
    console.log('render')

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
