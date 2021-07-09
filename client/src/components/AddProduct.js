import React, { useState } from 'react';
import axios from 'axios';
const AddProduct = () => {
    const [productName, setProductName] = useState();
    const [details, setDetails] = useState();
    const [owner, setOwner] = useState();

    // Add a Product
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            url: 'http://localhost:5000/products/add',
            data: {
                name: productName,
                details,
                owner
            }
        }).then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        e.target.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="productName">Input For Machine Name</label>
                <input type="text" name="productName" onChange={(e) => setProductName(e.target.value)} required /><br /><br />
                <label htmlFor="details" >Input For Details</label>
                <input type="textarea" name="details" onChange={(e) => setDetails(e.target.value)} required /><br /><br />
                <label htmlFor="owner" >Input For Owner</label>
                <input type="textarea" name="owner" onChange={(e) => setOwner(e.target.value)} required /><br /><br />
                <button>Submit</button>
            </form>
        </>
    );
}
export default AddProduct;