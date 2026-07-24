# 加载进度条

`fx67ll-loading-progress`（旧名 `loading-progress`，0.6.2 起更名，旧名仍可使用）全屏覆盖型资源加载进度条，支持条纹（striped）、渐变（gradient）、彩色（colorful）三种内置样式，加载完成后自动淡出隐藏。

> 📌 **组件名称变更（0.6.2）**：本组件由 `loading-progress` 更名为 `fx67ll-loading-progress`，统一组件命名格式。**旧名称 `<loading-progress>` 仍可使用**（已做兼容），老版本可直接升级，旧代码无需修改。

> 组件默认 `position: absolute` 全屏覆盖，需放在具有相对定位与固定高度的父容器内使用，否则会铺满整个页面。下方示例通过 `iframe` 嵌套个人站点演示。

## 基础示例
::: demo​ `fx67ll` 个人网页资源加载组件，需要配合整体项目来使用，会自动全屏显示正在加载资源的进度条。这里是通过`iframe`嵌套个人站点来作为演示，使用代码请参考下方注释里的代码~
```vue
<template>
	<div>
		<iframe id="iframe" :src="iframeSrc" style="height: 500px" width="100%" frameborder="0" />
		
		<!-- 本页面的组件代码，直接全部使用默认配置 -->
		<!-- <fx67ll-loading-progress
			:progressNum="0"
			:isFinished="false" /> -->
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				iframeSrc: 'https://three.fx67ll.com/fx67ll-vue-ui-progress?styleType=striped',
			};
		},
		methods: {}
	};
</script>

<style>
</style>
```
:::

## 启用内置样式`gradient`的示例
::: demo​  `styleType` 设为 `gradient`。这里是通过`iframe`嵌套个人站点来作为演示，使用代码请参考下方注释里的代码~
```vue
<template>
	<div>
		<iframe id="iframe" :src="iframeSrc" style="height: 500px" width="100%" frameborder="0"></iframe>
		
		<!-- 本页面的组件代码，自定义配置 -->
		<!-- <fx67ll-loading-progress 
			:progressNum="0"
			:isFinished="false"
			styleType="gradient" /> -->
	</div>
</template>

<script>
export default {
	name: 'fx67llDemo',
	data() {
		return {
			iframeSrc: 'https://three.fx67ll.com/fx67ll-vue-ui-progress?styleType=gradient',
		};
	},
	methods: {}
};
</script>

<style>
</style>
```
:::

## 启用内置样式`colorful`并修改部分配置的示例
::: demo​ `styleType` 设为 `colorful`，并修改背景色，隐藏提示文字。这里是通过`iframe`嵌套个人站点来作为演示，使用代码请参考下方注释里的代码~
```vue
<template>
	<div>
		<iframe id="iframe" :src="iframeSrc" style="height: 500px" width="100%" frameborder="0"></iframe>
		
		<!-- 本页面的组件代码，自定义配置 -->
		<!-- <fx67ll-loading-progress 
			:progressNum="0"
			:isFinished="false"
			bgColor="rgba(255, 255, 255, 1)"
			styleType="colorful"
			:isShowText="false" /> -->
	</div>
</template>

<script>
export default {
	name: 'fx67llDemo',
	data() {
		return {
			iframeSrc: 'https://three.fx67ll.com/fx67ll-vue-ui-progress?styleType=colorful&bgColor=rgba(255, 255, 255, 1)&isShowText=false',
		};
	},
	methods: {}
};
</script>

<style>
</style>
```
:::

## 快速上手
```Vue
// 默认配置
<fx67ll-loading-progress progressNum="0" :isFinished="false" />

// 自定义配置
<fx67ll-loading-progress 
	progressNum="0" 
	:isFinished="false" 
	styleType="striped" 
	zIndex="99999" 
	bgColor="#2c303a" 
	textColor="#bababa"
	:isShowText="true"
	stripedFirstColor="#fcbc51" 
	stripedSecondColor="#fca311" 
	gradientFirstColor="#F9BCCA" 
	gradientSecondColor="#aaffff" 
	animationTime="0.6" />
```

## 属性说明
|  参数  |  说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  progressNum  |  必填。当前进度百分比  |  String / Number  |  0-100  |  0  |
|  isFinished  |  必填。加载是否已完成，控制完成后自动隐藏  |  Boolean  |  true / false  |  false  |
|  styleType  |  进度条样式种类  |  String  |  striped / gradient / colorful  |  striped  |
|  zIndex  |  在页面中所有元素显示的优先级  |  String / Number  |  -  |  99999  |
|  bgColor  |  背景颜色  |  String  |  -  |  #2c303a  |
|  textColor  |  提示文字颜色  |  String  |  -  |  #bababa  |
|  isShowText  |  是否显示提示文字  |  Boolean  |  true / false  |  true  |
|  stripedFirstColor  |  striped 条纹颜色一  |  String  |  -  |  #fcbc51  |
|  stripedSecondColor  |  striped 条纹颜色二  |  String  |  -  |  #fca311  |
|  gradientFirstColor  |  gradient 渐变颜色一  |  String  |  -  |  #F9BCCA  |
|  gradientSecondColor  |  gradient 渐变颜色二  |  String  |  -  |  #aaffff  |
|  animationTime  |  单次动画时间（秒）  |  String / Number  |  -  |  0.6  |

## 版本说明
> 0.2.22 版本以上支持进度条组件，其他版本支持情况请自行查看版本历史  

## 感谢使用
我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issue`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗 Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***
