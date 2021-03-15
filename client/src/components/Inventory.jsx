import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { IconButton, Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'

const axios = require('axios')
const assign = require('lodash/assign')
const find = require('lodash/find')
const findIndex = require('lodash/findIndex')

const { useState, useEffect } = require('react');

export default function Inventory() {
  const [cart, setCart] = useState([]);
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    axios.get('/api/inventory')
      .then(({data}) => {
        const inventory = data.map(x => assign({}, x, {selectionCount: 0}))

        setInventory(inventory)
        // this.setState((state, props) => ({ inventory }))
      })
  }, []);

  const updateCount = (id, change) => {
    let item = find(inventory, x => x.id === id)
    if (change === 'increment') {
      item.selectionCount++
    } else if (change === 'decrement') {
      item.selectionCount--
    }

    const itemIndex = findIndex(inventory, x => x.id === item.id)
    // overwrite item at index with new count
    inventory[itemIndex] = item
    console.log(inventory)
    setInventory(inventory)
  }

  const addToCart = selections => {
    const cart = selections.filter(x => x.selectionCount > 0)

    setCart(cart)
  }

  const items = inventory.map(x =>
    <div key={x.id}>
      <p onClick={() => updateCount(x.id, 'decrement')}><span role="img" aria-label="up">🔽</span></p>
      <p>{`${x.name} ${x.selectionCount}`}</p>
      <p onClick={() => updateCount(x.id, 'increment')}><span role="img" aria-label="down">🔼</span> </p>
    </div>
  )

  return (
    <div className='App'>
      <h2>martin's bakery</h2>
      <IconButton aria-label="cart">
        <Badge badgeContent={cart.reduce((acc, cur) => acc + cur.selectionCount, 0)} color="secondary">
          <Link to='/cart'><ShoppingCartIcon /></Link>
        </Badge>
      </IconButton>
      <p>inventory</p>
      {items}

      <button onClick={() => addToCart(inventory)}>Add to cart</button>
    </div>
  )
}



export default class Inventory extends React.Component {

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

    this.setState((state, props) => ({ cart }))
  }

  updateCount = (id, change) => {
    let item = find(this.state.inventory, x => x.id === id)

    if (change === 'increment') {
      item.selectionCount++
    } else if (change === 'decrement') {
      item.selectionCount--
    }

    const itemIndex = findIndex(this.state.inventory, x => x.id === item.id)
    const inventory = this.state.inventory
    // overwrite item at index with new count
    inventory[itemIndex] = item

    this.setState((state, props) => ({ inventory }))
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
        <h2>martin's bakery</h2>
        <IconButton aria-label="cart">
          <Badge badgeContent={this.state.cart.reduce((acc, cur) => acc + cur.selectionCount, 0)} color="secondary">
            <Link to='/cart'><ShoppingCartIcon /></Link>
          </Badge>
        </IconButton>
        <p>inventory</p>
        {items}

        <button onClick={() => this.addToCart(this.state.inventory)}>Add to cart</button>
      </div>
    )
  }
}
