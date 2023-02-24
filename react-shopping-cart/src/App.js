import React from "react";
import { BrowserRouter, Routes, Link, Route, Router } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";
import Navbar from "./components/Nav/Nav";
import Item from "./components/Shop/Item";
import Data from "./components/Shop/Data";
import { useEffect, useState } from "react";
import { ShopContext, ShopContextProvider } from "./components/Context/Context";

function App() {
 
  
  return (
      <ShopContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      </ShopContextProvider>
  );
}

export default App;
