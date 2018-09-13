import Vue from 'vue';
import App from './App.vue';
import router from '@/router/router';
import store from '@/stores/index';
import { sync } from 'vuex-router-sync';
import { currency } from '@/utils/filters';

import './scss/style.scss';

sync(store, router);
Vue.filter('currency', currency);

new Vue({
	el: '#app',
	router,
	store,
	render: (h) => h(App)
});
