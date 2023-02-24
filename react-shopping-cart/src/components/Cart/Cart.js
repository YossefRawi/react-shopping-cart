import './cart.css'
import Data from '../Shop/Data'
import CartItem from './CartItem'
import { useContext } from 'react'
import { ShopContext } from '../Context/Context'



export default function Cart(){
    const {cartItems, getTotalCartAmount,checkout} = useContext(ShopContext)

    let totalCartAmount = getTotalCartAmount()
    const CartElements = Data.map(Item => {
        if(cartItems[Item.id] !== 0){
        return <CartItem item={Item} key={Item.id}  />
    }})

    return(
        <>
        <header className='cart--header'>
            <h1>Total: {totalCartAmount && <>${totalCartAmount}</>}</h1>
            <button onClick={checkout} className='checkout-button'>Check Out</button>
        </header>
        
        <main className='cart--main'>
        {CartElements}
        </main>

        </>
    )
}