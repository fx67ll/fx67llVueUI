import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'

Vue.config.productionTip = false

import less from 'less'
Vue.use(less)

import {
	shapeInfinity
} from '@c/index';
Vue.use(shapeInfinity);

import {
	shapeStarfive
} from '@c/index';
Vue.use(shapeStarfive);


new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
