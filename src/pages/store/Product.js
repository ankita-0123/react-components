import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

const Product = (props) => {
    const {id, title, price,imageUrl} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

  return (
    <div className='product'>
        <img src={imageUrl}/>
        <div className='description'>
            <p><b>{title}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add To Cart
        {cartItemAmount>0&&<>({cartItemAmount})</>}</button>
    </div>
  )
}

export default Product
