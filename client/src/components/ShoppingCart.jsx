import React from 'react'

export default function ShoppingCart(props) {
  return (
    props.cart.map(x => <div key={x.id}>{x.name}</div>)
  )
}
