import Home from '@/components/Home.vue';
import Registation from '@/components/Registration.vue';
import Login from '@/components/Login.vue';
import Profile from '@/components/Profile.vue';
import ProfileSetting from '@/components/ProfileSetting.vue';
import PostProduct from '@/components/PostProduct.vue';
import Error from '@/components/Error.vue';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/register', component: Registation },
	{ path: '/login', component: Login },
	{ path: '/profile', component: Profile },
	{ path: '/profile/settings', component: ProfileSetting },
	{ path: '/seller/product', component: PostProduct },
	{ path: '*', component: Error }
];
