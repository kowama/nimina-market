import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import cart from './modules/cart';
import user from './modules/user';
import products from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [
		createPersistedState({
			key: 'nimina-data'
		})
	],
	modules: {
		user,
		cart,
		products
	}
});
