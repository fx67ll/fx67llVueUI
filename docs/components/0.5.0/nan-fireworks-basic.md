# 放烟花（精简版）

`fx67ll-nan-fireworks` 的精简文档，仅介绍最常用的基础用法与核心属性。如需完整的配置项、事件、插槽与样式定制，请参考 [放烟花（完整版）](./nan-fireworks.md)。

> 精简版面向快速上手场景，完整版面向深度定制场景。

---

## 基础示例

默认配置即可使用，点击发射按钮放烟花。

::: demo 默认配置，容器高度 444px，点击按钮发射烟花。
```vue
<template>
    <div class="fireworks-demo-box">
	    <fx67ll-nan-fireworks />
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
.fireworks-demo-box {
	height: 444px;
	border-radius: 8px;
	overflow: hidden;
}
</style>
```
:::

---

## 自动发射

开启 `isAutoLaunch` 后，组件会按 `autoLaunchInterval` 间隔自动发射烟花，无需手动点击。

::: demo 每 1500 毫秒自动发射 2 朵烟花。
```vue
<template>
    <div class="fireworks-demo-box">
	    <fx67ll-nan-fireworks
			:isAutoLaunch="true"
			:autoLaunchInterval="1500"
			:launchCount="2" />
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
.fireworks-demo-box {
	height: 444px;
	border-radius: 8px;
	overflow: hidden;
}
</style>
```
:::

---

## 快速上手

```Vue
<!-- 默认配置：点击按钮发射 -->
<fx67ll-nan-fireworks />

<!-- 自动发射 -->
<fx67ll-nan-fireworks
	:isAutoLaunch="true"
	:autoLaunchInterval="1500"
	:launchCount="2" />
```

---

## 核心属性

|  参数  |  说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  bgStyleConfig  |  容器背景配置  |  String / Object  |  -  |  rgba(0, 0, 0, 0.97)  |
|  bgPreventZoom  |  是否启用容器背景防缩放功能  |  Boolean  |  true / false  |  true  |
|  launchBtnConfig  |  发射按钮配置  |  Object  |  -  |  -  |
|  isShowLaunchBtn  |  是否显示发射按钮  |  Boolean  |  true / false  |  true  |
|  fireworksConfig  |  烟花配置  |  Object  |  -  |  -  |
|  isAutoLaunch  |  是否启用自动发射  |  Boolean  |  true / false  |  false  |
|  autoLaunchInterval  |  自动发射间隔（毫秒）  |  Number  |  -  |  2333  |
|  launchCount  |  每次自动发射的烟花数量  |  Number  |  -  |  1  |
|  isShowLaunchTip  |  是否显示发射提示  |  Boolean  |  true / false  |  false  |

> 以上为最常用属性，完整属性、事件、方法与插槽请参考 [放烟花（完整版）](./nan-fireworks.md)。

---

## 版本说明

> 0.5.0 版本以上支持放烟花组件，其他版本支持情况请自行查看版本历史

---

## 感谢使用

我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issue`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗 Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***
