import axios from 'axios';
import store from '@/stores/index';

const api = () =>
	axios.create({
		baseURL: 'http://localhost:1337/api/user',
		headers: { 'x-auth': store.getters.getToken || '' }
	});

export default {
	update(toUpdate) {
		return api().post('/update', toUpdate);
	},
	logOut() {
		return api().delete('/logout');
	}
};
