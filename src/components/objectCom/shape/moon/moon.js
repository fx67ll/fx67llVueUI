import fx67llShapeMoon from './moon.vue';
fx67llShapeMoon.install = function(Vue) {
	// 注册新名称（推荐使用）
	Vue.component(fx67llShapeMoon.name, fx67llShapeMoon);
	// 兼容旧名称，确保老版本直接升级不崩溃
	Vue.component('shapeMoon', fx67llShapeMoon);
};
export {
	default as fx67llShapeMoon
}
from './moon.vue'
