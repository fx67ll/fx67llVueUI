<template>
	<div class="egg" :style="{ '--shapeColor': shapeColor, '--shapeSize': shapeSize }"></div>
</template>

<script>
export default {
	name: 'shapeEgg',
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
.egg {
	display: block;
	width: 126px;
	height: 180px;
	background-color: var(--shapeColor);
	// less 中除号是计算符，这里要用到转义的语法，保持/的原样输出
	// 转义（Escaping）允许你使用任意字符串作为属性或变量值。任何 ~"anything" 或 ~'anything' 形式的内容都将按原样输出
	// border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
	border-radius: ~"50% 50% 50% 50% / 60% 60% 40% 40%";
	zoom: var(--shapeSize);
	// 火狐不兼容zoom，用transform勉强代替
	-moz-transform: scale(var(--shapeSize));
}
</style>
