<template>
	<div class="space-invader-box"><div class="space-invader" :style="{ '--shapeColor': shapeColor, '--shapeSize': shapeSize }"></div></div>
</template>

<script>
export default {
	name: 'shapeSpaceInvader',
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
.space-invader-box {
	border: 1px solid transparent;
	.space-invader {
		position: relative;
		left: 14px;
		box-shadow: 0 0 0 1em var(--shapeColor), 0 1em 0 1em var(--shapeColor), -2.5em 1.5em 0 0.5em var(--shapeColor), 2.5em 1.5em 0 0.5em var(--shapeColor),
			-3em -3em 0 0 var(--shapeColor), 3em -3em 0 0 var(--shapeColor), -2em -2em 0 0 var(--shapeColor), 2em -2em 0 0 var(--shapeColor), -3em -1em 0 0 var(--shapeColor),
			-2em -1em 0 0 var(--shapeColor), 2em -1em 0 0 var(--shapeColor), 3em -1em 0 0 var(--shapeColor), -4em 0 0 0 var(--shapeColor), -3em 0 0 0 var(--shapeColor),
			3em 0 0 0 var(--shapeColor), 4em 0 0 0 var(--shapeColor), -5em 1em 0 0 var(--shapeColor), -4em 1em 0 0 var(--shapeColor), 4em 1em 0 0 var(--shapeColor),
			5em 1em 0 0 var(--shapeColor), -5em 2em 0 0 var(--shapeColor), 5em 2em 0 0 var(--shapeColor), -5em 3em 0 0 var(--shapeColor), -3em 3em 0 0 var(--shapeColor),
			3em 3em 0 0 var(--shapeColor), 5em 3em 0 0 var(--shapeColor), -2em 4em 0 0 var(--shapeColor), -1em 4em 0 0 var(--shapeColor), 1em 4em 0 0 var(--shapeColor),
			2em 4em 0 0 var(--shapeColor);
		background: var(--shapeColor);
		width: 1em;
		height: 1em;
		overflow: hidden;
		margin: 50px 0 70px 65px;
		zoom: var(--shapeSize);
		// 火狐不兼容zoom，用transform勉强代替
		-moz-transform: scale(var(--shapeSize));
	}
}
</style>
