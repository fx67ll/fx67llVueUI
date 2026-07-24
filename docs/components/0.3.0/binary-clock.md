# 二进制时钟

`fx67ll-binary-clock` 一个有意思的装饰用时钟组件，以二进制点阵形式显示当前时间，可选显示十进制时间数字。

> 注意：移动端查看并非完美的显示效果，请尽量使用 PC 端查看。

---

## 基础示例

默认配置：显示二进制点阵 + 十进制时间，缩放尺寸为 1。

::: demo 默认配置下的二进制时钟。
```vue
<template>
	<div class="clock-demo-box">
		<fx67ll-binary-clock :isShowTime="true" :zoomSize="1" />
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
.clock-demo-box {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background: #f7f8fa;
	border-radius: 8px;
	overflow: auto;
}
</style>
```
:::

---

## 隐藏十进制时间

设置 `isShowTime` 为 `false` 可仅显示二进制点阵，隐藏下方的十进制时间数字。

::: demo 仅显示二进制点阵，隐藏十进制时间。
```vue
<template>
	<div class="clock-demo-box">
		<fx67ll-binary-clock :isShowTime="false" :zoomSize="1" />
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
.clock-demo-box {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background: #f7f8fa;
	border-radius: 8px;
	overflow: auto;
}
</style>
```
:::

---

## 缩放尺寸 - 缩小

通过 `zoomSize` 调整时钟整体缩放，支持小数。下方为缩小示例（zoomSize 0.6）。

::: demo zoomSize 0.6，时钟整体缩小。
```vue
<template>
	<div class="clock-demo-box">
		<fx67ll-binary-clock :isShowTime="true" :zoomSize="0.6" />
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
.clock-demo-box {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background: #f7f8fa;
	border-radius: 8px;
	overflow: auto;
}
</style>
```
:::

---

## 缩放尺寸 - 放大

下方为放大示例（zoomSize 1.4），时钟整体放大。

::: demo zoomSize 1.4，时钟整体放大。
```vue
<template>
	<div class="clock-demo-box">
		<fx67ll-binary-clock :isShowTime="true" :zoomSize="1.4" />
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
.clock-demo-box {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background: #f7f8fa;
	border-radius: 8px;
	overflow: auto;
}
</style>
```
:::

---

## 自定义颜色与圆点尺寸

通过 `dotColor`（亮起圆点）、`dotBgColor`（熄灭圆点）、`textColor`（时间文字）自定义配色，`dotSize` 控制圆点基础尺寸（实际随视口在 14~36px 间自适应）。

::: demo 左侧默认配色，右侧自定义紫粉配色 + 小圆点，界面宽度优先避免圆点重合。
```vue
<template>
	<div class="clock-compare">
		<div class="clock-compare__item">
			<div class="clock-compare__label">默认配色</div>
			<div class="clock-demo-box">
				<fx67ll-binary-clock :isShowTime="true" :zoomSize="1" />
			</div>
		</div>
		<div class="clock-compare__item">
			<div class="clock-compare__label">自定义配色 + 小圆点</div>
			<div class="clock-demo-box">
				<fx67ll-binary-clock :isShowTime="true" :zoomSize="1" dotColor="#9b7ad5" dotBgColor="#f3eefa" textColor="#9b7ad5" :dotSize="20" />
			</div>
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
.clock-compare {
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
}
.clock-compare__item {
	flex: 1;
	min-width: 260px;
}
.clock-compare__label {
	margin-bottom: 8px;
	font-size: 13px;
	color: #6b7280;
	text-align: center;
}
.clock-demo-box {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background: #f7f8fa;
	border-radius: 8px;
	overflow: auto;
}
</style>
```
:::

---

## 隐藏标签

设置 `showLabel` 为 `false` 可隐藏每行右侧的 hour/minute/second 文字标签，仅保留点阵。

::: demo 隐藏 hour/minute/second 标签。
```vue
<template>
	<div class="clock-demo-box">
		<fx67ll-binary-clock :isShowTime="true" :zoomSize="1" :showLabel="false" />
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
.clock-demo-box {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background: #f7f8fa;
	border-radius: 8px;
	overflow: auto;
}
</style>
```
:::

---

## 快速上手

```Vue
<!-- 默认配置：显示二进制点阵 + 十进制时间 -->
<fx67ll-binary-clock :isShowTime="true" :zoomSize="1" />

<!-- 仅显示二进制点阵 -->
<fx67ll-binary-clock :isShowTime="false" :zoomSize="1" />

<!-- 自定义配色与圆点尺寸 -->
<fx67ll-binary-clock dotColor="#9b7ad5" dotBgColor="#f3eefa" textColor="#9b7ad5" :dotSize="36" />

<!-- 隐藏 hour/minute/second 标签 -->
<fx67ll-binary-clock :showLabel="false" />

<!-- 放大显示 -->
<fx67ll-binary-clock :isShowTime="true" :zoomSize="1.5" />
```

---

## 属性说明

|  参数  |  说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  isShowTime  |  是否显示十进制时间  |  Boolean  |  true / false  |  true  |
|  zoomSize  |  时钟整体缩放尺寸，支持小数  |  Number  |  -  |  1  |
|  dotColor  |  亮起圆点（二进制 1）颜色，十六进制  |  String  |  -  |  #2ecc71  |
|  dotBgColor  |  熄灭圆点（二进制 0）颜色，十六进制  |  String  |  -  |  #ffffff  |
|  dotSize  |  圆点基础尺寸（px），实际随视口在 14~36px 间自适应  |  Number  |  8~60  |  30  |
|  textColor  |  十进制时间文字颜色，十六进制  |  String  |  -  |  #2ecc71  |
|  showLabel  |  是否显示 hour/minute/second 标签  |  Boolean  |  true / false  |  true  |

---

## 版本说明

> 0.3.7 版本以上支持二进制时钟组件；0.6.2 版本优化圆点渲染（伪元素方案，任意情况保持正圆）并新增 `dotColor` / `dotBgColor` / `dotSize` / `textColor` / `showLabel` 自定义参数，圆点尺寸随视口自适应；0.6.3 版本修复圆点方形框、光晕动态配色、白点轮廓优化。其他版本支持情况请自行查看版本历史

---

## 感谢使用

我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issue`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗 Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***
