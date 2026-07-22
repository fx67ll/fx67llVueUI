<template>
	<!-- 全屏遮罩模式：外层包 fixed 遮罩，内部居中放置 spinner 与 tip -->
	<div
		v-if="fullscreen && isVisible"
		class="fx67ll-loading-mask"
		:class="{ 'fx67ll-loading-mask--custom-bg': background, 'fx67ll-loading-mask--no-mask': !mask }"
		:style="{ '--loader-color': color, '--loader-bg': background, '--loader-zindex': zIndex, '--loader-tip-color': tipColor || color }"
	>
		<div class="fx67ll-loading-center">
			<div class="fx67ll-loading fx67ll-loading--fullscreen" :class="[customClass, durationClass]" :style="spinnerStyle">
				<!-- 第一组：保留 .la-xxx 类名，v-for 渲染 N 个空 div -->
				<div v-if="isLa" :class="['la-' + type, sizeClass]" :style="{ color: color }">
					<div v-for="n in divs" :key="n"></div>
				</div>
				<!-- 第二组：单个 div + data-loader 属性，伪元素生成图形 -->
				<div v-else :data-loader="dataLoader"></div>
			</div>
			<div v-if="tip" class="fx67ll-loading-tip">{{ tip }}</div>
		</div>
	</div>

	<!-- 内联模式：仅渲染 spinner 本身，可放入任意相对容器做局部 loading -->
	<div
		v-else-if="!fullscreen && isVisible"
		class="fx67ll-loading"
		:class="[customClass, durationClass]"
		:style="spinnerStyle"
	>
		<div v-if="isLa" :class="['la-' + type, sizeClass]" :style="{ color: color }">
			<div v-for="n in divs" :key="n"></div>
		</div>
		<div v-else :data-loader="dataLoader"></div>
		<div v-if="tip" class="fx67ll-loading-tip">{{ tip }}</div>
	</div>
</template>

<script>
	/**
	 * fx67ll-loading 加载动画组件
	 *
	 * 内置 27 款纯 CSS 内联加载动效，按渲染方式分为两组：
	 * 1. 第一组 16 款 —— 颜色走 currentColor 继承，天然支持 color/size 参数化
	 * 2. 第二组 11 款 —— 颜色通过 CSS 变量 --loader-color 注入，支持动态换色
	 *
	 * 支持：类型选择、颜色、大小、动画时长、全屏遮罩、提示文字、延迟显示、v-model 显隐控制
	 *
	 * @author fx67ll
	 * @version 0.6.0
	 */

	// 第一组 16 款配置：type -> 子 div 数量（子 div 为空，靠 nth-child 分配 delay/角色）
	const GROUP1_LOADERS = {
		'ball-climbing-dot': 4,
		'ball-clip-rotate': 1,
		'ball-fall': 3,
		'ball-newton-cradle': 4,
		'ball-pulse': 3,
		'ball-running-dots': 5,
		'ball-scale-pulse': 2,
		'ball-scale': 1,
		'ball-spin-clockwise': 8,
		'ball-spin-rotate': 2,
		'ball-spin': 8,
		'line-scale': 5,
		'pacman': 6,
		'square-jelly-box': 2,
		'square-loader': 1,
		'timer': 1
	};

	// 第二组 11 款配置：type -> data-loader 属性值，0 个子 div，伪元素生成图形
	// 其中 ball-scale / ball-pulse 与第一组重名，故使用 bt- 前缀作为 type 别名，
	// 渲染时剥离前缀作为 data-loader 属性值传给样式
	const GROUP2_LOADERS = {
		'circle': 'circle',
		'circle-side': 'circle-side',
		'arrow-circle': 'arrow-circle',
		'bt-ball-scale': 'ball-scale',
		'ball-circle': 'ball-circle',
		'rectangle': 'rectangle',
		'heart': 'heart',
		'ball-rotate': 'ball-rotate',
		'bt-ball-pulse': 'ball-pulse',
		'jumping': 'jumping',
		'satellite': 'satellite'
	};

	// hex 颜色正则（3 位或 6 位），与组件库其它组件保持一致
	const HEX_REG = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$';

	export default {
		name: 'fx67llLoading',
		props: {
			// loader 类型，决定渲染哪种动效，可选值见文档「所有类型」
			type: {
				type: String,
				required: false,
				default: 'ball-pulse'
			},
			// loader 颜色，hex 格式，第一组经 currentColor 继承，第二组经 --loader-color 变量
			color: {
				type: String,
				required: false,
				default: '#42b983',
				validator(color) {
					return new RegExp(HEX_REG).test(color);
				}
			},
			// loader 大小，支持 'sm'/'md'/'lg'/'xl'（第一组原生修饰类）或数字倍数
			size: {
				type: [String, Number],
				required: false,
				default: 'md'
			},
			// 单次动画时长（秒），null 时使用各款默认时长；通过 --loader-duration 注入
			duration: {
				type: Number,
				required: false,
				default: null,
				validator(num) {
					return num === null || (typeof num === 'number' && num > 0);
				}
			},
			// 是否全屏遮罩模式
			fullscreen: {
				type: Boolean,
				required: false,
				default: false
			},
			// 全屏遮罩背景色，仅 fullscreen 生效，为空时使用默认半透明遮罩
			background: {
				type: String,
				required: false,
				default: ''
			},
			// 全屏时是否显示半透明遮罩层，仅 fullscreen 生效
			mask: {
				type: Boolean,
				required: false,
				default: true
			},
			// 全屏遮罩层级
			zIndex: {
				type: [String, Number],
				required: false,
				default: 9999,
				validator(num) {
					return new RegExp('^[0-9]*[1-9][0-9]*$').test(parseInt(num));
				}
			},
			// loading 下方提示文字
			tip: {
				type: String,
				required: false,
				default: ''
			},
			// 提示文字颜色，为空时跟随 color
			tipColor: {
				type: String,
				required: false,
				default: '',
				validator(color) {
					return color === '' || new RegExp(HEX_REG).test(color);
				}
			},
			// 延迟显示时间（毫秒），避免短请求闪烁，0 表示立即显示
			delay: {
				type: Number,
				required: false,
				default: 0,
				validator(num) {
					return typeof num === 'number' && num >= 0;
				}
			},
			// v-model 绑定值，控制组件显隐
			value: {
				type: Boolean,
				required: false,
				default: true
			},
			// 自定义类名透传
			customClass: {
				type: String,
				required: false,
				default: ''
			}
		},
		data() {
			return {
				// 延迟显示后置为 true，与 value 共同决定最终可见性
				showAfterDelay: false,
				// delay 定时器 id，组件销毁时清理避免内存泄漏
				delayTimer: null
			};
		},
		computed: {
			// 当前 type 是否属于第一组（子 div + currentColor 渲染）
			isLa() {
				return Object.prototype.hasOwnProperty.call(GROUP1_LOADERS, this.type);
			},
			// 第一组子 div 数量
			divs() {
				return GROUP1_LOADERS[this.type] || 0;
			},
			// 第二组渲染时实际使用的 data-loader 属性值（剥离 bt- 别名前缀）
			dataLoader() {
				return GROUP2_LOADERS[this.type] || this.type;
			},
			// size 映射为第一组修饰类（sm/md/lg/xl），数字型返回空字符串（走 transform scale）
			sizeClass() {
				const map = {
					sm: 'la-sm',
					md: '',
					lg: 'la-2x',
					xl: 'la-3x'
				};
				if (typeof this.size === 'number') {
					return '';
				}
				return map[this.size] !== undefined ? map[this.size] : '';
			},
			// 数字型 size 转为缩放倍数；md/非数字时为 1 不缩放（第一组靠修饰类控尺寸）
			scaleValue() {
				if (typeof this.size === 'number') {
					return this.size;
				}
				// sm=0.5, lg=2, xl=3 用于第二组的等比缩放
				const scaleMap = { sm: 0.5, md: 1, lg: 2, xl: 3 };
				return scaleMap[this.size] !== undefined ? scaleMap[this.size] : 1;
			},
			// 注入到根容器的 CSS 变量集合
			spinnerStyle() {
				const style = {
					'--loader-color': this.color,
					'--loader-scale': this.scaleValue
				};
				// 仅当指定 duration 时覆盖默认动画时长
				if (this.duration !== null) {
					style['--loader-duration'] = this.duration + 's';
				}
				return style;
			},
			// duration 自定义时长时追加 class，用于在样式中以 !important 统一覆盖所有子元素动画时长
			durationClass() {
				return this.duration !== null ? 'fx67ll-loading--custom-duration' : '';
			},
			// 最终可见性：value 控制 + delay 延迟
			isVisible() {
				return this.value && this.showAfterDelay;
			}
		},
		watch: {
			// value 变化时重新走 delay 逻辑
			value: {
				handler(val) {
					if (val) {
						this.startDelay();
					} else {
						this.clearDelay();
						this.showAfterDelay = false;
					}
				}
			}
		},
		mounted() {
			this.startDelay();
		},
		beforeDestroy() {
			// 组件销毁时清理 delay 定时器，避免在已卸载实例上 setData 产生 Vue 警告
			this.clearDelay();
		},
		methods: {
			// 启动延迟显示逻辑：delay>0 时延迟后显示，否则立即显示
			startDelay() {
				this.clearDelay();
				if (this.delay > 0) {
					this.delayTimer = setTimeout(() => {
						this.showAfterDelay = true;
					}, this.delay);
				} else {
					this.showAfterDelay = true;
				}
			},
			// 清理 delay 定时器
			clearDelay() {
				if (this.delayTimer) {
					clearTimeout(this.delayTimer);
					this.delayTimer = null;
				}
			}
		}
	};
</script>

<style lang="less">
	// 引入共享样式（外层容器、全屏遮罩、tip、缩放）
	@import './styles/shared.less';
	// 引入第一组 16 款动效样式
	@import './styles/la.less';
	// 引入第二组 11 款动效样式
	@import './styles/better.less';
</style>
