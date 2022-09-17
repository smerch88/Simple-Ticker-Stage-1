import axios from "axios";

const API_URL = process.env.NODE_ENV === 'production' 
               ? 'https://www.simpleticker.online' 
               : 'https://127.0.0.1:8000';

const $host = axios.create({
    baseURL: API_URL
})

const $authHost = axios.create({
    baseURL: API_URL
})

const authInterceptor = config => {
    config.headers.autorization = `Token ${localStorage.getItem('token')}`
    return config;
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host, 
    $authHost
}