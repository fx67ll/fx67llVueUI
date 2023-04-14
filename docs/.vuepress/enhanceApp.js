// 复杂配置可以查阅下方的官方示例
// https://calebman.github.io/vuepress-plugin-demo-container/zh/complex.html#%E7%BB%93%E5%90%88%E7%BB%84%E4%BB%B6%E5%BA%93%E7%A4%BA%E4%BE%8B

// 页面组件通过iframe演示！！！

// 引入形状组件合集
import {
	shapeInfinity
} from '../../src/components/shape/infinity/infinity.js';
import {
	shapeStarFive
} from '../../src/components/shape/star-five/star-five.js';
import {
	shapeTriangle
} from '../../src/components/shape/triangle/triangle.js';
import {
	shapeHeart
} from '../../src/components/shape/heart/heart.js';
import {
	shapeSpaceInvader
} from '../../src/components/shape/space-invader/space-invader.js';
import {
	shapeEgg
} from '../../src/components/shape/egg/egg.js';
import {
	shapePacMan
} from '../../src/components/shape/pac-man/pac-man.js';
import {
	shapeDiamond
} from '../../src/components/shape/diamond/diamond.js';
import {
	shapeYinyang
} from '../../src/components/shape/yinyang/yinyang.js';
import {
	shapeCross
} from '../../src/components/shape/cross/cross.js';
import {
	shapeMoon
} from '../../src/components/shape/moon/moon.js';
import {
	shapeStarSix
} from '../../src/components/shape/star-six/star-six.js';
import {
	shapeTalkBubble
} from '../../src/components/shape/talk-bubble/talk-bubble.js';

export default ({
	Vue
}) => {
	Vue.use(shapeInfinity),
		Vue.use(shapeStarFive),
		Vue.use(shapeTriangle),
		Vue.use(shapeHeart),
		Vue.use(shapeSpaceInvader),
		Vue.use(shapeEgg),
		Vue.use(shapePacMan),
		Vue.use(shapeDiamond),
		Vue.use(shapeYinyang),
		Vue.use(shapeCross),
		Vue.use(shapeMoon),
		Vue.use(shapeStarSix),
		Vue.use(shapeTalkBubble)
}