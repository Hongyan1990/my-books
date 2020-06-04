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
		path: '/memeber',
		component: () => import('../views/MemberInfo.vue')
	},
	{
		path: '/pb',
		component: () => import('../views/PurchaseBooks.vue')
	},
	{
		path: '/pq',
		component: () => import('../views/PurchaseQuery.vue')
	},
	//
	{
		path: '/ps',
		component: () => import('../views/PurchaseStatistics.vue')
	},
	{
		path: '/rb',
		component: () => import('../views/RefundBook.vue')
	},
	{
		path: '/booksell',
		component: () => import('../views/BookSell.vue')
	},
	{
		path: '/booksellquery',
		component: () => import('../views/BooksellQuery.vue')
	},
	{
		path: '/bss',
		component: () => import('../views/BooksellStatistic.vue')
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