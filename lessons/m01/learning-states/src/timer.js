'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }

    this.timer = null

    console.log('constructor timer')
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps timer', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate timer', this.props, nextProps)
    return this.props !== nextProps
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate timer', this.props, nextProps)
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)

    console.log('componentWillUnmount timer')
  }

  render () {
    console.log('render timer')

    return (
      <div>
        Timer: {this.state.time}
      </div>
    )
  }
}

export default Timer
