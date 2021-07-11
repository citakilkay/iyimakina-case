import React from 'react'
import Product from './Product'

const ProductsList = ({products, owner}) => {
    return (
        <div className="products">
        {products.map((product) => {
          return (
            <div key={product._id} className="products__card">
              <Product product={product} owner={owner}/>
            </div>
          )
        })} 
        </div>
    )
}

export default ProductsList;
