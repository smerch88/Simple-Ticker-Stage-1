import axios from 'axios';

const API_URL = 'http://127.0.0.1/backend';

export default class ApiService {

	constructor() { }

	getTrack(){
		const url = `${API_URL}/track`;
		return axios.get(url).then(response => response.data);
	}
}