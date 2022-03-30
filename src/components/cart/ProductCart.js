import React, { useState, useEffect } from 'react'
import CartContainer from './cart.js';
import { api } from "../../service/ApiHeroku.js";

function ProductsCart() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        api.get("/produtos").then((res) => setProdutos(res.data))
    })
    return (
        <div>
            {
                produtos === undefined ?
                    <div>Aguarde o carregamento dos produtos</div>
                    :
                    <>
                        <div id='cart'>
                            <CartContainer produtos={produtos} />
                        </div>
                    </>
            }
        </div>
    )
}

export default ProductsCart;