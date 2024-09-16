// import React from 'react'
import { useContext } from "react";
import { IoMdCart } from "react-icons/io";

import { Link } from "react-router-dom"
import { ecomContext } from "../Home";

function Header() {
     const{cart} =  useContext(ecomContext);
   return (
      <>
         <div className="navbar">
            <a className="" href="/loggedin">Login / Guest</a>
            <a className="create" href="/register">Create Account</a>
         </div>
         <header>
            <h2 className="title-heading"><Link to="">Shopping App</Link></h2>
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/products">Products</Link></li>
               <li><Link to="/cart">Cart</Link></li>
               <li><Link to="" ><IoMdCart /><span>{cart.length}</span></Link></li>
            </ul>

         </header>
      </>
   )
}

export default Header