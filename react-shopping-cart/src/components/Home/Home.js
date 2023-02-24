import { Link } from "react-router-dom"

export default function Home(){
    return(
        <main className="home--main">
            <div className="home-laptop-container">
            <h2 className="home-laptop-desc">
            Lenovo Legion 5 Pro Laptop - 11th Intel Core i7-11800H, <br/>
            16GB RAM, 512GB SSD, NVIDIA RTX 3050 Ti 4GB GDDR6 Graphics.
            
            </h2>
            <Link to='/Shop'>
            <button className="home-shopnow-button">Shop Now!</button>
            </Link>
            </div>
            
        </main>
    )
}