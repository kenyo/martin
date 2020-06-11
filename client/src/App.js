import React from 'react'
import { Box } from 'rebass'
import { Label, Input } from '@rebass/forms'

import Delivery from './components/Delivery'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Delivery />
      </div>
    )
  }
}
