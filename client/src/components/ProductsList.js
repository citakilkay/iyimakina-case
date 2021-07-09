import React from 'react'
import Product from './Product'

const ProductsList = ({products}) => {
    return (
        <div className="products">
        {products.map((product) => {
          return (
            <div key={product.id} className="products__card">
              <Product product={product}/>
            </div>
          )
        })} 
        </div>
    )
}

export default ProductsList;
