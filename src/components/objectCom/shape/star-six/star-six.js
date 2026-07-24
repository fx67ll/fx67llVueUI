import fx67llShapeStarSix from './star-six.vue';
fx67llShapeStarSix.install = function(Vue) {
	// 注册新名称（推荐使用）
	Vue.component(fx67llShapeStarSix.name, fx67llShapeStarSix);
	// 兼容旧名称，确保老版本直接升级不崩溃
	Vue.component('shapeStarSix', fx67llShapeStarSix);
};
export {
	default as fx67llShapeStarSix
}
from './star-six.vue'
