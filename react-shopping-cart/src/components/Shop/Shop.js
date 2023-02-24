import './shop.css'
import Item from './Item'
import Data from './Data'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Shop(props){
    
    
    
const ItemElements = 
    Data.map(item => {return(<Item key={item.id} item ={item}/>)})
    
        
    return(
        <>
        <div className='shop--container'>
        <aside className="shop--sidebar">
            <h1 className="shop--header">Shop</h1>
            <ul className="shop--list">
            <li>Acer </li>
            <li>Asus </li>
            <li>Dell </li>
            <li>Hp </li>
            <li>Lenovo</li>
            </ul>
        </aside>
        <main className='shop--items'>
            {ItemElements}
        </main>
        </div>
        
        </>
    )
}