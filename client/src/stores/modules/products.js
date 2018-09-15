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
	},
	getMyProducts(state) {
		return (myID) => state.products.filter((item) => item.owner === myID);
	}
};

// actions
const actions = {
	setProducts({ commit }, products) {
		commit('setProducts', products);
	},
	putProduct({ commit }, product) {
		commit('putProduct', product);
	},
	setProductsCategories({ commit }, categories) {
		commit('setProductsCategories', categories);
	},
	putProductCategory({ commit }, category) {
		commit('putProductCategory', category);
	}
};

// mutations
const mutations = {
	setProducts(state, products) {
		state.products = products;
	},
	putProduct(state, product) {
		state.products.unshift(product);
	},
	setProductsCategories(state, categories) {
		state.categories = categories;
	},
	putProductCategory(state, category) {
		state.categories.unshift(category);
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
