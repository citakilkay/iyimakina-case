import React, { useEffect, useState } from 'react';
import AddProduct from './components/AddProduct';
import ProductsList from './components/ProductsList';
import axios from 'axios';
import './scss/main.css';
import { io } from 'socket.io-client';
import Product from './components/Product';

function App() {
  const[socketID, setSocketID] = useState();
  const [productName, setProductName] = useState();
  const [details, setDetails] = useState();
  const [owner, setOwner] = useState();

  // Socket.IO
  const socket = io('http://localhost:5000');
  socket.on('connect', () => {
    setSocketID(socket.id);
  })


  const[products, setProducts] = useState([]);

  // Fetch Products
    async function fetchProducts () {
      const result = await axios.get('http://localhost:5000/products');
      console.log(result.data);
      setProducts(result.data);
    }
    fetchProducts();

  return(
    <>
      <h1>Your Id: {socketID}</h1>
      <AddProduct owner={owner} details={details} productName={productName} socket={socket} setDetails={setDetails} setProductName={setProductName}  />
      <ProductsList products={products}/>
    </>
  );
}

export default App;
