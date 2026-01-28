import shapeHeart from './heart.vue';
shapeHeart.install = function(Vue) {
	Vue.component(shapeHeart.name, shapeHeart);
};
export {
	default as shapeHeart
}
from './heart.vue'