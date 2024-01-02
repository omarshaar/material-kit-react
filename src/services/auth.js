import axios from 'axios';
import env from './env.json';

const BASE_URL = env.BASE_URL;

export const login = async (email, password) =>{
    const API_Endpoint = `${BASE_URL}/api/parnter/login`;

    const data = {
        email: email,
        password: password
    };
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    };

    const Respo = await axios.post(API_Endpoint, data, config);
    
    return Respo.data;
}