import axios from 'axios';
import env from './env.json';
import { handleLogin } from 'src/utils/handle-login';
import { useNavigate } from 'react-router-dom';

const BASE_URL = env.BASE_URL;

export const getUsers = async (per_page, page) =>{
    const partnerData = await handleLogin();
    const API_Endpoint = `${BASE_URL}/api/users/${partnerData.data.id}?per_page=${per_page}&page=${page}`;


    const config = {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${partnerData.data.token}`
        }
    };

    const Respo = await axios.get(API_Endpoint, config);
    
    return Respo.data;
}