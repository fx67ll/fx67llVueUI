<template>
	<div class="cross" :style="{ '--shapeColor': shapeColor, '--shapeSize': shapeSize }"></div>
</template>

<script>
export default {
	name: 'shapeCross',
	props: {
		shapeColor: {
			type: String,
			required: false,
			default: '#000000',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
			}
		},
		shapeSize: {
			type: Number,
			required: false,
			default: 1,
			validator(num) {
				return new RegExp('^((-?)0|([1-9][0-9]*))(\.[0-9]+)?$').test(num);
			}
		}
	}
};
</script>

<style lang="less" scoped="scoped">
.cross {
	background: var(--shapeColor);
	width: 20px;
	height: 100px;
	position: relative;
	left: 40px;
	zoom: var(--shapeSize);
	// 火狐不兼容zoom，用transform勉强代替
	-moz-transform: scale(var(--shapeSize));
}
.cross:after {
	width: 100px;
	height: 20px;
	position: absolute;
	top: 40px;
	left: -40px;
	background: var(--shapeColor);
	content: '';
}
</style>
