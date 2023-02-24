import {createContext, useState} from "react";
import Data from "../Shop/Data";


export const ShopContext = createContext(null);


const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());


  

  

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Data.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  //whenever i click on an item it adds it to the specified ID 
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());

  };

  const removeComplete = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: 0}))

  }



 





  const contextValue = {
    cartItems,

    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    removeComplete
  };


return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};