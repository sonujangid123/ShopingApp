import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://strapi-store-server.onrender.com/api/products');
      setProducts(response.data.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="products-main">
        <form action="">
          <h3>Search Products</h3>
          <input type="text" placeholder="Search Products..." />
          <h3>Search Category</h3>
          <select name="" id="" className=" ">
            <option value="all">All</option>
            <option value="table">Table</option>
            <option value="chairs">Chair</option>
            <option value="kids">Kids</option>
            <option value="sofa">Sofas</option>
            <option value="bed">Beds</option>
          </select>
          <h3>Select Company</h3>
          <select name="" id="" className=" ">
            <option value="all">All</option>
            <option value="modenza">Modenza</option>
            <option value="luxora">Luxora</option>
            <option value="artifex">Artifex</option>
            <option value="comfora">Comfora</option>
            <option value="homestead">Homestead</option>
          </select>
          <h3>Sorted by</h3>
          <select name="" id="" className=" ">
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="lowhigh">low-high</option>
            <option value="highlow">high-low</option>
          </select>
          <br />
          <button>ClearFilter</button>
        </form>
        <div className="products2">
          {products
            ? products.map((product) => {
                return (
                  <div key={product.id} className="product2">
                    <div className="product-photo2">
                      <img src={product.attributes.image} alt={product.attributes.title} />
                    </div>
                    <div className="content2">
                      <h3>{product.attributes.title}</h3>
                      <p>${(product.attributes.price / 100).toFixed(2)}</p>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}

export default Products;
