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

  // Socket.IO
 /* const socket = io('http://localhost:5000');
  socket.on('connect', socket => {
    setOwner(socket.id);
  })*/
  useEffect(() => {
    setOwner(socketID)
    console.log(owner);
    async function fetchProducts() {
      const result = await axios.get('http://localhost:5000/products');
      console.log(result.data);
      setProducts(result.data);
    }
    fetchProducts();
  }, [productName]);
  // Fetch Products

  return(
    <>
      <h1>Your Id: {socketID}</h1>
      <AddProduct owner={owner} details={details} productName={productName} setDetails={setDetails} setProductName={setProductName}  />
      <ProductsList products={products}/>
    </>
  );
}

export default App;
