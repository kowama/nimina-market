import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import './scss/style.scss';

import { routes } from './routes/routes';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.http.options.root = '/localhost';

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
	el: '#app',
	router,
	render: (h) => h(App)
});
