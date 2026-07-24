import fx67llShapeDiamond from './diamond.vue';
fx67llShapeDiamond.install = function(Vue) {
	// 注册新名称（推荐使用）
	Vue.component(fx67llShapeDiamond.name, fx67llShapeDiamond);
	// 兼容旧名称，确保老版本直接升级不崩溃
	Vue.component('shapeDiamond', fx67llShapeDiamond);
};
export {
	default as fx67llShapeDiamond
}
from './diamond.vue'
