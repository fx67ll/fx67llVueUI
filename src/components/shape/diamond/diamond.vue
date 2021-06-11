<template>
	<div class="diamond-box"><div class="diamond" :style="{ '--shapeColor': shapeColor, '--shapeSize': shapeSize }"></div></div>
</template>

<script>
export default {
	name: 'shapeDiamond',
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
.diamond-box {
	border: 1px solid transparent;
	.diamond {
		border-style: solid;
		border-color: transparent transparent var(--shapeColor) transparent;
		border-width: 0 25px 25px 25px;
		height: 0;
		width: 50px;
		box-sizing: content-box;
		position: relative;
		top: -20px;
		margin: 20px 0 50px 0;
		zoom: var(--shapeSize);
		// // 火狐不兼容zoom，用transform勉强代替
		-moz-transform: scale(var(--shapeSize));
	}
	.diamond:after {
		content: '';
		position: absolute;
		top: 25px;
		left: -25px;
		width: 0;
		height: 0;
		border-style: solid;
		border-color: var(--shapeColor) transparent transparent transparent;
		border-width: 70px 50px 0 50px;
	}
}
</style>
