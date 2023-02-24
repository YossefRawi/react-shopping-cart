import React from 'react'
import lapimg from './laptop-png-4.png'
import { useContext } from 'react'
import { ShopContext } from '../Context/Context'


const CartItem = (props) => {
    const {id,name,price,image} = props.item

    const {cartItems, addToCart, removeFromCart, updateCartItemCount, removeComplete} = useContext(ShopContext)

    
  return (
    <div className='cart--item'>
            <img src={image}/>
            <h1>{name}</h1>
            <h2>${price}</h2>
                <div className='cart-item-qty'>
                    <button onClick={() => removeFromCart(id)} className='cart-qty-sub'>-</button>
                    <input min={0} value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value))} />
                    <button onClick={() => addToCart(id) } className='cart-qty-add'>+</button>
                </div>
            <button onClick={() => removeComplete(id)} >Remove</button>
    </div>
  )
}

export default CartItem
