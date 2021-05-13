<template>
	<div class="starfive-box"><div class="starfive" :style="{ '--starfiveColor': starfiveColor, '--starfiveSize': starfiveSize }"></div></div>
</template>

<script>
export default {
	name: 'shapeStarfive',
	props: {
		// 无限符号的颜色
		starfiveColor: {
			type: String,
			required: false,
			default: '#000000',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
			}
		},
		// 无限符号的大小
		starfiveSize: {
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
.starfive-box {
	width: 200px;
	height: 180px;
	overflow: hidden;
	.starfive {
		position: relative;
		top: 58px;
		left: 4px;
		display: block;
		color: var(--starfiveColor);
		width: 0px;
		height: 0px;
		border-right: 100px solid transparent;
		border-bottom: 70px solid var(--starfiveColor);
		border-left: 100px solid transparent;
		transform: rotate(35deg);
		zoom: var(--starfiveSize);
		// 火狐不兼容zoom，用transform勉强代替
		-moz-transform: scale(var(--starfiveSize));
	}
	.starfive:before {
		border-bottom: 80px solid var(--starfiveColor);
		border-left: 30px solid transparent;
		border-right: 30px solid transparent;
		position: absolute;
		height: 0;
		width: 0;
		top: -45px;
		left: -65px;
		display: block;
		content: '';
		transform: rotate(-35deg);
	}
	.starfive:after {
		position: absolute;
		display: block;
		color: var(--starfiveColor);
		top: 3px;
		left: -105px;
		width: 0px;
		height: 0px;
		border-right: 100px solid transparent;
		border-bottom: 70px solid var(--starfiveColor);
		border-left: 100px solid transparent;
		transform: rotate(-70deg);
		content: '';
	}
}
</style>
