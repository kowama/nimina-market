import axios from 'axios';
import store from '@/stores/index';


const api =()=> axios.create({
	baseURL: 'http://localhost:1337/api/',
	headers: {'x-auth': store.getters.getToken || ''}

});

export default {
	logOut() {
		return api().delete('user/logout');
	}
};
