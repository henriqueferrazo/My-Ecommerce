import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/layout/header/Navbar.js'
import Product from './components/products/product'
import Cart from './components/cart/cart.js'

function App() {

  return (
    <BrowserRouter className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />}/>
        <Routes path="/carrinho" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
