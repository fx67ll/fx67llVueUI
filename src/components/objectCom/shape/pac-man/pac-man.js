import fx67llShapePacMan from './pac-man.vue';
fx67llShapePacMan.install = function(Vue) {
	// 注册新名称（推荐使用）
	Vue.component(fx67llShapePacMan.name, fx67llShapePacMan);
	// 兼容旧名称，确保老版本直接升级不崩溃
	Vue.component('shapePacMan', fx67llShapePacMan);
};
export {
	default as fx67llShapePacMan
}
from './pac-man.vue'
