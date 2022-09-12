import axios from "axios";

const BASE_URL = 'www.simpleticker.online'

const $host = axios.create({
    baseURL: BASE_URL
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