const state = {
	isUserLoggedIn: false,
	token: null,
	user: null
};

// getters
const getters = {
	getToken(state) {
		return state.token;
	}
};

// actions
const actions = {
	setToken({ commit }, token) {
		commit('setToken', token);
	},
	setUser({ commit }, user) {
		commit('setUser', user);
	}
};

// mutations
const mutations = {
	setToken(state, token) {
		state.token = token;
	},
	setUser(state, user) {
		state.user = user;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
