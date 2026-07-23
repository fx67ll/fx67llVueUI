<template>
	<!-- 场景式 loading 天生全屏遮罩：fixed 铺满视口，内部居中放置动效与 tip -->
	<div
		v-if="isVisible"
		class="fx67ll-ls-mask"
		:class="{ 'fx67ll-ls-mask--custom-bg': background, 'fx67ll-ls-mask--no-mask': !mask }"
		:style="maskStyle"
	>
		<!-- 右上角关闭按钮：点击关闭 loading（通过 v-model 同步父组件状态） -->
		<div v-if="closeable" class="fx67ll-ls-close" @click="handleClose">×</div>
		<div class="fx67ll-ls-center" :class="customClass">
			<!-- 提示文字：放在动效正上方，避免遮挡动效主体 -->
			<div v-if="tip" class="fx67ll-ls-tip">{{ tip }}</div>
			<!-- 动效区域：根据 type 渲染对应结构 -->
			<div class="fx67ll-ls-stage" :style="stageStyle">

				<!-- ==================== Multiple 组 10 款（共享三层外壳） ==================== -->
				<template v-if="isMultiple">
					<div class="fx67ll-ls-loading" :class="'fx67ll-ls-' + type">
						<div class="fx67ll-ls-loading-center">
							<div class="fx67ll-ls-loading-center-absolute">
								<!-- flip-cube：单个翻转方块 -->
								<div v-if="type === 'flip-cube'" class="fx67ll-ls-object"></div>
								<!-- dot-matrix / dot-matrix-round：8 小 + 1 big -->
								<template v-else-if="type === 'dot-matrix' || type === 'dot-matrix-round'">
									<div class="fx67ll-ls-object" v-for="n in 8" :key="'o' + n" :class="'fx67ll-ls-object-' + wordNum(n)"></div>
									<div class="fx67ll-ls-object-big"></div>
								</template>
								<!-- quad-bounce / quad-scatter / quad-horizontal：4 个 object -->
								<template v-else-if="type === 'quad-bounce' || type === 'quad-scatter' || type === 'quad-horizontal'">
									<div class="fx67ll-ls-object" v-for="n in 4" :key="'o' + n" :class="'fx67ll-ls-object-' + wordNum(n)"></div>
								</template>
								<!-- triple-pulse：3 个 object -->
								<template v-else-if="type === 'triple-pulse'">
									<div class="fx67ll-ls-object" v-for="n in 3" :key="'o' + n" :class="'fx67ll-ls-object-' + wordNum(n)"></div>
								</template>
								<!-- wave-run：5 个 object，带初始 left -->
								<template v-else-if="type === 'wave-run'">
									<div class="fx67ll-ls-object fx67ll-ls-object-one"></div>
									<div class="fx67ll-ls-object fx67ll-ls-object-two" style="left:20px;"></div>
									<div class="fx67ll-ls-object fx67ll-ls-object-three" style="left:40px;"></div>
									<div class="fx67ll-ls-object fx67ll-ls-object-four" style="left:60px;"></div>
									<div class="fx67ll-ls-object fx67ll-ls-object-five" style="left:80px;"></div>
								</template>
								<!-- grid-pulse：9 个 object -->
								<template v-else-if="type === 'grid-pulse'">
									<div class="fx67ll-ls-object" v-for="n in 9" :key="'o' + n" :class="'fx67ll-ls-object-' + wordNum(n)"></div>
								</template>
								<!-- flying-bar：单个飞行方块 -->
								<div v-else-if="type === 'flying-bar'" class="fx67ll-ls-object fx67ll-ls-object-one"></div>
							</div>
						</div>
					</div>
				</template>

				<!-- ==================== Single 组 4 款（各自独立结构） ==================== -->
				<!-- robot-engine：5 活塞拼 ROBOT -->
				<template v-else-if="type === 'robot-engine'">
					<div class="fx67ll-ls-robot">
						<div class="fx67ll-ls-piston" v-for="(letter, i) in ['R','O','B','O','T']" :key="i">
							<div class="fx67ll-ls-rotator"></div>
							<div class="fx67ll-ls-block">{{ letter }}<div class="fx67ll-ls-arm"></div></div>
						</div>
					</div>
				</template>

				<!-- solar-system：太阳系九大行星 -->
				<template v-else-if="type === 'solar-system'">
					<div class="fx67ll-ls-solar-system">
						<i class="fx67ll-ls-mercury"></i>
						<i class="fx67ll-ls-venus"></i>
						<i class="fx67ll-ls-earth"></i>
						<i class="fx67ll-ls-mars"></i>
						<i class="fx67ll-ls-belt"></i>
						<i class="fx67ll-ls-jupiter"></i>
						<i class="fx67ll-ls-saturn"></i>
						<i class="fx67ll-ls-uranus"></i>
						<i class="fx67ll-ls-neptune"></i>
					</div>
				</template>

				<!-- book-flip：翻书 -->
				<template v-else-if="type === 'book-flip'">
					<div class="fx67ll-ls-book">
						<div class="fx67ll-ls-book-inner"><hr /><hr /><hr /><hr /><hr /></div>
						<div class="fx67ll-ls-book-inner fx67ll-ls-box fx67ll-ls-box-1"><hr /><hr /><hr /><hr /><hr /></div>
						<div class="fx67ll-ls-book-inner fx67ll-ls-box fx67ll-ls-box-2"><hr /><hr /><hr /><hr /><hr /></div>
						<div class="fx67ll-ls-book-inner fx67ll-ls-box fx67ll-ls-box-3"><hr /><hr /><hr /><hr /><hr /></div>
						<div class="fx67ll-ls-book-inner fx67ll-ls-box fx67ll-ls-box-4"><hr /><hr /><hr /><hr /><hr /></div>
						<div class="fx67ll-ls-book-inner fx67ll-ls-box fx67ll-ls-box-5"><hr /><hr /><hr /><hr /><hr /></div>
						<div class="fx67ll-ls-book-inner fx67ll-ls-box fx67ll-ls-box-6"><hr /><hr /><hr /><hr /><hr /></div>
						<div class="fx67ll-ls-book-inner"><hr /><hr /><hr /><hr /><hr /></div>
					</div>
				</template>

				<!-- windows-flag：四色方块旋转 -->
				<template v-else-if="type === 'windows-flag'">
					<div class="fx67ll-ls-windows"><i></i><i></i></div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
	/**
	 * fx67ll-loading-screen 加载动画场景式组件
	 *
	 * 内置 14 款整页场景式加载动效，按结构分为两组：
	 * 1. Multiple 组 10 款 —— 共享三层全屏遮罩外壳，object 单色，支持 color 参数化
	 * 2. Single 组 4 款 —— 各自独立结构，多色硬编码，保持原配色（color 对其无效）
	 *
	 * 与 fx67ll-loading（26 款内联小转圈）互补：本组件为整页场景式，天生全屏遮罩，
	 * 适合页面级启动加载、首屏等待等场景。
	 *
	 * 支持：类型选择、全屏遮罩、背景色、提示文字、延迟显示、v-model 显隐控制、关闭按钮
	 *
	 * @author fx67ll
	 * @version 0.6.1
	 */

	// Multiple 组 10 款（共享外壳，object 单色，支持 color）
	const MULTIPLE_LOADERS = [
		'flip-cube', 'dot-matrix', 'quad-bounce', 'triple-pulse', 'dot-matrix-round',
		'quad-scatter', 'quad-horizontal', 'wave-run', 'grid-pulse', 'flying-bar'
	];

	// Single 组 4 款（独立结构，多色，color 无效）
	const SINGLE_LOADERS = [
		'robot-engine', 'solar-system', 'book-flip', 'windows-flag'
	];

	// 各款默认背景色（background 属性为空时使用）
	const DEFAULT_BG = {
		'flip-cube': '#bd4932',
		'dot-matrix': '#db9e36',
		'quad-bounce': '#2c3e50',
		'triple-pulse': '#374140',
		'dot-matrix-round': '#dc3522',
		'quad-scatter': '#cf4a30',
		'quad-horizontal': '#ed8c2b',
		'wave-run': '#db5800',
		'grid-pulse': '#ff9000',
		'flying-bar': '#334d5c',
		'robot-engine': 'linear-gradient(to bottom, coral, tomato)',
		'solar-system': '#68abad',
		'book-flip': '#fc440f',
		'windows-flag': '#68abad'
	};

	// hex 颜色正则（3 位或 6 位）
	const HEX_REG = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$';

	export default {
		name: 'fx67llLoadingScreen',
		props: {
			// loader 类型，决定渲染哪种场景式动效，可选值见文档「所有类型」
			type: {
				type: String,
				required: false,
				default: 'grid-pulse'
			},
			// loader 颜色，hex 格式。仅对 Multiple 组 10 款生效（object 单色）；
			// Single 组 4 款为多色硬编码，此属性无效
			color: {
				type: String,
				required: false,
				default: '#ffffff',
				validator(color) {
					return new RegExp(HEX_REG).test(color);
				}
			},
			// 遮罩背景色，为空时使用各款默认背景色
			background: {
				type: String,
				required: false,
				default: ''
			},
			// 是否显示半透明遮罩层（设为 false 时仅显示背景色，无半透明遮罩）
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
			// 提示文字颜色，为空时使用默认白色
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
			},
			// 是否显示右上角关闭按钮，点击可关闭 loading
			closeable: {
				type: Boolean,
				required: false,
				default: true
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
			// 当前 type 是否属于 Multiple 组（共享外壳，支持 color）
			isMultiple() {
				return MULTIPLE_LOADERS.indexOf(this.type) !== -1;
			},
			// 实际使用的遮罩背景色：优先 background prop，否则各款默认背景
			actualBg() {
				return this.background || DEFAULT_BG[this.type] || '#333';
			},
			// 遮罩层样式：注入背景色、层级、tip 颜色、object 颜色（color）
			maskStyle() {
				const style = {
					'--ls-bg': this.actualBg,
					'--ls-zindex': this.zIndex,
					'--ls-tip-color': this.tipColor || '#ffffff'
				};
				// color 仅对 Multiple 组生效，注入到 --ls-color 供 object 使用
				if (this.isMultiple) {
					style['--ls-color'] = this.color;
				}
				return style;
			},
			// 动效舞台样式（Single 组无额外变量，预留扩展）
			stageStyle() {
				return {};
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
			},
			// 数字转英文单词（one~nine），用于生成 object 的序号 class 名
			wordNum(n) {
				const words = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
				return words[n] || '';
			},
			// 关闭按钮点击：通过 input 事件同步 v-model 为 false，并抛出 close 事件供父组件监听
			handleClose() {
				this.$emit('input', false);
				this.$emit('close');
			}
		}
	};
</script>

<style lang="less">
	// 引入场景式共享样式（遮罩、居中、tip）
	@import './styles/shared.less';
	// 引入 Multiple 组 10 款动效样式（object 颜色经 --ls-color 参数化）
	@import './styles/multiple.less';
	// 引入 Single 组 4 款动效样式（保持原配色）
	@import './styles/single.less';
</style>
