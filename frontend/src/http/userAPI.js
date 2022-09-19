import { $host } from ".";
import axios from "axios";

export const registration = async ({username, password, email}) => {
    const response = await $host.post('/auth/users/', {username, email, password})
    return response
}
export const login = async ({username,  password}) => {
    const response = await $host.post('/auth/token/login/', {username,  password})
    const token = response.data.auth_token
    localStorage.setItem('token', token)
}
export const chek = async () => {
    const token = localStorage.getItem('token')
    return token
}

export const logout = async () => {
    const response = await axios.post('/auth/token/logout/', {}, 
    {headers:{
        Authorization: `Token ${localStorage.getItem('token')}`
    }})
    localStorage.removeItem('token')
}

export const crypto = async (data) => {
    const response = await axios.post('backend/api/update_ticker_setup/', data)
    console.log(response)
}