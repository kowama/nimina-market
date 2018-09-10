const state = {
	isUserLoggedIn: false,
	token: null,
	user: null
};

// getters
const getters = {
	isUserLoggedIn(state) {
		return state.isUserLoggedIn;
	},
	getToken(state) {
		return state.token;
	},
	getUser(state) {
		return state.user;
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
		if (state.token) {
			state.isUserLoggedIn = true;
		} else {
			state.isUserLoggedIn = false;
		}
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
