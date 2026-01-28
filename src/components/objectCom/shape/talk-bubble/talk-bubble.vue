<template>
	<div class="talk-bubble" :style="{ '--textColor': textColor, '--shapeWidth': shapeWidth, '--shapeColor': shapeColor, '--shapeSize': shapeSize }"><span class="talk-bubble-text">{{ talkText }}</span></div>
</template>

<script>
export default {
	name: 'shapeTalkBubble',
	props: {
		talkText: {
			type: String,
			required: false,
			default: ''
		},
		textColor: {
			type: String,
			required: false,
			default: '#ffffff',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
			}
		},
		shapeWidth: {
			type: String,
			required: false,
			default: '120px',
		},
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
.talk-bubble {
	width: var(--shapeWidth);
	min-height: 60px;
	padding: 10px;
	background: var(--shapeColor);
	position: relative;
	left: 26px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	border-radius: 10px;
	zoom: var(--shapeSize);
	// 火狐不兼容zoom，用transform勉强代替
	-moz-transform: scale(var(--shapeSize));
	.talk-bubble-text{
		display: inline-block;
		width: 100%;
		word-break: break-all;
		color: var(--textColor);
	}
}
.talk-bubble:before {
	content: '';
	position: absolute;
	right: 100%;
	top: 26px;
	width: 0;
	height: 0;
	border-top: 13px solid transparent;
	border-right: 26px solid var(--shapeColor);
	border-bottom: 13px solid transparent;
}
</style>
