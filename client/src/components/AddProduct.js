import React, { useState } from 'react';
import axios from 'axios';
const AddProduct = ({owner, details, productName, setProductName, setDetails }) => {

    // Add a Product with axios post
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            url: 'http://localhost:5000/products/add',
            data: {
                name: productName,
                details,
                owner: owner
            }
        }).then((res) => {
                console.log(res);
                e.target.reset();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="productName">Input For Machine Name</label>
                <input type="text" name="productName" onChange={(e) => setProductName(e.target.value)} required /><br /><br />
                <label htmlFor="details" >Input For Details</label>
                <input type="textarea" name="details" onChange={(e) => setDetails(e.target.value)} required /><br /><br />
                <button>Submit</button>
            </form>
        </>
    );
}
export default AddProduct;