import React from 'react'

// import Checkout from './components/Checkout'
import ShoppingCart from './components/ShoppingCart'
import Inventory from './components/Inventory'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      inventory: [],
      cart: [],
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/'>
            <Inventory />
          </Route>
          <Route path='/cart'>
            <ShoppingCart cart={this.state.cart} />
          </Route>

        </Switch>
      </Router>
    )
  }
}
