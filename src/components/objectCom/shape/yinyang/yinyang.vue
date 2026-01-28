<template>
	<div class="yinyang" :style="{ '--shapeColorYin': shapeColorYin, '--shapeColorYang': shapeColorYang, '--shapeSize': shapeSize }"></div>
</template>

<script>
export default {
	name: 'shapeYinyang',
	props: {
		shapeColorYin: {
			type: String,
			required: false,
			default: '#000000',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
			}
		},
		shapeColorYang: {
			type: String,
			required: false,
			default: '#ffffff',
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
.yinyang {
	width: 96px;
	box-sizing: content-box;
	height: 48px;
	background: var(--shapeColorYang);
	border-color: var(--shapeColorYin);
	border-style: solid;
	border-width: 2px 2px 50px 2px;
	border-radius: 100%;
	position: relative;
	zoom: var(--shapeSize);
	// 火狐不兼容zoom，用transform勉强代替
	-moz-transform: scale(var(--shapeSize));
}
.yinyang:before {
	content: '';
	position: absolute;
	top: 50%;
	left: 0;
	background: var(--shapeColorYang);
	border: 18px solid var(--shapeColorYin);
	border-radius: 100%;
	width: 12px;
	height: 12px;
	box-sizing: content-box;
}
.yinyang:after {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	background: var(--shapeColorYin);
	border: 18px solid var(--shapeColorYang);
	border-radius: 100%;
	width: 12px;
	height: 12px;
	box-sizing: content-box;
}
</style>
