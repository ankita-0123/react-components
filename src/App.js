import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import './App.css';
import Store from './pages/store/Store';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import About from './pages/about/About'
import ShopContextProvider from "./context/ShopContext";



const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Store" element={<Store/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
}
export default App;