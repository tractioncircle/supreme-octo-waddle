import Vue from 'vue'
import Router from 'vue-router'
import EventHome from '@/components/EventHome'
import ClassResults from '@/components/ClassResults'
import RunTicker from '@/components/RunTicker'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'EventHome',
			component: EventHome
		},
		{
			path: '/results/pax',
			name: 'PaxResults',
			component: RunTicker
		},
		{
			path: '/results/:classname',
			name: 'ClassResults',
			component: ClassResults
		},
		{
			path: '*',
			redirect: "/"
		}
	]
})