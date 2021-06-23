<template>
	<div class="star-six-box" :style="{ '--shapeColor': shapeColor, '--shapeSize': shapeSize }"><div class="star-six"></div></div>
</template>

<script>
export default {
	name: 'shapeStarSix',
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
.star-six-box {
	padding-bottom: 30px;
	zoom: var(--shapeSize);
	// 火狐不兼容zoom，用transform勉强代替
	-moz-transform: scale(var(--shapeSize));
	.star-six {
		width: 0;
		height: 0;
		border-left: 50px solid transparent;
		border-right: 50px solid transparent;
		border-bottom: 100px solid var(--shapeColor);
		position: relative;
	}
	.star-six:after {
		width: 0;
		height: 0;
		border-left: 50px solid transparent;
		border-right: 50px solid transparent;
		border-top: 100px solid var(--shapeColor);
		position: absolute;
		content: '';
		top: 30px;
		left: -50px;
	}
}
</style>
