import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShopContext } from "../Context/Context"


export default function Navbar(props){

    const {qty, showQty, showQuantity} = useContext(ShopContext)

    return(
        <nav className="laptopia--nav"> 
                <Link to='/' ><h1 className="laptopia-header-name">Laptopia</h1></Link>
                <ul className="laptopia-nav-link">
                <Link to='/Shop' >
                    <li className="nav--toshop" >Shop</li>
                    </Link>
                    <Link to='/Cart'>
                    <li className="nav--tocart">
                        Cart
                    </li>
                    </Link>
                    {showQty &&<li className="nav--qty">+{qty}</li>}
                </ul>
                </nav>
    
    )
}