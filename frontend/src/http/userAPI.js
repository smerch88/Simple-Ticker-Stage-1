import { $authHost, $host } from ".";

export const registration = async ({username, password, email}) => {
    const response = await $host.post('/auth/users/', {username, email, password})
    return response
}
export const login = async (username,  password) => {
    const response = await $host.post('/auth/token/login/', {username,  password})
    return response
}
export const chek = async () => {
    const response = await $host.post('/auth/users/')
    return response
}