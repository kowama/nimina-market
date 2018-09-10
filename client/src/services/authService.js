import api from './api';

export default {
	register(credentials) {
		return api().post('account/register', credentials);
	},
	login(credentials) {
		return api().post('account/login', credentials);
	}
};
