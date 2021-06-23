<template>
	<div class="fx67ll-box">
		<shape-infinity shapeColor="#ffff7f" :shapeSize="0.5"></shape-infinity>
		<shape-star-five shapeColor="#aaffff" :shapeSize="3"></shape-star-five>
		<shape-triangle type="up" shapeColor="#ff5500" :shapeSize="2"></shape-triangle>
		<shape-heart shapeColor="#dedede" :shapeSize="4"></shape-heart>
		<shape-triangle shapeColor="#ff5500" :shapeSize="2"></shape-triangle>
		<shape-space-invader shapeColor="#00ff00" :shapeSize="2.5"></shape-space-invader>
		<shape-egg shapeColor="#ffff7f" :shapeSize="1.5"></shape-egg>
		<shape-pac-man shapeColor="#aaffff" :shapeSize="2"></shape-pac-man>
		<shape-diamond shapeColor="#ff0000" :shapeSize="1"></shape-diamond>
		<shape-yinyang shapeColorYin="#ff0000" shapeColorYang="#ffffff" :shapeSize="1"></shape-yinyang>
		<shape-cross shapeColor="#ffaaff" :shapeSize="2.5"></shape-cross>
		<shape-moon shapeColor="#ffff00" :shapeSize="4"></shape-moon>
		<shape-star-six shapeColor="#aaffff" :shapeSize="3.5"></shape-star-six>
		<shape-yinyang shapeColorYin="#ff0000" shapeColorYang="#ffffff" :shapeSize="1"></shape-yinyang>
	</div>
</template>

<script>
export default {
	name: 'fx67llIndex',
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="less" scoped="scoped">
.fx67ll-box {
	width: 100%;
	height: 100%;
	.ban-user-select();
}
</style>
