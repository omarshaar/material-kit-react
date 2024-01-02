import axios from 'axios';
import env from './env.json';
import { handleLogin } from 'src/utils/handle-login';
import { useNavigate } from 'react-router-dom';

const BASE_URL = env.BASE_URL;

export const init = async (email, password) =>{
    const partnerData = await handleLogin();
    const API_Endpoint = `${BASE_URL}/api/init/${partnerData.data.id}`;

    const config = {
        headers: {
            'content-type': 'application/json'
        }
    };

    const Respo = await axios.get(API_Endpoint, config);
    
    return Respo.data;
}


export const getOrders = async (fillters, category) =>{
    let paramsArray = [];
    for(let key in fillters) paramsArray.push(`&${key}=${fillters[key]}`);
    const params = paramsArray.join("")
    const partnerData = await handleLogin();
    const API_Endpoint = `${BASE_URL}/api/orders/${partnerData.data.id}?category=${category}${params}`;


    const config = {
        headers: {
            'content-type': 'application/json'
        }
    };

    const Respo = await axios.get(API_Endpoint, config);
    
    return Respo.data;
}


export const getOrder = async (order_hub_id) =>{
    const partnerData = await handleLogin();
    const API_Endpoint = `${BASE_URL}/api/order/${partnerData.data.id}?order_hub_id=${order_hub_id}`;

    const config = {
        headers: {
            'content-type': 'application/json'
        }
    };

    const Respo = await axios.get(API_Endpoint, config);
    
    return Respo.data;
}

export const complatedOrder = async (id, ordertype, capital, hubID) =>{
    const partnerData = await handleLogin();
    const API_Endpoint = `${BASE_URL}/api/order/complated/${partnerData.data.id}`;

    const data = {
        order_id: id,
        order_type: ordertype,
        capital: capital,
        hub_id: hubID
    };
    const config = {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${partnerData.data.token}`
        }
    };

    console.log(partnerData.data.token);

    const Respo = await axios.post(API_Endpoint, data, config);
    
    return Respo.data;
}

export const editOrder = async (id, ordertype, order_data) =>{
    const partnerData = await handleLogin();
    const API_Endpoint = `${BASE_URL}/api/order/update/${partnerData.data.id}`;

    const data = {
        order_id: id,
        order_type: ordertype,
        order_data: order_data,
    };

    const config = {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${partnerData.data.token}`
        }
    };

    const Respo = await axios.post(API_Endpoint, data, config);
    
    return Respo.data;
}