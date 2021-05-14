<template>
	<div class="infinity" :style="{ '--shapeColor': shapeColor, '--shapeSize': shapeSize }"></div>
</template>

<script>
export default {
	name: 'shapeInfinity',
	props: {
		// 无限符号的颜色
		shapeColor: {
			type: String,
			required: false,
			default: '#000000',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
			}
		},
		// 无限符号的大小
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
.infinity {
	position: relative;
	width: 212px;
	height: 100px;
	box-sizing: content-box;
	zoom: var(--shapeSize);
	// 火狐不兼容zoom，用transform勉强代替
	-moz-transform: scale(var(--shapeSize));
}
.infinity:before,
.infinity:after {
	content: '';
	box-sizing: content-box;
	position: absolute;
	top: 0;
	left: 0;
	width: 60px;
	height: 60px;
	border: 20px solid var(--shapeColor);
	border-radius: 50px 50px 0 50px;
	transform: rotate(-45deg);
}
.infinity:after {
	left: auto;
	right: 0;
	border-radius: 50px 50px 50px 0;
	transform: rotate(45deg);
}
</style>
