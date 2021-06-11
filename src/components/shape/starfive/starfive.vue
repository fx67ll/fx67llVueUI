<template>
	<div class="starfive-box" :style="{ '--shapeColor': shapeColor, '--shapeSize': shapeSize }"><div class="starfive"></div></div>
</template>

<script>
export default {
	name: 'shapeStarfive',
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
.starfive-box {
	width: 200px;
	height: 180px;
	overflow: hidden;
	zoom: var(--shapeSize);
	// 火狐不兼容zoom，用transform勉强代替
	-moz-transform: scale(var(--shapeSize));
	.starfive {
		position: relative;
		top: 58px;
		left: 4px;
		display: block;
		color: var(--shapeColor);
		width: 0px;
		height: 0px;
		border-right: 100px solid transparent;
		border-bottom: 70px solid var(--shapeColor);
		border-left: 100px solid transparent;
		transform: rotate(35deg);
	}
	.starfive:before {
		border-bottom: 80px solid var(--shapeColor);
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
		color: var(--shapeColor);
		top: 3px;
		left: -105px;
		width: 0px;
		height: 0px;
		border-right: 100px solid transparent;
		border-bottom: 70px solid var(--shapeColor);
		border-left: 100px solid transparent;
		transform: rotate(-70deg);
		content: '';
	}
}
</style>
