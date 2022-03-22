import React, { useState, useEffect } from 'react'
import CardContainer from './Card.js';
import { api } from "../../service/Api.js";

function Products() {
    const [produtos, setProdutos] = useState([])
    const [produtosEuro, setProdutosEuro] = useState([])
    useEffect(() => {
        api.get("/brazilian_provider").then((res) => setProdutos(res.data))
        api.get("/european_provider").then((res) => setProdutosEuro(res.data))
    })
    return (
        <div>
            {
                produtos === undefined && produtosEuro === undefined ?
                    <div>Aguarde o carregamento dos produtos</div>
                    :
                    <>
                        <div id='card'>
                            <CardContainer produtos={produtos} />
                            <CardContainer produtos={produtosEuro} />
                        </div>
                    </>
            }
        </div>
    )
}

export default Products;