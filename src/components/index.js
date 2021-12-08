import Vue from 'vue';

// 引入网站页脚组件
import {
	fx67llFooter
} from '@c/fx67ll-footer/index.js';


// 引入加载进度条组件
import {
	loadingProgress
} from '@c/loading-progress/index.js';


// 引入形状组件合集
import {
	shapeInfinity
} from '@c/shape/infinity/infinity.js';

import {
	shapeStarFive
} from '@c/shape/star-five/star-five.js';

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

import {
	shapeCross
} from '@c/shape/cross/cross.js';

import {
	shapeMoon
} from '@c/shape/moon/moon.js';

import {
	shapeStarSix
} from '@c/shape/star-six/star-six.js';

import {
	shapeTalkBubble
} from '@c/shape/talk-bubble/talk-bubble.js';

export default {
	install(Vue) {
		
		// 注册网站页脚组件
		Vue.use(fx67llFooter);
		
		// 注册加载进度条组件
		Vue.use(loadingProgress);
		
		// 注册形状组件合集
		Vue.use(shapeInfinity);
		Vue.use(shapeStarFive);
		Vue.use(shapeTriangle);
		Vue.use(shapeHeart);
		Vue.use(shapeSpaceInvader);
		Vue.use(shapeEgg);
		Vue.use(shapePacMan);
		Vue.use(shapeDiamond);
		Vue.use(shapeYinyang);
		Vue.use(shapeCross);
		Vue.use(shapeMoon);
		Vue.use(shapeStarSix);
		Vue.use(shapeTalkBubble);

	}
}
