<template>
	<div class="pac-man" :style="{ '--shapeColor': shapeColor, '--shapeSize': shapeSize }"></div>
</template>

<script>
export default {
	name: 'shapePacMan',
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
.pac-man {
	width: 0px;
	height: 0px;
	border-right: 60px solid transparent;
	border-top: 60px solid var(--shapeColor);
	border-left: 60px solid var(--shapeColor);
	border-bottom: 60px solid var(--shapeColor);
	border-top-left-radius: 60px;
	border-top-right-radius: 60px;
	border-bottom-left-radius: 60px;
	border-bottom-right-radius: 60px;
	zoom: var(--shapeSize);
	// 火狐不兼容zoom，用transform勉强代替
	-moz-transform: scale(var(--shapeSize));
}
</style>
