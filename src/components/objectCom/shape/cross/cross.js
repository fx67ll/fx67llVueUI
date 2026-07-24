import fx67llShapeCross from './cross.vue';
fx67llShapeCross.install = function(Vue) {
	// 注册新名称（推荐使用）
	Vue.component(fx67llShapeCross.name, fx67llShapeCross);
	// 兼容旧名称，确保老版本直接升级不崩溃
	Vue.component('shapeCross', fx67llShapeCross);
};
export {
	default as fx67llShapeCross
}
from './cross.vue'
