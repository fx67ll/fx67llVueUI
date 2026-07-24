import fx67llShapeInfinity from './infinity.vue';
fx67llShapeInfinity.install = function(Vue) {
	// 注册新名称（推荐使用）
	Vue.component(fx67llShapeInfinity.name, fx67llShapeInfinity);
	// 兼容旧名称，确保老版本直接升级不崩溃
	Vue.component('shapeInfinity', fx67llShapeInfinity);
};
export {
	default as fx67llShapeInfinity
}
from './infinity.vue'
