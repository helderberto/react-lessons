import React from 'react'
import Title from './title'

class App extends React.Component {
  render () {
    return (
      <div>
        <Title name='Helder' lastname={{ first: 'Burato', last: 'Berto' }} />
      </div>
    )
  }
}

export default App
