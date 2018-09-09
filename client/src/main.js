import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import store from './stores/store';

import './scss/style.scss';

import { routes } from './routes/routes';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.root = '/localhost';

const router = new VueRouter({
	store,
	mode: 'history',
	routes
});

new Vue({
	el: '#app',
	router,
	render: (h) => h(App)
});
