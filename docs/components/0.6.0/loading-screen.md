# 加载动画（场景式）

`fx67ll-loading-screen` 是一个内置 **14 款** 整页场景式加载动效的组件，与 [`fx67ll-loading`](./loading.md)（26 款内联小转圈）互补：

- **内联组件** `fx67ll-loading`：26 款经典小转圈，结构轻量，支持颜色/大小/动画时长等完整参数化，可内联也可全屏。
- **场景式组件** `fx67ll-loading-screen`：14 款整页场景式动效（如太阳系、翻书、Windows 四色方块等），天生全屏遮罩，适合页面级启动加载、首屏等待等场景。

> 所有动效均为纯 CSS 实现，无任何 JS 动画依赖。本组件默认全屏遮罩，无需额外配置 `fullscreen` 属性。

---

## 基础示例

最简单的用法，通过 `type` 选择动效，配合 `v-model` 控制显隐。

::: demo 点击按钮显示场景式加载，右上角自带关闭按钮（点击即可关闭），4.5 秒后自动关闭。
```vue
<template>
	<div>
		<button class="fx67ll-demo-btn" @click="open()">显示场景式加载</button>
		<fx67ll-loading-screen v-model="show" type="solar-system" background="#2ECC71" tip="场景式加载" @close="onClose" />
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				show: false,
				timer: null
			}
		},
		methods: {
			open() {
				// 清除上一次未触发的定时器，避免连续点击时旧定时器提前关闭面板
				if (this.timer) {
					clearTimeout(this.timer)
					this.timer = null
				}
				this.show = true
				// 4.5 秒后自动关闭
				this.timer = setTimeout(() => {
					this.show = false
					this.timer = null
				}, 4500)
			},
			onClose() {
				// 手动关闭时同步清理定时器
				if (this.timer) {
					clearTimeout(this.timer)
					this.timer = null
				}
				console.log('loading 已通过关闭按钮关闭')
			}
		}
	};
</script>

<style>
.fx67ll-demo-btn {
	padding: 8px 18px;
	border: 1px solid #42b983;
	border-radius: 6px;
	background: #fff;
	color: #42b983;
	cursor: pointer;
	font-size: 14px;
}
.fx67ll-demo-btn:hover {
	background: #42b983;
	color: #fff;
}
</style>
```
:::

---

## 所有类型一览

下方网格展示了全部 14 款场景式动效，点击卡片可预览对应效果（每次预览持续 10.23 秒，背景随机使用小清新色系）。

::: demo 将全部 14 款动效以卡片网格形式展示，方便快速预览和选择合适的类型。
```vue
<template>
	<div class="screen-gallery">
		<div
			v-for="item in loaderList"
			:key="item.type"
			class="screen-gallery__card"
			@click="preview(item)"
		>
			<div class="screen-gallery__index">{{ item.index }}</div>
			<div class="screen-gallery__name">{{ item.type }}</div>
			<div class="screen-gallery__desc">{{ item.desc }}</div>
			<div class="screen-gallery__tag" :class="item.colorful ? 'screen-gallery__tag--multi' : 'screen-gallery__tag--single'">
				{{ item.colorful ? '多色固定' : '支持 color' }}
			</div>
		</div>

		<fx67ll-loading-screen v-model="previewShow" :type="previewType" :background="previewBg" :tip="previewTip" :tip-color="previewTipColor" />
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				previewShow: false,
				previewType: 'grid-pulse',
				// 预览标题：显示当前动效的中文名与 type 名
				previewTip: '',
				// 预览标题颜色：根据背景明暗自动选择（浅色背景用深色字）
				previewTipColor: '#ffffff',
				// 预览自动关闭定时器，连续点击时先清除旧的避免提前关闭
				previewTimer: null,
				// 预览背景色，每次点击随机切换为小清新色系
				previewBg: '#42b983',
				// 小清新色系备选背景
				freshColors: [
					'#42b983', '#3ccad1', '#9b7ad5', '#f6d860',
					'#ef8e81', '#79bbb5', '#5fa5d2', '#fec54f',
					'#aaffff', '#87c4a3', '#fd9372', '#dbbe39'
				],
				loaderList: [
					{ index: 1, type: 'flip-cube', desc: '3D 翻转方块', colorful: false },
					{ index: 2, type: 'dot-matrix', desc: '八点旋转方阵', colorful: false },
					{ index: 3, type: 'quad-bounce', desc: '四方块循环', colorful: false },
					{ index: 4, type: 'triple-pulse', desc: '三圆缩放', colorful: false },
					{ index: 5, type: 'dot-matrix-round', desc: '八点圆形方阵', colorful: false },
					{ index: 6, type: 'quad-scatter', desc: '四点旋转散开', colorful: false },
					{ index: 7, type: 'quad-horizontal', desc: '横向四点', colorful: false },
					{ index: 8, type: 'wave-run', desc: '波浪奔跑', colorful: false },
					{ index: 9, type: 'grid-pulse', desc: '九宫格脉冲', colorful: false },
					{ index: 10, type: 'flying-bar', desc: '飞行方块', colorful: false },
					{ index: 11, type: 'robot-engine', desc: '气缸活塞拼 ROBOT', colorful: true },
					{ index: 12, type: 'solar-system', desc: '太阳系九大行星', colorful: true },
					{ index: 13, type: 'book-flip', desc: '翻书效果', colorful: true },
					{ index: 14, type: 'windows-flag', desc: 'Windows 四色方块', colorful: true }
				]
			}
		},
		methods: {
			preview(item) {
				// 清除上一次预览的定时器，避免连续点击时旧定时器提前关闭面板
				if (this.previewTimer) {
					clearTimeout(this.previewTimer)
					this.previewTimer = null
				}
				this.previewType = item.type
				// 标题显示组件中文名与 type 名，便于识别当前预览的动效
				this.previewTip = item.desc + '  ·  ' + item.type
				// 随机选择一个小清新色系作为本次预览背景
				this.previewBg = this.freshColors[Math.floor(Math.random() * this.freshColors.length)]
				this.previewShow = true
				// 预览持续 10.23 秒，确保动效完整展示；仅此定时器与右上角关闭按钮可关闭面板
				this.previewTimer = setTimeout(() => {
					this.previewShow = false
					this.previewTimer = null
				}, 10230)
			}
		}
	};
</script>

<style>
.screen-gallery {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	gap: 16px;
	margin-top: 16px;
}
.screen-gallery__card {
	position: relative;
	padding: 18px 14px 14px;
	background: #f7f8fa;
	border: 1px solid #e6e8ec;
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.25s ease;
}
.screen-gallery__card:hover {
	transform: translateY(-4px);
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
	border-color: #42b983;
}
.screen-gallery__index {
	position: absolute;
	top: 10px;
	right: 12px;
	font-size: 12px;
	color: #b0b4bb;
	font-family: monospace;
}
.screen-gallery__name {
	font-size: 13px;
	color: #1a1d24;
	font-family: monospace;
	font-weight: 600;
}
.screen-gallery__desc {
	margin-top: 6px;
	font-size: 12px;
	color: #6b7280;
}
.screen-gallery__tag {
	display: inline-block;
	margin-top: 8px;
	padding: 2px 8px;
	font-size: 11px;
	border-radius: 10px;
}
.screen-gallery__tag--single {
	background: #ecfdf5;
	color: #047857;
}
.screen-gallery__tag--multi {
	background: #fef2f2;
	color: #b91c1c;
}
</style>
```
:::

> 卡片标签标注了每款动效是否支持 `color` 参数：绿色「支持 color」的为 Multiple 组 10 款（object 单色，可换色）；红色「多色固定」的为 Single 组 4 款（多色硬编码，保持原配色）。

---

## 背景配置

`background` 属性可自定义遮罩背景色（hex 或 rgba）。为空时使用各款默认背景色。

::: demo 对比默认背景与自定义背景。
```vue
<template>
	<div>
		<button class="fx67ll-demo-btn" @click="showDefault">默认背景</button>
		<button class="fx67ll-demo-btn" @click="showCustom">自定义背景</button>
		<fx67ll-loading-screen v-model="show" :type="type" :background="bg" :tip="tip" />
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				show: false,
				type: 'grid-pulse',
				bg: '',
				tip: '',
				timer: null
			}
		},
		methods: {
			open(duration) {
				if (this.timer) {
					clearTimeout(this.timer)
					this.timer = null
				}
				this.show = true
				this.timer = setTimeout(() => {
					this.show = false
					this.timer = null
				}, duration)
			},
			showDefault() {
				this.type = 'grid-pulse'
				this.bg = ''
				this.tip = '默认背景  ·  grid-pulse'
				this.open(4500)
			},
			showCustom() {
				this.type = 'triple-pulse'
				this.bg = '#20232a'
				this.tip = '自定义背景 #20232a  ·  triple-pulse'
				this.open(4500)
			}
		}
	};
</script>

<style>
.fx67ll-demo-btn {
	padding: 8px 14px;
	margin-right: 10px;
	border: 1px solid #42b983;
	border-radius: 6px;
	background: #fff;
	color: #42b983;
	cursor: pointer;
	font-size: 14px;
}
.fx67ll-demo-btn:hover {
	background: #42b983;
	color: #fff;
}
</style>
```
:::

---

## 颜色自定义

`color` 属性可自定义动效主体的颜色（hex 格式）。**仅对 Multiple 组 10 款生效**（其 object 为单色 `#FFF`）；Single 组 4 款为多色硬编码，`color` 对其无效。

::: demo 对 Multiple 组动效设置不同颜色。
```vue
<template>
	<div>
		<button class="fx67ll-demo-btn" @click="preview('grid-pulse', '#42b983', '绿色')">绿色九宫格</button>
		<button class="fx67ll-demo-btn" @click="preview('triple-pulse', '#ef8e81', '粉色')">粉色三圆</button>
		<button class="fx67ll-demo-btn" @click="preview('flip-cube', '#3ccad1', '青色')">青色翻转方块</button>
		<fx67ll-loading-screen v-model="show" :type="type" :color="color" :tip="tip" />
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				show: false,
				type: 'grid-pulse',
				color: '#42b983',
				tip: '',
				timer: null,
				// type -> 中文名映射，用于预览标题
				names: {
					'grid-pulse': '九宫格脉冲',
					'triple-pulse': '三圆缩放',
					'flip-cube': '3D 翻转方块'
				}
			}
		},
		methods: {
			preview(type, color, colorName) {
				if (this.timer) {
					clearTimeout(this.timer)
					this.timer = null
				}
				this.type = type
				this.color = color
				// 标题说明当前演示的颜色与动效：颜色名（色值）· 动效名
				this.tip = colorName + '（' + color + '）  ·  ' + (this.names[type] || type)
				this.show = true
				this.timer = setTimeout(() => {
					this.show = false
					this.timer = null
				}, 4500)
			}
		}
	};
</script>

<style>
.fx67ll-demo-btn {
	padding: 8px 14px;
	margin-right: 10px;
	border: 1px solid #42b983;
	border-radius: 6px;
	background: #fff;
	color: #42b983;
	cursor: pointer;
	font-size: 14px;
}
.fx67ll-demo-btn:hover {
	background: #42b983;
	color: #fff;
}
</style>
```
:::

> Single 组的 `robot-engine`（ROBOT 字样）、`solar-system`（九大行星）、`book-flip`（翻书）、`windows-flag`（四色方块）为多色固定设计，`color` 属性不生效，保持原作者配色。

---

## 提示文字

`tip` 属性可设置加载提示文字，`tipColor` 可设置文字颜色。

::: demo 配置提示文字与颜色。
```vue
<template>
	<div>
		<button class="fx67ll-demo-btn" @click="open()">显示带提示的加载</button>
		<fx67ll-loading-screen v-model="show" type="dot-matrix" tip="正在加载资源，请稍候" tip-color="#ffeb00" />
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				show: false,
				timer: null
			}
		},
		methods: {
			open() {
				if (this.timer) {
					clearTimeout(this.timer)
					this.timer = null
				}
				this.show = true
				this.timer = setTimeout(() => {
					this.show = false
					this.timer = null
				}, 4500)
			}
		}
	};
</script>

<style>
.fx67ll-demo-btn {
	padding: 8px 18px;
	border: 1px solid #42b983;
	border-radius: 6px;
	background: #fff;
	color: #42b983;
	cursor: pointer;
	font-size: 14px;
}
.fx67ll-demo-btn:hover {
	background: #42b983;
	color: #fff;
}
</style>
```
:::

---

## 延迟显示

`delay` 属性（单位：毫秒）可延迟显示 loading，避免短时间请求导致的闪烁。

::: demo 点击按钮模拟请求，500ms 内完成则不显示，超过 500ms 才显示。
```vue
<template>
	<div>
		<button class="fx67ll-demo-btn" @click="request(300)">快速请求（300ms，不显示）</button>
		<button class="fx67ll-demo-btn" @click="request(1500)">慢速请求（1500ms，显示）</button>
		<fx67ll-loading-screen v-model="loading" type="quad-scatter" :delay="500" tip="延迟 500ms 显示  ·  quad-scatter" />
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				loading: false,
				timer: null
			}
		},
		methods: {
			request(duration) {
				// 清除上一次未触发的定时器，避免连续点击时旧定时器提前关闭面板
				if (this.timer) {
					clearTimeout(this.timer)
					this.timer = null
				}
				this.loading = true
				this.timer = setTimeout(() => {
					this.loading = false
					this.timer = null
				}, duration)
			}
		}
	};
</script>

<style>
.fx67ll-demo-btn {
	padding: 8px 14px;
	margin-right: 10px;
	border: 1px solid #42b983;
	border-radius: 6px;
	background: #fff;
	color: #42b983;
	cursor: pointer;
	font-size: 14px;
}
.fx67ll-demo-btn:hover {
	background: #42b983;
	color: #fff;
}
</style>
```
:::

---

## v-model 控制

组件支持 `v-model` 双向绑定控制显隐。

::: demo 通过开关控制显隐。
```vue
<template>
	<div>
		<button class="fx67ll-demo-btn" @click="visible = !visible">{{ visible ? '隐藏' : '显示' }} loading</button>
		<fx67ll-loading-screen v-model="visible" type="solar-system" tip="v-model 控制显隐  ·  solar-system" />
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				visible: false
			}
		},
		methods: {}
	};
</script>

<style>
.fx67ll-demo-btn {
	padding: 8px 18px;
	border: 1px solid #42b983;
	border-radius: 6px;
	background: #fff;
	color: #42b983;
	cursor: pointer;
	font-size: 14px;
}
.fx67ll-demo-btn:hover {
	background: #42b983;
	color: #fff;
}
</style>
```
:::

---

## 快速上手

```Vue
<!-- 基础用法 -->
<fx67ll-loading-screen v-model="loading" type="grid-pulse" tip="加载中" />

<!-- 自定义背景与颜色（仅 Multiple 组生效） -->
<fx67ll-loading-screen v-model="loading" type="triple-pulse" background="#20232a" color="#42b983" />

<!-- 场景式动效（多色固定，color 无效） -->
<fx67ll-loading-screen v-model="loading" type="solar-system" tip="太阳系加载中" />

<!-- 延迟显示 -->
<fx67ll-loading-screen v-model="loading" type="quad-scatter" :delay="500" />

<!-- 隐藏关闭按钮 -->
<fx67ll-loading-screen v-model="loading" type="grid-pulse" :closeable="false" />

<!-- 监听关闭事件 -->
<fx67ll-loading-screen v-model="loading" type="solar-system" @close="handleClose" />
```

---

## 属性说明

|  参数  |  说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  type  |  loader 类型，决定渲染哪种场景式动效  |  String  |  见下方「所有类型」表格  |  grid-pulse  |
|  color  |  动效主体颜色，hex 格式。仅 Multiple 组 10 款生效  |  String  |  -  |  #ffffff  |
|  background  |  遮罩背景色，为空时使用各款默认背景色  |  String  |  -  |  ''（各款默认）  |
|  mask  |  是否显示遮罩层  |  Boolean  |  -  |  true  |
|  zIndex  |  全屏遮罩层级  |  String / Number  |  -  |  9999  |
|  tip  |  loading 下方提示文字  |  String  |  -  |  ''  |
|  tipColor  |  提示文字颜色  |  String  |  -  |  ''（默认白色）  |
|  delay  |  延迟显示时间（毫秒），0 表示立即显示  |  Number  |  -  |  0  |
|  value  |  v-model 绑定值，控制显隐  |  Boolean  |  -  |  true  |
|  closeable  |  是否显示右上角关闭按钮，点击可关闭 loading  |  Boolean  |  -  |  true  |
|  customClass  |  自定义类名透传  |  String  |  -  |  ''  |

### 事件

|  事件名称  |  说明  |  回调参数  |
|  :----:  |  :----:  |  :----:  |
|  close  |  点击右上角关闭按钮时触发  |  -  |

---

## 所有类型

组件共内置 14 款场景式动效，分为两组：

### Multiple 组（10 款，支持 color）

|  type  |  效果描述  |
|  :----:  |  :----:  |
|  flip-cube  |  3D 翻转方块，正方体沿 X、Y 轴轮流翻转  |
|  dot-matrix  |  八点旋转方阵，大方块四周八小方块依次平移，整体 45° 倾斜  |
|  quad-bounce  |  四方块循环，四方块向四方向弹出再回归，整体旋转  |
|  triple-pulse  |  三圆缩放，三个圆点错峰缩放至消失  |
|  dot-matrix-round  |  八点圆形方阵，与 dot-matrix 类似但方块改圆形  |
|  quad-scatter  |  四点旋转散开，四圆点旋转同时向外散开再聚拢  |
|  quad-horizontal  |  横向四点，横向四圆点旋转加散开  |
|  wave-run  |  波浪奔跑，五圆点从右向左跳跃式波浪  |
|  grid-pulse  |  九宫格脉冲，九圆点 3×3 方阵依次脉冲缩放  |
|  flying-bar  |  飞行方块，长方块在屏幕中央来回飞行并自转  |

### Single 组（4 款，多色固定，color 无效）

|  type  |  效果描述  |
|  :----:  |  :----:  |
|  robot-engine  |  五气缸活塞同步运动，拼出 ROBOT 字样  |
|  solar-system  |  太阳系九大行星各自旋转  |
|  book-flip  |  翻书效果，模拟一页页翻开  |
|  windows-flag  |  Windows 风格四色方块旋转加载  |

---

## 与内联加载组件的区别

| 对比项 | `fx67ll-loading`（内联） | `fx67ll-loading-screen`（场景式） |
|  :----:  |  :----:  |  :----:  |
|  动效数量  |  26 款  |  14 款  |
|  动效类型  |  经典小转圈  |  整页场景式画面  |
|  默认形态  |  内联（可全屏）  |  天生全屏遮罩  |
|  color 支持  |  全部支持  |  仅 Multiple 组 10 款  |
|  size 支持  |  支持  |  不支持  |
|  duration 支持  |  支持  |  不支持  |
|  适用场景  |  局部加载、按钮内、通用  |  页面级启动加载、首屏等待  |

---

## 样式定制

组件通过 CSS 自定义属性实现主题化：

|  CSS 变量  |  说明  |  默认值  |
|  :----:  |  :----:  |  :----:  |
|  --ls-color  |  动效主体颜色（仅 Multiple 组）  |  由 color 属性注入  |
|  --ls-bg  |  遮罩背景色  |  由 background 或各款默认注入  |
|  --ls-zindex  |  遮罩层级  |  由 zIndex 属性注入  |
|  --ls-tip-color  |  提示文字颜色  |  由 tipColor 属性注入  |

通过 `customClass` 可追加自定义类名实现深度定制。

---

## 常见问题

### Q: 为什么我设置的 `color` 对某些动效不生效？

`color` 仅对 Multiple 组 10 款（flip-cube~flying-bar）生效，这些款动效主体为单色。Single 组 4 款（robot-engine / solar-system / book-flip / windows-flag）为多色硬编码设计，每部分颜色不同，无法用单一 `color` 覆盖，保持原配色。

### Q: 场景式组件和内联组件该怎么选？

- 通用加载、局部加载、按钮内 loading、需要精细控制颜色/大小/速度 → 用 `fx67ll-loading`（内联）。
- 页面级启动加载、首屏等待、需要氛围感强的整页动效 → 用 `fx67ll-loading-screen`（场景式）。

### Q: 为什么场景式组件默认就是全屏？

场景式动效原本就是整页设计（如太阳系、翻书），尺寸较大且需要居中展示，天生适合全屏遮罩。因此本组件无需 `fullscreen` 属性，默认全屏。如需内联小尺寸场景动效，建议使用 `fx67ll-loading`（内联）。

### Q: `delay` 属性有什么用？

当请求很快完成时（如 300ms），loading 一闪而过会造成视觉闪烁。设置 `:delay="500"` 后，只有加载持续超过 500ms 才会显示 loading，短请求不会出现闪烁。

### Q: 如何关闭 loading？

两种方式：(1) 组件右上角默认自带关闭按钮，点击即可关闭（通过 `v-model` 同步父组件状态）；(2) 父组件直接将 `v-model` 绑定值设为 `false`。如不需关闭按钮，设置 `:closeable="false"`。点击关闭按钮时会触发 `close` 事件，可在父组件监听做后续处理。

---

## 版本说明

### 0.6.1

- 首版加载动画场景式组件，内置 **14 款** 整页场景式加载动效（Multiple 组 10 款 + Single 组 4 款）
- Multiple 组 10 款支持 `color` 颜色参数化，Single 组 4 款保持原配色
- 右上角自带关闭按钮（`closeable` 属性控制），点击触发 `close` 事件并同步 `v-model` 关闭
- 支持 `type` / `color` / `background` / `mask` / `zIndex` / `tip` / `tipColor` / `delay` / `v-model` / `closeable` / `customClass` 等属性

---

## 浏览器兼容性

所有动效基于 CSS3 `@keyframes` 与 `transform` 实现，兼容所有现代浏览器（Chrome / Firefox / Safari / Edge），不支持 IE9 及以下。部分动效使用 3D `perspective`，在低端设备上可能有性能差异。

---

## 感谢使用

我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issue`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗 Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***
