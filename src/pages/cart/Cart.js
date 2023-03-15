import React,{useContext}from 'react';
import { PRODUCTS } from '../../Product';
import './Cart.css';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

import { ShopContext } from '../../context/ShopContext';

const Cart = () => {
  const {cartItems} = useContext(ShopContext)
  const navigate = useNavigate()
  
  const totalPrice = Object.keys(cartItems).reduce((total, id) => {
    const item = PRODUCTS.find(product => product.id === id);
    return total + (item.price * cartItems[id]);
  }, 0);

  return (
    <div className='cart'>
      <h1>Cart Items</h1>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !==0){
            return <CartItem data={product}/>
          }
        })}
      </div>
      <div className='checkout'>
        <p>Total: ${totalPrice.toFixed(2)}</p>
        <button onClick={()=>navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Cart;
