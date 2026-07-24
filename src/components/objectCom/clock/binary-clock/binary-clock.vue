<template>
	<div class="bc-box" :class="{ 'bc-box--no-label': !showLabel }" :style="boxStyle">
		<p v-if="isShowTime">{{ timeNow }}</p>
		<table>
			<tr class="bc-hours"><td v-for="(item, i) in hoursTimeArr" :key="i" :class="item === '0' ? 'num0' : 'num1'"></td></tr>
			<tr class="bc-minutes"><td v-for="(item, i) in minutesTimeArr" :key="i" :class="item === '0' ? 'num0' : 'num1'"></td></tr>
			<tr class="bc-seconds"><td v-for="(item, i) in secondsTimeArr" :key="i" :class="item === '0' ? 'num0' : 'num1'"></td></tr>
		</table>
	</div>
</template>

<script>
export default {
	name: 'fx67llBinaryClock',
	props: {
		// 是否显示十进制时间
		isShowTime: {
			type: Boolean,
			required: false,
			default: true,
			validator(val) {
				return typeof val == 'boolean';
			}
		},
		// 修改时钟缩放尺寸，复杂修改请直接重写样式表
		zoomSize: {
			type: Number,
			required: false,
			default: 1,
			validator(num) {
				return new RegExp('^((-?)0|([1-9][0-9]*))(\.[0-9]+)?$').test(num);
			}
		},
		// 亮起的圆点颜色（二进制 1），十六进制颜色代码
		dotColor: {
			type: String,
			required: false,
			default: '#2ecc71',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
			}
		},
		// 熄灭的圆点颜色（二进制 0），十六进制颜色代码
		dotBgColor: {
			type: String,
			required: false,
			default: '#ffffff',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
			}
		},
		// 圆点基础尺寸（px），实际渲染会在该基础上随视口自适应（14~36px 之间）
		dotSize: {
			type: Number,
			required: false,
			default: 30,
			validator(num) {
				return typeof num === 'number' && num >= 8 && num <= 60;
			}
		},
		// 十进制时间文字颜色，十六进制颜色代码
		textColor: {
			type: String,
			required: false,
			default: '#2ecc71',
			validator(color) {
				return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
			}
		},
		// 是否显示 hour/minute/second 标签
		showLabel: {
			type: Boolean,
			required: false,
			default: true,
			validator(val) {
				return typeof val == 'boolean';
			}
		}
	},
	computed: {
		// 注入到根容器的 CSS 变量集合，供 less 运行时读取
		boxStyle() {
			return {
				'--zoomSize': this.zoomSize,
				'--bc-dot-color': this.dotColor,
				'--bc-dot-color-rgb': this.hexToRgb(this.dotColor),
				'--bc-dot-bg-color': this.dotBgColor,
				'--bc-dot-bg-color-rgb': this.hexToRgb(this.dotBgColor),
				'--bc-text-color': this.textColor,
				// dotSize 作为 clamp 的 preferred 值，配合 14px~36px 上下限自适应
				'--bc-dot-size': this.dotSize + 'px'
			};
		}
	},
	data() {
		return {
			// 当前时间
			timeNow: '00 : 00 : 00',
			// 计时器对象
			timer: null,
			// 小时二进制数组
			hoursTimeArr: ['0', '0', '0', '0', '0', '0'],
			// 分钟二进制数组
			minutesTimeArr: ['0', '0', '0', '0', '0', '0'],
			// 秒钟二进制数组
			secondsTimeArr: ['0', '0', '0', '0', '0', '0']
		};
	},
	mounted() {
		var self = this;
		this.timer = setInterval(function() {
			self.getNowTime();
		}, 1000);
	},
	destroyed() {
		clearInterval(this.timer);
		this.timer = null;
	},
	methods: {
		// 将十六进制颜色转为 "r,g,b" 字符串，供 less 中 rgba(var(--xxx-rgb), a) 使用，实现光晕颜色跟随自定义配色
		hexToRgb(hex) {
			let h = hex.replace('#', '');
			if (h.length === 3) {
				h = h.split('').map(function(c) { return c + c; }).join('');
			}
			var r = parseInt(h.substring(0, 2), 16);
			var g = parseInt(h.substring(2, 4), 16);
			var b = parseInt(h.substring(4, 6), 16);
			return r + ',' + g + ',' + b;
		},
		// 获取当前时间
		getNowTime() {
			let d = new Date();
			let h = d.getHours();
			let m = d.getMinutes();
			let s = d.getSeconds();
			this.timeNow = this.addZero(h) + ' : ' + this.addZero(m) + ' : ' + this.addZero(s);
			this.hoursTimeArr = this.convertTenToTwo(h);
			this.minutesTimeArr = this.convertTenToTwo(m);
			this.secondsTimeArr = this.convertTenToTwo(s);
		},
		// 补齐时间格式
		addZero(i) {
			if (i < 10) {
				i = '0' + i;
			}
			return i;
		},
		// 十进制数字转换为二进制
		convertTenToTwo(num) {
			let bin = '';
			let convArr = [];
			while (num > 0) {
				bin = (num % 2) + bin;
				num = Math.floor(num / 2);
			}
			convArr = bin.split('');
			while (convArr.length < 6) {
				convArr.unshift('0');
			}
			return convArr;
		}
	}
};
</script>

<style lang="less" scoped>
@import '~@a/styles/binary-clock/binary-clock.less';
.bc-box{
	zoom: var(--zoomSize)
}
</style>
