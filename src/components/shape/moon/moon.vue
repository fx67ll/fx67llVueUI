<template>
	<div class="moon-box"><div class="moon" :style="{ '--shapeColor': shapeColor, '--shapeSize': shapeSize }"></div></div>
</template>

<script>
export default {
	name: 'shapeMoon',
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
.moon-box {
	border: 1px solid transparent;
	.moon {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		box-shadow: 15px 15px 0 0 var(--shapeColor);
		position: relative;
		top: -16px;
		left: -19px;
		zoom: var(--shapeSize);
		// 火狐不兼容zoom，用transform勉强代替
		-moz-transform: scale(var(--shapeSize));
	}
}
</style>
