import store from '@/stores/index';
import api from './api';

api().defaults.headers.common['x-auth'] = store.getters.getToken || '';

export default {
	logOut() {
		return api().delete('user/logout');
	}
};
