import fx67llShapeSpaceInvader from './space-invader.vue';
fx67llShapeSpaceInvader.install = function(Vue) {
	// 注册新名称（推荐使用）
	Vue.component(fx67llShapeSpaceInvader.name, fx67llShapeSpaceInvader);
	// 兼容旧名称，确保老版本直接升级不崩溃
	Vue.component('shapeSpaceInvader', fx67llShapeSpaceInvader);
};
export {
	default as fx67llShapeSpaceInvader
}
from './space-invader.vue'
