import React, { useEffect, useState } from 'react';
import AddProduct from './components/AddProduct';
import ProductsList from './components/ProductsList';
import axios from 'axios';
import './scss/main.css';
function App() {
  const[products, setProducts] = useState([]);
  const[isSubmitted, setIsSubmitted] = useState(0); // When it is set true, fetch the product data again.
  useEffect(() => {
    async function fetchProducts () {
      const result = await axios.get('http://localhost:5000/products');
      console.log(result.data);
      setProducts(result.data);
    }
    fetchProducts();
  },[]);
  return(
    <>
      <AddProduct isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
      <ProductsList products={products}/>
    </>
  );
}

export default App;
