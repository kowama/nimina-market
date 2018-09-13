// initial state
const state = {
	products: [],
	categories: []
};

// getters
const getters = {
	getProducts(state) {
		return state.products;
	},
	getProductsCategories(state) {
		return state.categories;
	}
};

// actions
const actions = {
	setProducts({ commit }, products) {
		commit('setProducts', products);
	},
	setProductsCategories({ commit }, categories) {
		commit('setProductsCategories', categories);
	}
};

// mutations
const mutations = {
	setProducts(state, products) {
		state.products = products;
	},
	setProductsCategories(state, categories) {
		state.categories = categories;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
