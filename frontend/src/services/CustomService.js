import axios from 'axios';
const API_URL = 'https://www.simpleticker.online';

export default class CustomersService{
	
	constructor(){}
	
	
	getCustomers() {
		const url = `${API_URL}/api-auth/`;
		return axios.get(url).then(response => response.data);
	}  
	createCustomer(customer){
		const url = `${API_URL}/api-auth/`;
		console.log('create')
		return axios.post(url, customer);
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
}