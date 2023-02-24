import { useContext } from "react"
import { ShopContext } from "../Context/Context"



export default function Item(props){
    //first time destructuring
    const {id,name,price,image,quantity} = props.item
    const {addToCart, cartItems, showQuantity} = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
    return(
        <div className="shop--card">
            <img  className="card--image" src={image}/>
            <h2 className="card--name">{name}</h2>
            <h3 className="card--price">${price}</h3>
            <button onClick={() => addToCart(id)} className="card-button">Add to Card
            {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
            
        </div>
    )
}