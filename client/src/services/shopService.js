import axios from 'axios';

 const api = ()=>axios.create({
	baseURL: 'http://localhost:1337/api/'
});
	
export default {
	fetchCategories() {
		return api().get('/categories');
	},
	fetchProducts() {
		return api().get('/products');
	}
};
