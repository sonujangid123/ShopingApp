// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart"
import App from "./App"
import Header from "./Component/Header"
import Products from "./Component/Products"
import { createContext, useState } from "react"


export const ecomContext = createContext(null);

function Home() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(productToAdd) {
    setCart([...cart, productToAdd]);
  }
  // console.log(cart);





  return (
    <BrowserRouter>
      <ecomContext.Provider value={{cart, setCart, handleAddToCart}}>
        <Header />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>

        </Routes>
      </ecomContext.Provider>
    </BrowserRouter>
  )
}

export default Home