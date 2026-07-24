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

## 缩放尺寸

通过 `zoomSize` 调整时钟整体缩放，支持小数（如 0.5 缩小、2 放大）。

::: demo 左侧 zoomSize 0.6，右侧 zoomSize 1.4，对比不同尺寸。
```vue
<template>
	<div class="clock-compare">
		<div class="clock-compare__item">
			<div class="clock-compare__label">zoomSize 0.6</div>
			<div class="clock-demo-box">
				<fx67ll-binary-clock :isShowTime="true" :zoomSize="0.6" />
			</div>
		</div>
		<div class="clock-compare__item">
			<div class="clock-compare__label">zoomSize 1.4</div>
			<div class="clock-demo-box">
				<fx67ll-binary-clock :isShowTime="true" :zoomSize="1.4" />
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

## 快速上手

```Vue
<!-- 默认配置：显示二进制点阵 + 十进制时间 -->
<fx67ll-binary-clock :isShowTime="true" :zoomSize="1" />

<!-- 仅显示二进制点阵 -->
<fx67ll-binary-clock :isShowTime="false" :zoomSize="1" />

<!-- 放大显示 -->
<fx67ll-binary-clock :isShowTime="true" :zoomSize="1.5" />
```

---

## 属性说明

|  参数  |  说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  isShowTime  |  是否显示十进制时间  |  Boolean  |  true / false  |  true  |
|  zoomSize  |  修改时钟缩放尺寸，复杂修改请直接重写样式表  |  Number  |  -  |  1  |

---

## 版本说明

> 0.3.7 版本以上支持二进制时钟组件，其他版本支持情况请自行查看版本历史

---

## 感谢使用

我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issue`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗 Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***
