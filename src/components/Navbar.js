import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="links">
        <Link to='/home'>Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="cart">
        <Button outline rounded className='mx-2' color='light'>
          <Link to="/cart">Cart</Link>
        </Button>
      </div>
    </div>
    <div className='title'>
      <h1>The Generics</h1>
      
    </div>
    </>
  );
};

export default Navbar;

