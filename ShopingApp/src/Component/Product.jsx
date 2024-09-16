import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ecomContext } from '../Home'

function Product({product}) {

  // const[cart , setCart] = useState([])

  //   function handleAddToCart(productToAdd){
  //     setCart([...cart, productToAdd]);    
  //   }
  //   console.log(cart);
      const {handleAddToCart} = useContext(ecomContext)
   
  return (
    <div  className="product">
      <div className="product-photo">
        <img src={product.attributes.image} alt={product.attributes.title} />
      </div>
      <div className="content">
        <h3>{product.attributes.title}</h3>

        <p>${(product.attributes.price / 100).toFixed(2)}</p>
        <Link to=""  onClick={() => handleAddToCart(product)}>Add To Cart</Link>
      </div>
    </div>
  )
}

export default Product