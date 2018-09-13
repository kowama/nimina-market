import axios from 'axios';

 const api = ()=>axios.create({
	baseURL: 'http://localhost:1337/api/'
});
	
export default {
	register(credentials) {
		return api().post('account/register', credentials);
	},
	login(credentials) {
		return api().post('account/login', credentials);
	}
};
