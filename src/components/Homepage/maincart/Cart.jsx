import React from 'react'
import "./maincart.css"

function Cart(props) {
  return (
    <div className='cart'>
        <img src={props.img} alt="here" />
    </div>
  )
}

export default Cart