import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const registration = async ({username, password, email}) => {
    const response = await $host.post('/auth/users/', {username, email, password})
    return response
}
export const login = async ({username,  password}) => {
    const response = await $host.post('/auth/token/login/', {username,  password})
    console.log(response)
    const token = response.data.auth_token
    localStorage.setItem('token', token)
}
export const chek = async () => {
    const token = localStorage.getItem('token')
    return token
}

export const logout = async () => {
    const response = await $authHost.post('/auth/token/logout/')
    
    console.log(response)
}

export const crypto = async (data) => {
    const headers = `Authorization: Token ${localStorage.getItem('token')}`
    const token = localStorage.getItem('token')
    const response = await $host.post('/api/update_ticker_setup/', data)
    console.log(response)
}