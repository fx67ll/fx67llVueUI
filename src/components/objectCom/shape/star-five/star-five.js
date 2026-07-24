import fx67llShapeStarFive from './star-five.vue';
fx67llShapeStarFive.install = function(Vue) {
	// 注册新名称（推荐使用）
	Vue.component(fx67llShapeStarFive.name, fx67llShapeStarFive);
	// 兼容旧名称，确保老版本直接升级不崩溃
	Vue.component('shapeStarFive', fx67llShapeStarFive);
};
export {
	default as fx67llShapeStarFive
}
from './star-five.vue'
