import axios from 'axios';

const API_URL = 'https://www.simpleticker.online/backend';

export default class ApiService {

	constructor() { }

	getTrack(){
		const url = `${API_URL}/track`;
		return axios.get(url).then(response => response.data);
	}
}