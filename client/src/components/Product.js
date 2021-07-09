import React from 'react'

const Product = ({product}) => {
    return (
        <div>
            <h1>{product.name}</h1>
            <h2>{product.owner}</h2>
            <h2>{product.details}</h2>
        </div>
    )
}
export default Product
