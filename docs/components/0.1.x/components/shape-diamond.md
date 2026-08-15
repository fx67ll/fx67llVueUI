# 钻石符号

::: demo​ 如果你懒得找 **UI** 切图，可以试试这个`没什么卵用`的组件，O(∩_∩)O哈哈~
```vue
<template>
	<fx67ll-shape-diamond shapeColor="#000000" :shapeSize="1" />
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

### 颜色与尺寸对比

通过 `shapeColor` 与 `shapeSize` 自定义符号的颜色与大小，`shapeSize` 支持小数。

::: demo 左侧三组不同颜色，右侧三组不同尺寸。
```vue
<template>
	<div class="shape-compare">
		<div class="shape-compare__group">
			<div class="shape-compare__item"><fx67ll-shape-diamond shapeColor="#42b983" :shapeSize="1" /></div>
			<div class="shape-compare__item"><fx67ll-shape-diamond shapeColor="#ef8e81" :shapeSize="1" /></div>
			<div class="shape-compare__item"><fx67ll-shape-diamond shapeColor="#9b7ad5" :shapeSize="1" /></div>
		</div>
		<div class="shape-compare__group">
			<div class="shape-compare__item"><fx67ll-shape-diamond shapeColor="#000000" :shapeSize="0.6" /></div>
			<div class="shape-compare__item"><fx67ll-shape-diamond shapeColor="#000000" :shapeSize="1" /></div>
			<div class="shape-compare__item"><fx67ll-shape-diamond shapeColor="#000000" :shapeSize="1.6" /></div>
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
.shape-compare {
	display: flex;
	gap: 32px;
	flex-wrap: wrap;
	justify-content: center;
	padding: 24px;
	background: #f7f8fa;
	border-radius: 8px;
}
.shape-compare__group {
	display: flex;
	gap: 24px;
	align-items: center;
}
.shape-compare__item {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
```
:::

### 快速上手
```Vue
<fx67ll-shape-diamond shapeColor="#000000" :shapeSize="1" />
```

### 属性说明
|  参数   | 说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  shapeColor  |  符号的颜色，十六进制颜色代码  |  String  |  -  |  #000000  |
|  shapeSize  |  符号的大小，支持数字，包括小数  |  Number  |  -  |  1  |

### 感谢使用
我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issure`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***