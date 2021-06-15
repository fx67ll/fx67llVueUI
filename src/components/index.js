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

import {
	shapeHeart
} from '@c/shape/heart/heart.js';

import {
	shapeSpaceInvader
} from '@c/shape/space-invader/space-invader.js';

import {
	shapeEgg
} from '@c/shape/egg/egg.js';

import {
	shapePacMan
} from '@c/shape/pac-man/pac-man.js';

import {
	shapeDiamond
} from '@c/shape/diamond/diamond.js';

import {
	shapeYinyang
} from '@c/shape/yinyang/yinyang.js';

export default {
	install(Vue) {
		Vue.use(shapeInfinity);
		Vue.use(shapeStarfive);
		Vue.use(shapeTriangle);
		Vue.use(shapeHeart);
		Vue.use(shapeSpaceInvader);
		Vue.use(shapeEgg);
		Vue.use(shapePacMan);
		Vue.use(shapeDiamond);
		Vue.use(shapeYinyang);
	}
}
