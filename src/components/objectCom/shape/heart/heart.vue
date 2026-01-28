<template>
	<div class="heart" :style="{ '--shapeColor': shapeColor, '--shapeSize': shapeSize }"></div>
</template>

<script>
export default {
	name: 'shapeHeart',
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
.heart {
	position: relative;
	width: 100px;
	height: 82px;
	zoom: var(--shapeSize);
	// 火狐不兼容zoom，用transform勉强代替
	-moz-transform: scale(var(--shapeSize));
}
.heart:before,
.heart:after {
	position: absolute;
	content: '';
	left: 50px;
	top: 2px;
	width: 50px;
	height: 80px;
	background: var(--shapeColor);
	border-radius: 50px 50px 0 0;
	transform: rotate(-45deg);
	transform-origin: 0 100%;
}
.heart:after {
	left: 0;
	transform: rotate(45deg);
	transform-origin: 100% 100%;
}
</style>
