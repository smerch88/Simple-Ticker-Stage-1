import axios from 'axios';

export default function AuthService () {
	
	const API_URL = process.env.NODE_ENV === 'production' 
				? 'http://www.simpleticker.online/backend' 
				: 'http://localhost:8000/backend';
				
	const createPerson = (params) => {
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
            console.log(error)
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

	return {createPerson}
}