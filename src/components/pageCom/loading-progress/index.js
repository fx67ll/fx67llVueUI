import loadingProgress from './index.vue';
loadingProgress.install = function(Vue) {
	Vue.component(loadingProgress.name, loadingProgress);
};
export {
	default as loadingProgress
}
from './index.vue'