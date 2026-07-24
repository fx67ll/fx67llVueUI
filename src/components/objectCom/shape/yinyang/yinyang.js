import fx67llShapeYinyang from './yinyang.vue';
fx67llShapeYinyang.install = function(Vue) {
	// 注册新名称（推荐使用）
	Vue.component(fx67llShapeYinyang.name, fx67llShapeYinyang);
	// 兼容旧名称，确保老版本直接升级不崩溃
	Vue.component('shapeYinyang', fx67llShapeYinyang);
};
export {
	default as fx67llShapeYinyang
}
from './yinyang.vue'
