import fx67llShapeTalkBubble from './talk-bubble.vue';
fx67llShapeTalkBubble.install = function(Vue) {
	// 注册新名称（推荐使用）
	Vue.component(fx67llShapeTalkBubble.name, fx67llShapeTalkBubble);
	// 兼容旧名称，确保老版本直接升级不崩溃
	Vue.component('shapeTalkBubble', fx67llShapeTalkBubble);
};
export {
	default as fx67llShapeTalkBubble
}
from './talk-bubble.vue'
