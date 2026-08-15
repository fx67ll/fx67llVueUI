# 加载动画

`fx67ll-loading` 是一个内置 **26 款** 纯 CSS 加载动效的组件，通过统一的 `type` 属性切换动效，并支持颜色、大小、动画时长、全屏遮罩、提示文字、延迟显示、`v-model` 显隐控制等丰富的配置。

> 所有动效均为纯 CSS 实现，无任何 JS 动画依赖，性能良好且可轻松定制。

---

## 基础示例

最简单的用法，通过 `type` 选择动效，`color` 设置颜色。

::: demo 默认类型为 `ball-pulse`，颜色默认为主题绿色 `#42b983`。
```vue
<template>
	<div style="display:flex;align-items:center;justify-content:center;height:120px;background:#f7f8fa;border-radius:8px;">
		<fx67ll-loading type="ball-pulse" color="#42b983" />
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {}
		},
		methods: {}
	};
</script>

<style>
</style>
```
:::

---

## 所有类型一览

下方网格展示了全部 26 款加载动效，鼠标悬浮卡片可查看 `type` 名称。点击卡片可切换深浅背景以查看不同颜色下的效果。

::: demo 将全部 26 款动效以卡片网格形式展示，方便快速预览和选择合适的类型。
```vue
<template>
	<div class="loading-gallery">
		<div
			v-for="item in loaderList"
			:key="item.type"
			class="loading-gallery__card"
			:class="{ 'loading-gallery__card--dark': item.dark }"
			@click="toggleCard(item)"
		>
			<div class="loading-gallery__preview">
				<fx67ll-loading :type="item.type" :color="item.dark ? '#ffffff' : '#42b983'" />
			</div>
			<div class="loading-gallery__name">{{ item.type }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				loaderList: [
					{ type: 'ball-climbing-dot', dark: false },
					{ type: 'ball-clip-rotate', dark: false },
					{ type: 'ball-fall', dark: false },
					{ type: 'ball-newton-cradle', dark: false },
					{ type: 'ball-pulse', dark: false },
					{ type: 'ball-running-dots', dark: false },
					{ type: 'ball-scale-pulse', dark: false },
					{ type: 'ball-scale', dark: false },
					{ type: 'ball-spin-clockwise', dark: false },
					{ type: 'ball-spin-rotate', dark: false },
					{ type: 'ball-spin', dark: false },
					{ type: 'line-scale', dark: false },
					{ type: 'pacman', dark: false },
					{ type: 'square-jelly-box', dark: false },
					{ type: 'square-loader', dark: false },
					{ type: 'timer', dark: false },
					{ type: 'circle', dark: false },
					{ type: 'circle-side', dark: false },
					{ type: 'arrow-circle', dark: false },
					{ type: 'ball-circle', dark: false },
					{ type: 'rectangle', dark: false },
					{ type: 'heart', dark: false },
					{ type: 'ball-rotate', dark: false },
					{ type: 'ball-pulse-double', dark: false },
					{ type: 'jumping', dark: false },
					{ type: 'satellite', dark: false }
				]
			}
		},
		methods: {
			toggleCard(item) {
				item.dark = !item.dark
			}
		}
	};
</script>

<style>
.loading-gallery {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
	gap: 16px;
	margin-top: 16px;
}
.loading-gallery__card {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 12px 12px;
	background: #f7f8fa;
	border: 1px solid #e6e8ec;
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.25s ease;
}
.loading-gallery__card:hover {
	transform: translateY(-4px);
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
	border-color: #42b983;
}
.loading-gallery__card--dark {
	background: #2c303a;
	border-color: #3a3f4b;
}
.loading-gallery__preview {
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.loading-gallery__name {
	margin-top: 14px;
	font-size: 13px;
	color: #1a1d24;
	font-family: monospace;
}
.loading-gallery__card--dark .loading-gallery__name {
	color: #e2e8f0;
}
.loading-gallery__tag {
	margin-top: 6px;
	padding: 2px 8px;
	font-size: 11px;
	border-radius: 10px;
}
.loading-gallery__tag--la {
	background: #fff7ed;
	color: #c2410c;
}
.loading-gallery__tag--bt {
	background: #eef2ff;
	color: #4338ca;
}
</style>
```
:::

> 说明：`ball-pulse`（三球依次脉冲）与 `ball-pulse-double`（两球交替脉冲）视觉效果不同，分别对应不同的实现，命名上以 `-double` 后缀区分。`ball-scale` 为单圆放大淡出动效。

---

## 大小调节

`size` 属性支持四档预设 `sm`/`md`/`lg`/`xl`，也支持直接传入数字倍数（如 `1.5` 表示 1.5 倍）。

::: demo 四档预设大小对比，预设档位通过修饰类精确控制每个子元素尺寸。
```vue
<template>
	<div class="loading-size-row">
		<div class="loading-size-item">
			<fx67ll-loading type="ball-pulse" color="#42b983" size="sm" />
			<span>sm</span>
		</div>
		<div class="loading-size-item">
			<fx67ll-loading type="ball-pulse" color="#42b983" size="md" />
			<span>md</span>
		</div>
		<div class="loading-size-item">
			<fx67ll-loading type="ball-pulse" color="#42b983" size="lg" />
			<span>lg</span>
		</div>
		<div class="loading-size-item">
			<fx67ll-loading type="ball-pulse" color="#42b983" size="xl" />
			<span>xl</span>
		</div>
		<div class="loading-size-item">
			<fx67ll-loading type="circle" color="#42b983" :size="1.5" />
			<span>1.5</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {}
		},
		methods: {}
	};
</script>

<style>
.loading-size-row {
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	align-items: center;
	justify-content: center;
	padding: 30px 0;
	background: #f7f8fa;
	border-radius: 8px;
}
.loading-size-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
}
.loading-size-item span {
	font-size: 12px;
	color: #6b7280;
	font-family: monospace;
}
</style>
```
:::

---

## 颜色自定义

`color` 属性接收十六进制颜色值（3 位或 6 位），所有 26 款动效均支持动态换色。

::: demo 不同颜色展示，任意 hex 颜色均可。
```vue
<template>
	<div class="loading-color-row">
		<fx67ll-loading type="pacman" color="#f6d860" size="lg" />
		<fx67ll-loading type="ball-spin" color="#3ccad1" size="lg" />
		<fx67ll-loading type="heart" color="#ef8e81" size="lg" />
		<fx67ll-loading type="line-scale" color="#9b7ad5" size="lg" />
		<fx67ll-loading type="ball-newton-cradle" color="#fd9372" size="lg" />
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {}
		},
		methods: {}
	};
</script>

<style>
.loading-color-row {
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
	align-items: center;
	justify-content: center;
	padding: 40px 0;
	background: #f7f8fa;
	border-radius: 8px;
}
</style>
```
:::

---

## 动画速度

`duration` 属性（单位：秒）可覆盖各动效的默认时长，数值越小动画越快。不传时使用各款默认时长。

::: demo 同一动效不同时长对比。
```vue
<template>
	<div class="loading-duration-row">
		<div class="loading-duration-item">
			<fx67ll-loading type="ball-pulse" color="#42b983" :duration="0.5" />
			<span>0.5s（快）</span>
		</div>
		<div class="loading-duration-item">
			<fx67ll-loading type="ball-pulse" color="#42b983" />
			<span>默认</span>
		</div>
		<div class="loading-duration-item">
			<fx67ll-loading type="ball-pulse" color="#42b983" :duration="2" />
			<span>2s（慢）</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {}
		},
		methods: {}
	};
</script>

<style>
.loading-duration-row {
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
	align-items: center;
	justify-content: center;
	padding: 30px 0;
	background: #f7f8fa;
	border-radius: 8px;
}
.loading-duration-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 14px;
}
.loading-duration-item span {
	font-size: 12px;
	color: #6b7280;
}
</style>
```
:::

---

## 全屏加载

设置 `fullscreen` 开启全屏遮罩模式，常用于页面级或请求级加载。可配合 `background`（遮罩背景色）、`mask`（是否显示半透明遮罩）、`tip`（提示文字）、`zIndex`（层级）使用。

::: demo 点击按钮触发全屏加载，3 秒后自动关闭。使用 `v-model` 控制显隐。
```vue
<template>
	<div>
		<button class="loading-demo-btn" @click="open()">显示全屏加载</button>

		<fx67ll-loading
			v-model="showFullscreen"
			fullscreen
			type="ball-spin"
			color="#42b983"
			background="#20232a"
			tip="正在加载，请稍候"
			:z-index="9999"
		/>
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				showFullscreen: false,
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
				this.showFullscreen = true
				// 3 秒后自动关闭
				this.timer = setTimeout(() => {
					this.showFullscreen = false
					this.timer = null
				}, 3000)
			}
		}
	};
</script>

<style>
.loading-demo-btn {
	padding: 8px 18px;
	border: 1px solid #42b983;
	border-radius: 6px;
	background: #fff;
	color: #42b983;
	cursor: pointer;
	font-size: 14px;
}
.loading-demo-btn:hover {
	background: #42b983;
	color: #fff;
}
</style>
```
:::

---

## 延迟显示

`delay` 属性（单位：毫秒）可延迟显示 loading，避免短时间请求导致的闪烁。设为 `0`（默认）则立即显示。

::: demo 点击按钮模拟请求，500ms 内完成则不显示 loading，超过 500ms 才显示。
```vue
<template>
	<div>
		<button class="loading-demo-btn" @click="startRequest(300)">快速请求（300ms，不显示）</button>
		<button class="loading-demo-btn" @click="startRequest(1500)">慢速请求（1500ms，显示）</button>

		<fx67ll-loading
			v-model="loading"
			fullscreen
			type="ball-clip-rotate"
			color="#42b983"
			:delay="500"
			tip="加载中"
		/>
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
			startRequest(duration) {
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
.loading-demo-btn {
	padding: 8px 14px;
	margin-right: 10px;
	border: 1px solid #42b983;
	border-radius: 6px;
	background: #fff;
	color: #42b983;
	cursor: pointer;
	font-size: 14px;
}
.loading-demo-btn:hover {
	background: #42b983;
	color: #fff;
}
</style>
```
:::

---

## v-model 控制

组件支持 `v-model` 双向绑定控制显隐，适用于局部加载场景。

::: demo 通过开关控制局部 loading 的显示与隐藏。
```vue
<template>
	<div>
		<button class="loading-demo-btn" @click="visible = !visible">{{ visible ? '隐藏' : '显示' }} loading</button>
		<div class="loading-local-box">
			<fx67ll-loading v-model="visible" type="ball-spin-clockwise" color="#42b983" tip="加载中" />
			<span v-if="!visible">这里可以放任意需要加载的内容区域</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				visible: true
			}
		},
		methods: {}
	};
</script>

<style>
.loading-local-box {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 120px;
	margin-top: 16px;
	background: #f7f8fa;
	border-radius: 8px;
	color: #6b7280;
}
</style>
```
:::

---

## 快速上手

```Vue
<!-- 基础用法 -->
<fx67ll-loading type="ball-pulse" color="#42b983" />

<!-- 指定大小 -->
<fx67ll-loading type="pacman" color="#f6d860" size="lg" />

<!-- 全屏加载 -->
<fx67ll-loading v-model="loading" fullscreen type="ball-spin" tip="加载中" background="#20232a" />

<!-- 延迟显示 -->
<fx67ll-loading v-model="loading" fullscreen :delay="500" type="ball-clip-rotate" />
```

---

## 属性说明

|  参数  |  说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  type  |  loader 类型，决定渲染哪种动效  |  String  |  见下方「所有类型」表格  |  ball-pulse  |
|  color  |  loader 颜色，十六进制颜色代码  |  String  |  -  |  #42b983  |
|  size  |  loader 大小，支持四档预设或数字倍数  |  String / Number  |  sm / md / lg / xl 或数字  |  md  |
|  duration  |  单次动画时长（秒），不传使用各款默认  |  Number  |  -  |  null  |
|  fullscreen  |  是否全屏遮罩模式  |  Boolean  |  -  |  false  |
|  background  |  全屏遮罩背景色，仅 fullscreen 生效  |  String  |  -  |  ''（默认半透明遮罩）  |
|  mask  |  全屏时是否显示半透明遮罩层  |  Boolean  |  -  |  true  |
|  zIndex  |  全屏遮罩层级  |  String / Number  |  -  |  9999  |
|  tip  |  loading 下方提示文字  |  String  |  -  |  ''  |
|  tipColor  |  提示文字颜色，为空时跟随 color  |  String  |  -  |  ''  |
|  delay  |  延迟显示时间（毫秒），0 表示立即显示  |  Number  |  -  |  0  |
|  value  |  v-model 绑定值，控制显隐  |  Boolean  |  -  |  true  |
|  customClass  |  自定义类名透传  |  String  |  -  |  ''  |

---

## 所有类型

组件共内置 26 款动效，完整 `type` 列表如下：

|  type  |  效果描述  |
|  :----:  |  :----:  |
|  ball-climbing-dot  |  小球沿阶梯向上攀爬  |
|  ball-clip-rotate  |  半圆环不断旋转  |
|  ball-fall  |  三个小球依次坠落  |
|  ball-newton-cradle  |  牛顿摆，两端球轮流摆动  |
|  ball-pulse  |  三个圆球依次脉冲缩放  |
|  ball-running-dots  |  一串小点循环奔跑  |
|  ball-scale-pulse  |  两圆同心放大缩小涟漪  |
|  ball-scale  |  单圆放大并淡出  |
|  ball-spin-clockwise  |  八点环阵顺时针闪烁  |
|  ball-spin-rotate  |  两球绕中心旋转配合缩放  |
|  ball-spin  |  八点环阵依次淡入淡出（iOS 风）  |
|  line-scale  |  五条竖线按节奏缩放（音频条）  |
|  pacman  |  吃豆人造型，边吃豆边追逐  |
|  square-jelly-box  |  方块翻滚弹跳带阴影联动  |
|  square-loader  |  方框旋转并被内部填充  |
|  timer  |  钟表样式，时针分针转动  |
|  circle  |  圆环单段缺口持续旋转  |
|  circle-side  |  半透明圆环加一段高亮  |
|  arrow-circle  |  圆环两端箭头反向旋转  |
|  ball-circle  |  两圆球交替沿四角移动  |
|  rectangle  |  三根条形依次跳起（音柱）  |
|  heart  |  心形放大缩小  |
|  ball-rotate  |  三圆球绕中心旋转并缩放  |
|  ball-pulse-double  |  左右两圆球交替脉冲  |
|  jumping  |  两方块跳起翻转（3D 透视）  |
|  satellite  |  卫星围绕中心月球旋转  |

---

## 样式定制

组件通过 CSS 自定义属性实现主题化，可在父级覆盖这些变量进行定制：

|  CSS 变量  |  说明  |  默认值  |
|  :----:  |  :----:  |  :----:  |
|  --loader-color  |  loader 颜色  |  由 color 属性注入  |
|  --loader-scale  |  缩放倍数（数字型 size）  |  由 size 属性注入  |
|  --loader-duration  |  动画时长覆盖  |  各款默认  |
|  --loader-bg  |  全屏遮罩背景色  |  由 background 属性注入  |
|  --loader-zindex  |  全屏遮罩层级  |  由 zIndex 属性注入  |
|  --loader-tip-color  |  提示文字颜色  |  跟随 color  |

通过 `customClass` 可以为组件追加自定义类名，结合上述变量可实现深度定制：

```Vue
<fx67ll-loading type="ball-pulse" color="#42b983" custom-class="my-loading" />
```

```css
.my-loading {
	/* 覆盖缩放 */
	--loader-scale: 1.2;
}
```

> 部分动效的大小通过修饰类精确控制每个子元素的宽高与间距，与 `--loader-scale` 变量相互独立；另一部分动效则统一通过 `--loader-scale` 整体缩放。

---

## 常见问题

### Q: 为什么不同 `type` 设置相同 `size` 时视觉效果略有差异？

不同动效的尺寸控制方式不同：部分动效使用修饰类精确调整每个子元素的宽高和间距，另一部分则通过 `transform: scale()` 整体缩放。两种方式都能正常工作，视觉上略有差异属正常现象。如需完全统一的缩放表现，可传入数字型 `size`（如 `:size="1.5"`），此时统一走 `transform: scale()`。

### Q: 全屏加载为什么没有遮罩背景？

请检查 `mask` 属性是否被设为 `false`（默认 `true`）。若设置了 `background` 属性，则会使用该颜色作为遮罩背景并覆盖默认的半透明遮罩。

### Q: `delay` 属性有什么用？

当请求很快完成时（如 300ms），loading 一闪而过会造成视觉闪烁。设置 `delay="500"` 后，只有加载持续超过 500ms 才会显示 loading，短请求不会出现闪烁。

### Q: 如何在局部容器内显示 loading？

不开启 `fullscreen`，将 `<fx67ll-loading>` 放入一个 `position: relative` 的父容器即可作为局部 loading 使用。配合 `v-model` 控制显隐。

---

## 版本说明

### 0.6.0

- 首版加载动画组件，内置 **26 款** 纯 CSS 内联加载动效
- 支持 `type` / `color` / `size` / `duration` / `fullscreen` / `background` / `mask` / `tip` / `tipColor` / `delay` / `v-model` / `customClass` 等属性

---

## 浏览器兼容性

所有动效基于 CSS3 `@keyframes` 与 `transform` 实现，兼容所有现代浏览器（Chrome / Firefox / Safari / Edge），不支持 IE9 及以下。

---

## 感谢使用

我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issue`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗 Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***
