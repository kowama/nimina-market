import Home from './../components/Home.vue';
import Error from './../components/Error.vue';

export const routes = [ { path: '/', component: Home }, { path: '*', component: Error } ];
