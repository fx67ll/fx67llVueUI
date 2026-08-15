<template>
	<div class="dc-box" :style="boxStyle">
		<template v-if="showDate">
			<p class="dc-weekday">{{ weekdayText }}</p>
			<div class="dc-date">{{ dateText }}</div>
		</template>

		<div v-if="showDigital" class="dc-digital" :class="{ 'dc-digital--hour12': hour12 }" aria-live="polite">
			<span class="dc-digital-main">{{ digitalMain }}</span>
			<span class="dc-digital-seconds">{{ digitalSeconds }}</span>
			<span v-if="hour12" class="dc-digital-meridiem">{{ meridiem }}</span>
		</div>

		<div v-if="showAnalog" class="dc-clock" aria-label="模拟时钟">
			<span v-for="(mark, i) in markList" :key="'mark' + i" class="dc-mark"
				:class="{ 'dc-mark--hour': mark.isHour }" :style="{ '--angle': mark.angle }"></span>
			<span v-for="num in numberList" :key="'num' + num.n" class="dc-number"
				:style="{ left: num.left, top: num.top }">{{
					num.n }}</span>
			<div class="dc-hand dc-hand--hour" ref="hourHand"></div>
			<div class="dc-hand dc-hand--minute" ref="minuteHand"></div>
			<div class="dc-hand dc-hand--second" ref="secondHand"></div>
			<div class="dc-center"></div>
		</div>
	</div>
</template>

<script>
// 主题配色表：仅作用于时钟本体（钟盘、指针、文字），不污染页面背景
var DC_THEMES = {
	fx67ll: {
		face: 'rgba(240,250,244,.94)',
		faceInner: 'rgba(255,255,255,.76)',
		text: '#1a4632',
		hourHand: '#2ecc71',
		minuteHand: '#1f8a52',
		secondHand: '#e74c3c',
		accent: '#2ecc71'
	},
	aurora: {
		face: 'rgba(235,248,255,.94)',
		faceInner: 'rgba(255,255,255,.72)',
		text: '#17324a',
		hourHand: '#16324a',
		minuteHand: '#0ea5a5',
		secondHand: '#f43f5e',
		accent: '#2dd4bf'
	},
	ocean: {
		face: 'rgba(239,247,255,.94)',
		faceInner: 'rgba(255,255,255,.76)',
		text: '#15335c',
		hourHand: '#142e55',
		minuteHand: '#0284c7',
		secondHand: '#db2777',
		accent: '#22d3ee'
	},
	forest: {
		face: 'rgba(244,250,238,.94)',
		faceInner: 'rgba(255,255,255,.76)',
		text: '#21422f',
		hourHand: '#21422f',
		minuteHand: '#16a34a',
		secondHand: '#f97316',
		accent: '#4ade80'
	},
	sunset: {
		face: 'rgba(255,247,237,.94)',
		faceInner: 'rgba(255,255,255,.76)',
		text: '#5c2b1a',
		hourHand: '#592b1c',
		minuteHand: '#ea580c',
		secondHand: '#e11d48',
		accent: '#fb923c'
	},
	violet: {
		face: 'rgba(247,244,255,.94)',
		faceInner: 'rgba(255,255,255,.78)',
		text: '#3f2a64',
		hourHand: '#3e2a63',
		minuteHand: '#7c3aed',
		secondHand: '#e11d48',
		accent: '#a78bfa'
	},
	graphite: {
		face: 'rgba(242,244,247,.94)',
		faceInner: 'rgba(255,255,255,.78)',
		text: '#202938',
		hourHand: '#202938',
		minuteHand: '#475569',
		secondHand: '#ef4444',
		accent: '#94a3b8'
	}
};

// 十六进制颜色校验正则（兼容 3 位与 6 位写法）
var HEX_COLOR_REG = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');

export default {
	name: 'fx67llDigitalClock',
	props: {
		// 显示时区，IANA 时区标识
		timeZone: {
			type: String,
			required: false,
			default: 'Asia/Shanghai',
			validator(val) {
				return typeof val === 'string' && val.length > 0;
			}
		},
		// 是否使用 12 小时制显示数字时间
		hour12: {
			type: Boolean,
			required: false,
			default: false,
			validator(val) {
				return typeof val === 'boolean';
			}
		},
		// 是否显示模拟时钟（指针钟盘）
		showAnalog: {
			type: Boolean,
			required: false,
			default: true,
			validator(val) {
				return typeof val === 'boolean';
			}
		},
		// 是否显示数字时间
		showDigital: {
			type: Boolean,
			required: false,
			default: true,
			validator(val) {
				return typeof val === 'boolean';
			}
		},
		// 是否显示日期与星期
		showDate: {
			type: Boolean,
			required: false,
			default: true,
			validator(val) {
				return typeof val === 'boolean';
			}
		},
		// 秒针是否平滑扫动，false 时为每秒跳格
		smoothSeconds: {
			type: Boolean,
			required: false,
			default: true,
			validator(val) {
				return typeof val === 'boolean';
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
		// 时钟主题：fx67ll / aurora / ocean / forest / sunset / violet / graphite
		theme: {
			type: String,
			required: false,
			default: 'fx67ll',
			validator(val) {
				return Object.keys(DC_THEMES).indexOf(val) !== -1;
			}
		},
		// 钟盘底色，十六进制颜色代码，留空则跟随主题
		faceColor: {
			type: String,
			required: false,
			default: '',
			validator(color) {
				return color === '' || HEX_COLOR_REG.test(color);
			}
		},
		// 时针颜色，十六进制颜色代码，留空则跟随主题
		hourHandColor: {
			type: String,
			required: false,
			default: '',
			validator(color) {
				return color === '' || HEX_COLOR_REG.test(color);
			}
		},
		// 分针颜色，十六进制颜色代码，留空则跟随主题
		minuteHandColor: {
			type: String,
			required: false,
			default: '',
			validator(color) {
				return color === '' || HEX_COLOR_REG.test(color);
			}
		},
		// 秒针颜色，十六进制颜色代码，留空则跟随主题
		secondHandColor: {
			type: String,
			required: false,
			default: '',
			validator(color) {
				return color === '' || HEX_COLOR_REG.test(color);
			}
		},
		// 数字时间与日期文字颜色，十六进制颜色代码，留空则跟随主题
		textColor: {
			type: String,
			required: false,
			default: '',
			validator(color) {
				return color === '' || HEX_COLOR_REG.test(color);
			}
		},
		// 是否启用后台网络时间同步（静默执行，优先展示本地时间，仅在偏差超过阈值时静默校正）
		syncEnabled: {
			type: Boolean,
			required: false,
			default: true,
			validator(val) {
				return typeof val === 'boolean';
			}
		},
		// 网络时间同步的请求地址，留空则请求当前站点（利用 HTTP Date 响应头），存在跨域限制时请配置同源接口
		syncUrl: {
			type: String,
			required: false,
			default: '',
			validator(val) {
				return typeof val === 'string';
			}
		},
		// 网络时间重同步周期（毫秒），默认 5 分钟
		syncInterval: {
			type: Number,
			required: false,
			default: 300000,
			validator(num) {
				return typeof num === 'number' && num >= 30000;
			}
		}
	},
	data() {
		return {
			// 数字时间主显示（时:分）
			digitalMain: '--:--',
			// 数字时间秒显示
			digitalSeconds: '--',
			// 12 小时制的上午/下午标识
			meridiem: '',
			// 日期文本
			dateText: '',
			// 星期文本
			weekdayText: ''
		};
	},
	computed: {
		// 注入到根容器的 CSS 变量集合，供 less 运行时读取，颜色 prop 留空时跟随主题
		boxStyle() {
			var themeConf = DC_THEMES[this.theme] || DC_THEMES.fx67ll;
			var style = {
				'--zoomSize': this.zoomSize,
				'--dc-face': this.faceColor || themeConf.face,
				'--dc-face-inner': themeConf.faceInner,
				'--dc-text': this.textColor || themeConf.text,
				'--dc-hour-hand': this.hourHandColor || themeConf.hourHand,
				'--dc-minute-hand': this.minuteHandColor || themeConf.minuteHand,
				'--dc-second-hand': this.secondHandColor || themeConf.secondHand,
				'--dc-accent': themeConf.accent
			};
			return style;
		},
		// 60 个刻度列表，每 5 个为一个时刻度
		markList() {
			var list = [];
			for (var i = 0; i < 60; i++) {
				list.push({
					isHour: i % 5 === 0,
					angle: i * 6 + 'deg'
				});
			}
			return list;
		},
		// 12 个数字刻度列表，使用百分比定位，随钟盘尺寸自适应，无需监听 resize
		numberList() {
			var list = [];
			for (var n = 1; n <= 12; n++) {
				var angle = ((n * 30 - 90) * Math.PI) / 180;
				list.push({
					n: n,
					left: 50 + 36.75 * Math.cos(angle) + '%',
					top: 50 + 36.75 * Math.sin(angle) + '%'
				});
			}
			return list;
		}
	},
	watch: {
		// 时区或小时制变化时重建格式化器
		timeZone() {
			this.buildFormatters();
		},
		hour12() {
			this.buildFormatters();
		}
	},
	mounted() {
		var self = this;

		this.buildFormatters();

		// 网络时间与本设备时间的偏差量（毫秒），本地时间优先，偏差超过阈值时才会被赋值
		this.timeOffset = 0;
		this.lastSecond = -1;
		this.lastDateKey = '';
		this.rafId = null;
		this.syncTimer = null;

		// 后台静默同步网络时间：无加载提示、失败自动忽略、不影响本地时间展示
		if (this.syncEnabled && typeof window !== 'undefined') {
			this.startSync();
			document.addEventListener('visibilitychange', this.handleVisibilityChange);
		}

		this.updateClock();
	},
	beforeDestroy() {
		this.stopLoop();
		if (this.syncTimer) {
			clearInterval(this.syncTimer);
			this.syncTimer = null;
		}
		if (typeof document !== 'undefined') {
			document.removeEventListener('visibilitychange', this.handleVisibilityChange);
		}
	},
	methods: {
		// 构建 Intl 时间格式化器（挂载为非响应式实例属性，避免每帧格式化开销进入响应式系统）
		buildFormatters() {
			var options = {
				timeZone: this.timeZone,
				hour12: this.hour12,
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			};
			this.timeFormatter = new Intl.DateTimeFormat('zh-CN', options);
			this.dateFormatter = new Intl.DateTimeFormat('zh-CN', {
				timeZone: this.timeZone,
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			});
			this.weekdayFormatter = new Intl.DateTimeFormat('zh-CN', {
				timeZone: this.timeZone,
				weekday: 'long'
			});
		},
		// 获取校正后的当前时间（未同步或偏差不大时即本地时间）
		getNow() {
			return new Date(Date.now() + this.timeOffset);
		},
		// 解析当前时间的各部分
		getClockParts() {
			var now = this.getNow();
			var parts = this.timeFormatter.formatToParts(now);
			var getPart = function (type) {
				for (var i = 0; i < parts.length; i++) {
					if (parts[i].type === type) {
						return parts[i].value;
					}
				}
				return '';
			};

			return {
				hours: Number(getPart('hour')) || 0,
				minutes: Number(getPart('minute')) || 0,
				seconds: Number(getPart('second')) || 0,
				milliseconds: now.getMilliseconds(),
				dayPeriod: getPart('dayPeriod'),
				dateText: this.dateFormatter.format(now),
				weekdayText: this.weekdayFormatter.format(now)
			};
		},
		// 补零
		padZero(value) {
			return value < 10 ? '0' + value : '' + value;
		},
		// rAF 渲染循环：指针直接写 DOM 避免每帧触发响应式更新，数字与日期仅在变化时更新
		updateClock() {
			var self = this;
			var parts = this.getClockParts();

			var hourDeg = (parts.hours % 12) * 30 + parts.minutes * 0.5 + parts.seconds / 120;
			var minuteDeg = parts.minutes * 6 + parts.seconds * 0.1 + parts.milliseconds * 0.0001;
			var secondDeg = parts.seconds * 6 + parts.milliseconds * 0.006;

			var secondChanged = parts.seconds !== this.lastSecond;
			var needHands = this.smoothSeconds || secondChanged || this.lastSecond === -1;

			if (this.showAnalog && needHands && this.$refs.secondHand) {
				this.$refs.hourHand.style.transform = 'translateX(-50%) rotate(' + hourDeg + 'deg)';
				this.$refs.minuteHand.style.transform = 'translateX(-50%) rotate(' + minuteDeg + 'deg)';
				this.$refs.secondHand.style.transform =
					'translateX(-50%) rotate(' + (this.smoothSeconds ? secondDeg : parts.seconds * 6) + 'deg)';
			}

			if (secondChanged) {
				if (this.showDigital) {
					var hours12 = this.hour12 ? parts.hours % 12 || 12 : parts.hours;
					this.digitalMain = this.padZero(hours12) + ':' + this.padZero(parts.minutes);
					this.digitalSeconds = this.padZero(parts.seconds);
					this.meridiem = parts.dayPeriod || '';
				}
				this.lastSecond = parts.seconds;
				// 每秒向父组件抛出当前时间信息
				this.$emit('tick', {
					hours: parts.hours,
					minutes: parts.minutes,
					seconds: parts.seconds,
					dateText: parts.dateText,
					weekdayText: parts.weekdayText
				});
			}

			var dateKey = parts.dateText + parts.weekdayText;
			if (dateKey !== this.lastDateKey) {
				if (this.showDate) {
					this.dateText = parts.dateText;
					this.weekdayText = parts.weekdayText;
				}
				this.lastDateKey = dateKey;
			}

			this.rafId = window.requestAnimationFrame(function () {
				self.updateClock();
			});
		},
		// 停止渲染循环
		stopLoop() {
			if (this.rafId !== null && typeof window !== 'undefined' && window.cancelAnimationFrame) {
				window.cancelAnimationFrame(this.rafId);
			}
			this.rafId = null;
		},
		// 页面重新可见时立即重同步一次，修复标签页休眠期间累积的时间偏差
		handleVisibilityChange() {
			if (document.visibilityState === 'visible') {
				this.syncTime();
			}
		},
		// 启动周期性静默同步
		startSync() {
			var self = this;
			this.syncTime();
			this.syncTimer = setInterval(function () {
				self.syncTime();
			}, this.syncInterval);
		},
		// 静默网络时间同步：通过 HTTP Date 响应头估算服务器时间与往返耗时，
		// 仅当与本地时间偏差超过 1 秒时才静默校正，否则始终优先展示本地时间；
		// 任何失败均静默忽略，界面上不会出现加载或提示
		syncTime() {
			var self = this;
			if (!this.syncEnabled || typeof window === 'undefined' || typeof XMLHttpRequest === 'undefined') {
				return;
			}
			try {
				var xhr = new XMLHttpRequest();
				var url = this.syncUrl || window.location.href;
				var start = Date.now();
				xhr.open('HEAD', url, true);
				xhr.timeout = 5000;
				xhr.onload = function () {
					try {
						var serverDate = xhr.getResponseHeader('Date');
						if (!serverDate) {
							return;
						}
						// 服务器时间 + 半程往返耗时 ≈ 当前服务器时间
						var serverTime = Date.parse(serverDate) + (Date.now() - start) / 2;
						var offset = serverTime - Date.now();
						// 本地时间优先：1 秒以内的偏差视为噪音，不校正
						if (Math.abs(offset) >= 1000) {
							self.timeOffset = offset;
						} else {
							self.timeOffset = 0;
						}
						// 静默抛出同步结果，便于父组件在需要时感知
						self.$emit('time-sync', {
							offset: self.timeOffset,
							corrected: Math.abs(offset) >= 1000
						});
					} catch (e) {
						// 解析失败静默忽略，保持本地时间
					}
				};
				xhr.onerror = function () {
					// 网络失败静默忽略，保持本地时间
				};
				xhr.ontimeout = function () {
					// 请求超时静默忽略，保持本地时间
				};
				xhr.send();
			} catch (e) {
				// 同步初始化失败静默忽略，保持本地时间
			}
		}
	}
};
</script>

<style lang="less" scoped>
.dc-box {
	zoom: var(--zoomSize);
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	font-family: 'PingFang SC', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	color: var(--dc-text);

	.dc-weekday {
		margin: 0 0 4px;
		font-size: 14px;
		letter-spacing: 4px;
		opacity: 0.75;
	}

	.dc-date {
		margin-bottom: 8px;
		font-size: 16px;
		letter-spacing: 1px;
		opacity: 0.9;
	}

	.dc-digital {
		display: flex;
		align-items: baseline;
		gap: 6px;
		margin-bottom: 12px;
		font-variant-numeric: tabular-nums;

		.dc-digital-main {
			font-size: 56px;
			font-weight: 200;
			line-height: 1;
			letter-spacing: 2px;
			color: var(--dc-text);
		}

		.dc-digital-seconds {
			font-size: 24px;
			font-weight: 300;
			color: var(--dc-second-hand);
		}

		.dc-digital-meridiem {
			font-size: 14px;
			opacity: 0.7;
		}
	}

	.dc-clock {
		position: relative;
		width: 240px;
		height: 240px;
		border-radius: 50%;
		background: radial-gradient(circle at 50% 42%, var(--dc-face-inner), var(--dc-face) 72%);
		box-shadow:
			0 0 0 1px rgba(0, 0, 0, 0.04),
			0 18px 40px -18px rgba(0, 0, 0, 0.28),
			inset 0 0 0 6px rgba(255, 255, 255, 0.35);

		.dc-mark {
			position: absolute;
			left: 50%;
			top: 50%;
			width: 2px;
			height: 7px;
			border-radius: 2px;
			background: var(--dc-text);
			opacity: 0.35;
			transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-104px);
		}

		.dc-mark--hour {
			width: 3px;
			height: 12px;
			opacity: 0.8;
		}

		.dc-number {
			position: absolute;
			transform: translate(-50%, -50%);
			font-size: 17px;
			font-weight: 500;
			color: var(--dc-text);
		}

		.dc-hand {
			position: absolute;
			left: 50%;
			bottom: 50%;
			transform-origin: 50% 100%;
			border-radius: 4px;
		}

		.dc-hand--hour {
			width: 6px;
			height: 62px;
			background: var(--dc-hour-hand);
		}

		.dc-hand--minute {
			width: 4px;
			height: 90px;
			background: var(--dc-minute-hand);
		}

		.dc-hand--second {
			width: 2px;
			height: 98px;
			background: var(--dc-second-hand);
		}

		.dc-center {
			position: absolute;
			left: 50%;
			top: 50%;
			width: 12px;
			height: 12px;
			border-radius: 50%;
			transform: translate(-50%, -50%);
			background: var(--dc-second-hand);
			box-shadow: 0 0 0 3px var(--dc-face-inner);
		}
	}
}
</style>
