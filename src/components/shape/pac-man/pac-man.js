import shapePacMan from './pac-man.vue';
shapePacMan.install = function(Vue) {
	Vue.component(shapePacMan.name, shapePacMan);
};
export {
	default as shapePacMan
}
from './pac-man.vue'