import React, { useState } from 'react'

const find = require('lodash/find')
const findIndex = require('lodash/findIndex')

export default class Inventory extends React.Component {

  constructor(props) {
    super(props)

     const selections = props.inventory.map(x => ({
      id: x.id,
      name: x.name,
      count: 0,
    }))

    this.state = {
      selections,
    }
  }

  updateCount = (id, change) => {
    let item = find(this.state.selections, x => x.id === id)

    if (change === 'increment') {
      item.count++
    } else if (change === 'decrement') {
      item.count--
    }

    const itemIndex = findIndex(this.state.selections, x => x.id === item.id)
    // overwrite item at index with new count
    this.state.selections[itemIndex] = item

    this.setState(this.state.selections);
  }

  render() {

    const items = this.state.selections
      .map(x =>
      <div key={x.id}>
        <p onClick={() => this.updateCount(x.id, 'decrement')}> 🔽 </p>
        <p onClick={() => this.props.addItemHandler(x.id, x.count)}>
          {`${x.name} ${x.count}`}
        </p>
        <p onClick={() => this.updateCount(x.id, 'increment')}> 🔼 </p>
      </div>
    )

    return (
      <>
        <p>inventory</p>
        {items}
        <button onClick={this.props.addItemHandler}>click me</button>
      </>
    )
  }
}
