import Home from './../components/Home.vue';
import Registation from './../components/Registration.vue';
import Error from './../components/Error.vue';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/register', component: Registation },
	{ path: '*', component: Error }
];
