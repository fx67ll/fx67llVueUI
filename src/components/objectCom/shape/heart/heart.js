import fx67llShapeHeart from './heart.vue';
fx67llShapeHeart.install = function(Vue) {
	// 注册新名称（推荐使用）
	Vue.component(fx67llShapeHeart.name, fx67llShapeHeart);
	// 兼容旧名称，确保老版本直接升级不崩溃
	Vue.component('shapeHeart', fx67llShapeHeart);
};
export {
	default as fx67llShapeHeart
}
from './heart.vue'
