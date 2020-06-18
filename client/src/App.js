import React from 'react'

import Delivery from './components/Delivery'
import Inventory from './components/Inventory'
import ShoppingCart from './components/ShoppingCart'

import Badge from 'react-bootstrap/Badge'

// xxx: make api call of all items with quantity > 0
const sampleInventory = [
  {
    quantity: 1,
    id: 1,
    name: 'foo',
  },
  {
    quantity: 2,
    id: 2,
    name: 'bar',
  },
]

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }

  addItemHandler = (id, count) => {
    console.log(id, count)
  }

  render() {
    return (
      <div className='App'>
        <ShoppingCart cart={this.state.cart}/>
        <Badge pill variant='danger'>{this.state.cart.length}</Badge>

        <Inventory addItemHandler={this.addItemHandler} inventory={sampleInventory}/>
      </div>
    )
  }
}
