import fx67llShapeTriangle from './triangle.vue';
fx67llShapeTriangle.install = function(Vue) {
	// 注册新名称（推荐使用）
	Vue.component(fx67llShapeTriangle.name, fx67llShapeTriangle);
	// 兼容旧名称，确保老版本直接升级不崩溃
	Vue.component('shapeTriangle', fx67llShapeTriangle);
};
export {
	default as fx67llShapeTriangle
}
from './triangle.vue'
