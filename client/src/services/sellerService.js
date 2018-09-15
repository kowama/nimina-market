import axios from 'axios';
import store from '@/stores/index';

const api = () =>
	axios.create({
		baseURL: 'http://localhost:1337/api/seller',
		headers: { 'x-auth': store.getters.getToken || '' }
	});

export default {
	postProduct(product) {
		return api().post('/product', product);
	},
	addProductCategory(category) {
		return api().post('/category', category);
	},
	fechProducts() {
		return api().get('/products');
	}
};
