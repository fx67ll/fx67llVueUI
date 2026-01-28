import shapeEgg from './egg.vue';
shapeEgg.install = function(Vue) {
	Vue.component(shapeEgg.name, shapeEgg);
};
export {
	default as shapeEgg
}
from './egg.vue'