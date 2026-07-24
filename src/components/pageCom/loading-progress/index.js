import fx67llLoadingProgress from './index.vue';
fx67llLoadingProgress.install = function(Vue) {
	// 注册新名称（推荐使用）
	Vue.component(fx67llLoadingProgress.name, fx67llLoadingProgress);
	// 兼容旧名称，确保老版本直接升级不崩溃
	Vue.component('loadingProgress', fx67llLoadingProgress);
};
export {
	default as fx67llLoadingProgress
}
from './index.vue'
