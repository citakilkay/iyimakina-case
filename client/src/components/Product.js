import React, {useState} from 'react'

const Product = ({product}) => {
    const[offer, setOffer] = useState();
    return (
        <div>
            <h1>Name: {product.name}</h1>
            <h2>Owner Id: {product.owner}</h2>
            <h2>Details: {product.details}</h2>
            <button>Offer</button>
            <label htmlFor="offer">Give an offer</label>
            <input type="text" name="offer" onChange={(e) => setOffer(e.target.value)} required /><br /><br />
        </div>
    )
}
export default Product
