import fx67llLoadingScreen from './index.vue';

// 给组件挂载 install 方法，使其可作为 Vue 插件被 Vue.use 注册
fx67llLoadingScreen.install = function(Vue) {
	Vue.component(fx67llLoadingScreen.name, fx67llLoadingScreen);
};

export {
	default as fx67llLoadingScreen
}
from './index.vue'
