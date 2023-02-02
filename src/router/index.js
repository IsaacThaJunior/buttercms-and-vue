import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Details from '../components/Details.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/details',
		name: 'Details',
		component: Details,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	mode: 'abstract',
});
export default router;
