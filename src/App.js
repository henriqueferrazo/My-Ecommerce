import React, { useState, useEffect } from "react";
import './App.css'
import Navbar from './components/layout/header/Navbar.js'
import CardContainer from './components/products/Card.js';
import { api } from "./service/Api.js";

function App() {
  const [produtos, setProdutos] = useState([])
  const [produtosEuro, setProdutosEuro] = useState([])
  useEffect(() => {
    api.get("/brazilian_provider").then((res) => setProdutos(res.data))
    api.get("/european_provider").then((res) => setProdutosEuro(res.data))
  })
  return (
    <div className="app">
      {
        produtos === undefined && produtosEuro === undefined ?
          <div>Aguarde o carregamento dos produtos</div>
          :
          <>
            <Navbar />
            <div id='card'>
              <CardContainer produtos={produtos} />
              <CardContainer produtos={produtosEuro} />
            </div>


          </>
      }
    </div>
  );
}

export default App;
