import { useState } from 'react';

import axios from 'axios';

export default function AuthService () {

	const [errorMessage, setErrorMessage] = useState(null);
	
	const API_URL = process.env.NODE_ENV === 'production' 
				? 'https://www.simpleticker.online' 
				: 'https://localhost:8000';
				
	const createPerson = (params) => {
		setErrorMessage(null);

		const url = `${API_URL}/auth/users/`;
		axios({
            method: 'POST',
            url: url,
            params: {
                "username":  params.username,
                "email":  params.email,
                "password": params.password
            }
        }).then((res) => {
            console.log(res)
        }).catch(error => {
            // setErrorMessage(error.response.data[Object.keys(error.response.data)[0]][0])
            setErrorMessage("Error")
        })
	}
	// getCustomersByURL(link){
	// 	const url = `${API_URL}${link}`;
	// 	return axios.get(url).then(response => response.data);
	// }
	// getCustomer(pk) {
	// 	const url = `${API_URL}/api/customers/${pk}`;
	// 	return axios.get(url).then(response => response.data);
	// }
	// deleteCustomer(customer){
	// 	const url = `${API_URL}/api/customers/${customer.pk}`;
	// 	return axios.delete(url);
	// }
	
	// updateCustomer(customer){
	// 	const url = `${API_URL}/api/customers/${customer.pk}`;
	// 	return axios.put(url,customer);
	// }

	return {createPerson, errorMessage}
}