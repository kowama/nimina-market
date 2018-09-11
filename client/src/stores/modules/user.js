const intialState = () => {
	return {
		token: null,
		user: null
	};
};
//state
const state = intialState();

// getters
const getters = {
	isUserLoggedIn(state) {
		return state.token ? true : false;
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
	},
	resetUserState({ commit }) {
		commit('resetUserState');
	}
};

// mutations
const mutations = {
	setToken(state, token) {
		state.token = token;
	},
	setUser(state, user) {
		state.user = user;
	},
	resetUserState(state) {
		Object.assign(state, intialState());
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
