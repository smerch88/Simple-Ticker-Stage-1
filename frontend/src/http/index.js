import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL === 'production' 
  ? 'https://www.simpleticker.online' 
  : 'https://127.0.0.1:8000';

const $host = axios.create({
    baseURL: API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.autorization = `Bearer ${localStorage.getItem('token')}`
    return config;
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host, 
    $authHost
}