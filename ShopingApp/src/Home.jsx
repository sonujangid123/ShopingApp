// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart"
import App from "./App"
import Header from "./Component/Header"
import Products from "./Component/Products"


function Home() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
         <Route path="/"  element={<App/>}></Route>
         <Route path="/products"  element={<Products/>}></Route>
         <Route path="/cart"  element={<Cart/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default Home