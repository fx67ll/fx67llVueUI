<template>
	<div
		class="triangle"
		:class="{ 'triangle-up': type === 'up', 'triangle-down': type === 'down', 'triangle-left': type === 'left', 'triangle-right': type === 'right' }"
		:style="{ '--shapeColor': shapeColor, '--shapeSize': shapeSize }"
	></div>
</template>

<script>
export default {
	name: 'shapeTriangle',
	props: {
		type: {
			type: String,
			required: false,
			default: 'down'
		},
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
.triangle {
	width: 0;
	height: 0;
	zoom: var(--shapeSize);
	// 火狐不兼容zoom，用transform勉强代替
	-moz-transform: scale(var(--shapeSize));
}
.triangle-up {
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 100px solid var(--shapeColor);
}
.triangle-down {
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-top: 100px solid var(--shapeColor);
}
.triangle-left {
	border-top: 50px solid transparent;
	border-right: 100px solid var(--shapeColor);
	border-bottom: 50px solid transparent;
}
.triangle-right {
	border-top: 50px solid transparent;
	border-left: 100px solid var(--shapeColor);
	border-bottom: 50px solid transparent;
}
</style>
