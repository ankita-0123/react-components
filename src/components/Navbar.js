import React from "react";
import { NavLink } from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="links">
        <NavLink to='/home'>Home</NavLink>
        <NavLink to="/store">Store</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="cart">
        
          <NavLink to="/cart" className="navbar-link cart-trolly--link">
            <FiShoppingCart className="cart-trolley" />
            <span className="cart-total--item">10</span>
          </NavLink>
       
      </div>
    </div>
    <div className='title'>
      <h1>The Generics</h1>
      
    </div>
    </>
  );
};

export default Navbar;

