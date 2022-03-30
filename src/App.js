import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/layout/header/Navbar.js'
import Product from './components/products/product.js'
import Cart from './components/cart/cart.js'

function App() {

  return (
    <Router className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/produtos" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
