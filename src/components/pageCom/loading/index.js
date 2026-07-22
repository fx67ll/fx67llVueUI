import fx67llLoading from './index.vue';

// 给组件挂载 install 方法，使其可作为 Vue 插件被 Vue.use 注册
fx67llLoading.install = function(Vue) {
	Vue.component(fx67llLoading.name, fx67llLoading);
};

export {
	default as fx67llLoading
}
from './index.vue'
