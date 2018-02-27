'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render () {
    return (
      <div>
        <Title name='Helder' lastname={{ first: 'Burato', last: 'Berto' }} />
      </div>
    )
  }
}

export default App
