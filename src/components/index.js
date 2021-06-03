import Vue from 'vue';

import {
	shapeInfinity
} from '@c/shape/infinity/infinity.js';

import {
	shapeStarfive
} from '@c/shape/starfive/starfive.js';

import {
	shapeTriangle
} from '@c/shape/triangle/triangle.js';

export default {
	install(Vue) {
		Vue.use(shapeInfinity);
		Vue.use(shapeStarfive);
		Vue.use(shapeTriangle);
	}
}
