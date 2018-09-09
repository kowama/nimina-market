import Home from './../components/Home.vue';
import Registation from './../components/Registration.vue';
import Login from './../components/Login.vue';
import Error from './../components/Error.vue';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/register', component: Registation },
	{ path: '/login', component: Login },
	{ path: '*', component: Error }
];
