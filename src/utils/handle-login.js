import { json } from "react-router-dom";

export async function handleLogin(callback) {
    let loginData = localStorage.getItem("log");
    callback && callback(loginData);
    
    if(loginData) return JSON.parse(loginData);
}