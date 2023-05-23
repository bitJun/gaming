import {
	createRouter,
	createRouterMatcher,
	createWebHashHistory
} from 'vue-router';

const routes = [
	{
		path: '/login',
		// redirect: redirectPath,
		component: ()=>import('./pages/Login/index.vue')
	},
	{
		path: '/register',
		component: ()=>import('./pages/Register/index.vue')
	},
	{
		path: '/',
		component: ()=>import('./pages/home/index.vue')
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
