import React from 'react'

// import Checkout from './components/Checkout'
import ShoppingCart from './components/ShoppingCart'
import { IconButton, Badge } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const axios = require('axios')
const assign = require('lodash/assign')
const find = require('lodash/find')
const findIndex = require('lodash/findIndex')

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      inventory: [],
      cart: [],
    }
  }

  componentDidMount() {
    axios.get('/api/inventory')
      .then(({data}) => {
        const inventory = data.map(x => assign({}, x, {selectionCount: 0}))

        this.setState((state, props) => ({ inventory }))
      })
  }

  addToCart = selections => {
    const cart = selections.filter(x => x.selectionCount > 0)

    this.setState({cart})
  }

  updateCount = (id, change) => {
    let item = find(this.state.inventory, x => x.id === id)

    if (change === 'increment') {
      item.selectionCount++
    } else if (change === 'decrement') {
      item.selectionCount--
    }

    const itemIndex = findIndex(this.state.inventory, x => x.id === item.id)
    // overwrite item at index with new count
    this.state.inventory[itemIndex] = item

    this.setState(this.state.inventory);
  }

  render() {
    const items = this.state.inventory.map(x =>
      <div key={x.id}>
        <p onClick={() => this.updateCount(x.id, 'decrement')}> 🔽 </p>
        <p>{`${x.name} ${x.selectionCount}`}</p>
        <p onClick={() => this.updateCount(x.id, 'increment')}> 🔼 </p>
      </div>
    )

    return (
      <div className='App'>
        <ShoppingCart cart={this.state.cart}/>
        <IconButton aria-label="cart">
          <Badge badgeContent={this.state.cart.reduce((acc, cur) => acc + cur.selectionCount, 0)} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>inventory</p>
        {items}

        <button onClick={() => this.addToCart(this.state.inventory)}>Add to cart</button>
      </div>
    )
  }
}
