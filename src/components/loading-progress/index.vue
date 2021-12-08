<template>
	<div
		class="fx67ll-progress-box"
		:class="{ 'fx67ll-progress-transition': styleTransition, 'fx67ll-progress-display': styleDisplay }"
		:style="{ '--zIndex': zIndex, '--gradientAnimationTime': animationTime + 's', '--colorfulAnimationTime': animationTime * 4 + 's', '--bgColor': bgColor }"
	>
		<!-- tip -->
		<div class="fx67ll-progress-tip" :style="{ '--textColor': textColor }">{{ isFinished ? '资源加载完成 ' : '资源加载中...... ' + progressNum + '%' }}</div>

		<!-- striped -->
		<div
			class="fx67ll-progress fx67ll-progress-striped"
			:style="{ '--progressNum': progressNum + '%', '--stripedFirstColor': stripedFirstColor, '--stripedSecondColor': stripedSecondColor }"
			v-if="styleType === 'striped'"
		>
			<div class="fx67ll-progress-bar"></div>
		</div>

		<!-- gradient -->
		<div
			class="fx67ll-progress fx67ll-progress-gradient"
			:style="{ '--progressNum': progressNum + '%', '--gradientFirstColor': gradientFirstColor, '--gradientSecondColor': gradientSecondColor }"
			v-if="styleType === 'gradient'"
		>
			<div class="fx67ll-progress-bar"></div>
		</div>

		<!-- colorful -->
		<div class="fx67ll-progress fx67ll-progress-colorful" :style="{ '--progressNum': progressNum + '%' }" v-if="styleType === 'colorful'">
			<div class="fx67ll-progress-bar"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'loadingProgress',
	props: {
		// 进度条当前进度数字 0-100，代表当前进度百分比
		progressNum: {
			type: String | Number,
			required: true,
			default: 0,
			validator(num) {
				// 这个正则是匹配0-100之内的正整数的，不管后面小数几位都使用正整数匹配
				// 不过好像本来就不需要管几位小数，只要值在0-100的范围内就没有问题
				if(parseInt(num) === 0){
					return true;
				}else{
					new RegExp('^(([1-9][0-9]|[1-9])(\.\d{1,2})?|0\.\d{1,2}|100)$').test(parseInt(num))
				}
			}
		},
		// 加载是否已完成
		isFinished: {
			type: Boolean,
			required: true,
			default: false,
			validator(val) {
				return typeof val === 'boolean';
			}
		},
		// 进度条样式种类
		styleType: {
			type: String,
			required: false,
			default: 'striped',
			validator(type) {
				return type === 'striped' || type === 'gradient' || type === 'colorful';
			}
		},
		// z-index
		zIndex: {
			type: String | Number,
			required: false,
			default: 99999,
			validator(num) {
				// 正整数即可，如果是字符串先转为数字，如果有小数点转为浮点数
				if (typeof num === 'string') {
					if (num.indexOf('.') === -1) {
						num = parseInt(num);
					} else {
						num = parseFloat(num);
					}
				}
				return new RegExp('^[0-9]*[1-9][0-9]*$').test(num);
			}
		},
		// 背景颜色设定，提供常用的样式修改属性
		bgColor: {
			type: String,
			required: false,
			default: '#2c303a',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
			}
		},
		// 提示文字颜色设定，提供常用的样式修改属性
		textColor: {
			type: String,
			required: false,
			default: '#bababa',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
			}
		},
		// striped 和 gradient 类型允许设定两个颜色，用于颜色变化样式设定，其余样式修改直接改样式表就行了
		// 条纹颜色一
		stripedFirstColor: {
			type: String,
			required: false,
			default: '#fcbc51',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
			}
		},
		// 条纹颜色二
		stripedSecondColor: {
			type: String,
			required: false,
			default: '#fca311',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
			}
		},
		// 渐变颜色一
		gradientFirstColor: {
			type: String,
			required: false,
			default: '#F9BCCA',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
			}
		},
		// 渐变颜色二
		gradientSecondColor: {
			type: String,
			required: false,
			default: '#aaffff',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
			}
		},
		// 单次动画时间
		animationTime: {
			type: String | Number,
			required: false,
			default: 0.6,
			validator(time) {
				// 只要是正数即可
				return new RegExp('^[+]{0,1}[1-9]\d*$|^[+]{0,1}(0\.\d*[1-9])$|^[+]{0,1}([1-9]\d*\.\d*[1-9])$').test(parseFloat(time));
			}
		}
	},
	data() {
		return {
			// 透明样式
			styleTransition: false,
			// 隐藏样式
			styleDisplay: false
		};
	},
	watch: {
		// 监听是否进度是否百分百，完成后添加隐藏进度条组件的样式
		isFinished: {
			deep: true,
			handler: function(newval, oldVal) {
				var self = this;
				// isFinished为true的时候隐藏当前加载进度
				if (newval) {
					// 延迟1秒透明
					setTimeout(function() {
						self.styleTransition = newval;
					}, 1000);

					// 延迟2.6秒消失，因为前一次透明设置了1.6秒的过渡动画
					setTimeout(function() {
						self.styleDisplay = newval;
					}, 2600);
				}
			}
		}
	}
};
</script>

<style lang="less">
// 样式参数不提供外部属性暴露
@progressWidth: 45vw;
@fontSize: 1.5vw;

// 部分颜色提供外部属性暴露，但是不提倡修改
@bgColor: var(--bgColor);
@textColor: var(--textColor);

// striped
@stripedFirstColor: var(--stripedFirstColor);
@stripedSecondColor: var(--stripedSecondColor);

// gradient
@gradientFirstColor: var(--gradientFirstColor);
@gradientSecondColor: var(--gradientSecondColor);

// gradient & colorful 动画时间
@gradientAnimationTime: var(--gradientAnimationTime);
@colorfulAnimationTime: var(--colorfulAnimationTime);

.fx67ll-progress-transition {
	opacity: 0;
}

.fx67ll-progress-display {
	display: none;
}

.fx67ll-progress-box {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	z-index: var(--zIndex);
	background-color: @bgColor;
	font-size: @fontSize;
	position: absolute;
	// 这里设置了透明动画
	transition: opacity 1.6s;

	.fx67ll-progress-tip {
		width: @progressWidth;
		color: @textColor;
		margin: 0 auto;
		text-align: center;
		position: relative;
		top: calc(50% - 55px);
	}

	.fx67ll-progress {
		width: @progressWidth;
		padding: 6px 8px;
		margin: 0 auto;
		position: relative;
		top: 50%;
		margin-top: -40px;
		background: rgba(0, 0, 0, 0.25);
		box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);

		.fx67ll-progress-bar {
			width: var(--progressNum);
			height: 18px;
		}
	}

	.fx67ll-progress-striped {
		border-radius: 6px;

		.fx67ll-progress-bar {
			border-radius: 4px;
			background-color: @stripedFirstColor;
			background-image: linear-gradient(
				45deg,
				@stripedSecondColor 25%,
				transparent 25%,
				transparent 50%,
				@stripedSecondColor 50%,
				@stripedSecondColor 75%,
				transparent 75%,
				transparent
			);
		}
	}

	.fx67ll-progress-gradient {
		border-radius: 30px;

		.fx67ll-progress-bar {
			border-radius: 30px;
			background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
			background-color: @gradientSecondColor;
			animation: progressAnimationGradient @gradientAnimationTime linear infinite alternate;
		}
	}

	.fx67ll-progress-colorful {
		border-radius: 6px;

		.fx67ll-progress-bar {
			border-radius: 4px;
			background-image: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #7dc8e8, #5856d6, #ff2d55);
			animation: progressAnimationColorful @colorfulAnimationTime ease infinite;
		}
	}
}

.keyframes(all, progressAnimationGradient, {from {background-color: @gradientFirstColor;} to {background-color: @gradientSecondColor;}});

.keyframes(
	all,
	progressAnimationColorful,
	{0% {background-image: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #7dc8e8, #5856d6, #ff2d55) ;} 5% {background-image:
		linear-gradient(to right, #5ac8fa, #007aff, #7dc8e8, #5856d6, #ff2d55, #4cd964) ;} 10% {background-image:
		linear-gradient(to right, #007aff, #7dc8e8, #5856d6, #ff2d55, #4cd964, #5ac8fa) ;} 15% {background-image:
		linear-gradient(to right, #7dc8e8, #5856d6, #ff2d55, #4cd964, #5ac8fa, #007aff) ;} 20% {background-image:
		linear-gradient(to right, #5856d6, #ff2d55, #4cd964, #5ac8fa, #007aff, #7dc8e8) ;} 25% {background-image:
		linear-gradient(to right, #ff2d55, #4cd964, #5ac8fa, #007aff, #7dc8e8, #5856d6) ;} 30% {background-image:
		linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #7dc8e8, #5856d6, #ff2d55) ;} 35% {background-image:
		linear-gradient(to left, #5ac8fa, #007aff, #7dc8e8, #5856d6, #ff2d55, #4cd964) ;} 40% {background-image:
		linear-gradient(to left, #007aff, #7dc8e8, #5856d6, #ff2d55, #4cd964, #5ac8fa) ;} 45% {background-image:
		linear-gradient(to left, #7dc8e8, #5856d6, #ff2d55, #4cd964, #5ac8fa, #007aff) ;} 50% {background-image:
		linear-gradient(to left, #5856d6, #ff2d55, #4cd964, #5ac8fa, #007aff, #7dc8e8) ;} 55% {background-image:
		linear-gradient(to left, #ff2d55, #4cd964, #5ac8fa, #007aff, #7dc8e8, #5856d6) ;} 60% {background-image:
		linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #7dc8e8, #5856d6, #ff2d55) ;} 65% {background-image:
		linear-gradient(to right, #5ac8fa, #007aff, #7dc8e8, #5856d6, #ff2d55, #4cd964) ;} 70% {background-image:
		linear-gradient(to right, #007aff, #7dc8e8, #5856d6, #ff2d55, #4cd964, #5ac8fa) ;} 75% {background-image:
		linear-gradient(to right, #7dc8e8, #5856d6, #ff2d55, #4cd964, #5ac8fa, #007aff) ;} 80% {background-image:
		linear-gradient(to right, #5856d6, #ff2d55, #4cd964, #5ac8fa, #007aff, #7dc8e8) ;} 85% {background-image:
		linear-gradient(to right, #ff2d55, #4cd964, #5ac8fa, #007aff, #7dc8e8, #5856d6) ;} 90% {background-image:
		linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #7dc8e8, #5856d6, #ff2d55) ;} 95% {background-image:
		linear-gradient(to left, #5ac8fa, #007aff, #7dc8e8, #5856d6, #ff2d55, #4cd964) ;} 100% {background-image:
		linear-gradient(to left, #007aff, #7dc8e8, #5856d6, #ff2d55, #4cd964, #5ac8fa) ;}}
);
</style>
