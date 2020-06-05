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
		path: '/bis',
		component: () => import('../views/BookInStorage.vue')
	},//
	{
		path: '/bos',
		component: () => import('../views/BookOutStorage.vue')
	},
	{
		path: '/sa',
		component: () => import('../views/StorageAlarm.vue')
	},
	{
		path: '/sq',
		component: () => import('../views/StorageQuery.vue')
	},
	{
		path: '/sb',
		component: () => import('../views/SystemBackup.vue')
	},
	{
		path: '/sr',
		component: () => import('../views/SystemRecovery.vue')
	},
	{
		path: '/em',
		component: () => import('../views/EmployeeManager.vue')
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