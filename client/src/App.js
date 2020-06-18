import React from 'react'

import Checkout from './components/Checkout'
import Inventory from './components/Inventory'
import ShoppingCart from './components/ShoppingCart'
import { IconButton, Badge } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const axios = require('axios')

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
      inventory: [],
      cart: [],
    }
  }

  componentWillMount() {
    axios.get('/api/inventory')
      .then(({data}) => this.setState((state, props) => ({inventory : data})))
  }

  addItemHandler = selections => {
    const cart = selections.filter(x => x.count > 0)

    this.setState({cart})
  }

  render() {
    return (
      <div className='App'>
        <ShoppingCart cart={this.state.cart}/>
        <IconButton aria-label="cart">
          <Badge badgeContent={this.state.cart.reduce((acc, cur) => acc + cur.count, 0)} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <Inventory addItemHandler={this.addItemHandler} inventory={sampleInventory} foo={this.state.inventory}/>
      </div>
    )
  }
}
