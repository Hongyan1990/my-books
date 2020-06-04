import Router from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/bookinfo'
	},
	{
		path: '/bookinfo',
		component: () => import('../views/BooksInfo.vue')
	},
	{
		path: '/providerinfo',
		component: () => import('../views/ProviderInfo.vue')
	},
	{
		path: '/login',
		component: () => import('../views/Login.vue')
	}
]

export default new Router({
	routes,
	mode: 'history'
})