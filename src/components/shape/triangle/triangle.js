import shapeTriangle from './triangle.vue';
shapeTriangle.install = function(Vue) {
	Vue.component(shapeTriangle.name, shapeTriangle);
};
export {
	default as shapeTriangle
}
from './triangle.vue'