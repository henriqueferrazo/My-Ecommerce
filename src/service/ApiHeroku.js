import axios from "axios";


export const api = axios.create({
    baseURL:`https://ecommercedevjr-api.herokuapp.com/produtos`
})