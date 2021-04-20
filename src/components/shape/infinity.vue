<template>
	<div class="infinity" :style="{ '--infinityColor': infinityColor, '--infinitySize': infinitySize }"></div>
</template>

<script>
export default {
	name: 'shapeInfinity',
	props: {
		// 无限符号的颜色
		infinityColor: {
			type: String,
			required: false,
			default: '#000000',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color)
			}
		},
		// 无限符号的大小
		infinitySize: {
			type: Number,
			required: false,
			default: 1,
			validator(num) {
				return new RegExp('^((-?)0|([1-9][0-9]*))(\.[0-9]+)?$').test(num)
			}
		},
	}
};
</script>

<style lang="less" scoped="scoped">
.infinity {
	position: relative;
	width: 212px;
	height: 100px;
	box-sizing: content-box;
	zoom: var(--infinitySize);
	// 火狐不兼容zoom，用transform勉强代替
	-moz-transform: scale(var(--infinitySize));
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
	border: 20px solid var(--infinityColor);
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
