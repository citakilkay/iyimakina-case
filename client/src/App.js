import React, { useEffect, useState } from 'react';
import AddProduct from './components/AddProduct';
import ProductsList from './components/ProductsList';
import axios from 'axios';
import './scss/main.css';
import { socketID } from './socket';

function App() {
  const [productName, setProductName] = useState();
  const [details, setDetails] = useState();
  const [owner, setOwner] = useState(socketID);
  const [products, setProducts] = useState([]);

  // Fetch Products
  useEffect(() => {
    console.log(owner);
    async function fetchProducts() {
      const result = await axios.get('http://localhost:5000/products');
      console.log(result.data);
      setProducts(result.data);
    }
    fetchProducts();
  }, [productName]);

  useEffect(() => {
    setOwner(socketID)
  }, [products])

  return(
    <>
      <h1>Your Id: {owner}</h1>
      <AddProduct owner={owner} details={details} productName={productName} setDetails={setDetails} setProductName={setProductName}  />
      <ProductsList products={products} owner={owner} />
    </>
  );
}

export default App;
