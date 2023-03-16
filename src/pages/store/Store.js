import React from 'react'
import Product from './Product';
import { PRODUCTS } from '../../Product';
import './Store.css';

const Store = () => {
  return (
    <div className='store'>
      <div className='title'>
      
      <h2>Products</h2>

      </div>
      <div className='products'>
        {PRODUCTS.map((product) => (
          <Product data={product}/>
        ))}
      
      </div>
    </div>
  )
}

export default Store;
