import React, { useState } from 'react'
const find = require('lodash/find')

export default class Inventory extends React.Component {

  constructor(props) {
    super(props)

    const selection = props.inventory.map(x => ({
      id: x.id,
      name: x.name,
      count: 1,
    }))

    this.state = {
      selection,
    }
  }

  render() {
    const items = this.state.selection
      .map(x => <p key={x.id} onClick={() => this.props.addItemHandler(x.id) } >
        {x.name}
        </p>)

    return (
      <>
        <p>inventory</p>
        {items}
        <button onClick={this.props.addItemHandler}>click me</button>
      </>
    )
  }
}
