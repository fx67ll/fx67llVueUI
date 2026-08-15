# 网站页脚

`fx67ll-footer` 个人搭建的主页统一使用的页脚组件，会自动固定在引入页面的底部，适合作为整站统一的版权与备案信息展示。

---

## 基础示例

直接使用默认配置即可渲染一个标准页脚。

::: demo 默认配置下，字体颜色为灰色，悬浮色为主题绿色，作者名 fx67ll，备案号皖ICP备18017174号。
```vue
<template>
	<div class="footer-demo-box">
		<fx67ll-footer />
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
.footer-demo-box {
	position: relative;
	width: 100%;
	height: 120px;
	overflow: hidden;
	border: 1px dashed #e6e8ec;
	border-radius: 8px;
}
</style>
```
:::

> 说明：页脚组件默认 `position: absolute; bottom: 0`，需父容器具有相对定位与固定高度才能正确贴底展示，上方示例已用 `.footer-demo-box` 包裹。

---

## 自定义配置

所有外观与文案均可通过 props 自定义，下方对比默认配置与自定义配置的效果。

::: demo 左侧默认配置，右侧自定义字体颜色、悬浮色、作者名、起始年份与备案号。
```vue
<template>
	<div class="footer-compare">
		<div class="footer-compare__item">
			<div class="footer-compare__label">默认配置</div>
			<div class="footer-demo-box">
				<fx67ll-footer />
			</div>
		</div>
		<div class="footer-compare__item">
			<div class="footer-compare__label">自定义配置</div>
			<div class="footer-demo-box">
				<fx67ll-footer
					fontColor="#9b7ad5"
					hoverColor="#ef8e81"
					authorName="EzVueUI"
					homePage="https://fx67ll.com"
					startYear="2020"
					icpNumber="皖ICP备00000000号" />
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
.footer-compare {
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
}
.footer-compare__item {
	flex: 1;
	min-width: 280px;
}
.footer-compare__label {
	margin-bottom: 8px;
	font-size: 13px;
	color: #6b7280;
	text-align: center;
}
.footer-demo-box {
	position: relative;
	width: 100%;
	height: 120px;
	overflow: hidden;
	border: 1px dashed #e6e8ec;
	border-radius: 8px;
}
</style>
```
:::

---

## 快速上手

```Vue
<!-- 默认配置 -->
<fx67ll-footer />

<!-- 自定义配置 -->
<fx67ll-footer
	fontColor="#bababa"
	hoverColor="#42b983"
	zIndex="99999"
	authorName="fx67ll"
	homePage="https://fx67ll.com"
	startYear="2018"
	icpNumber="皖ICP备18017174号" />
```

---

## 属性说明

|  参数  |  说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  fontColor  |  字体颜色，十六进制颜色代码  |  String  |  -  |  #bababa  |
|  hoverColor  |  a 标签悬浮颜色，十六进制颜色代码  |  String  |  -  |  #42b983  |
|  zIndex  |  在页面中所有元素显示的优先级  |  String / Number  |  -  |  99999  |
|  authorName  |  网站作者名称  |  String  |  -  |  fx67ll  |
|  homePage  |  网站作者主页  |  String  |  -  |  https://fx67ll.com  |
|  startYear  |  网站开始运营年份，支持字符串和数字，数字仅限四位数年份  |  String / Number  |  -  |  2018  |
|  icpNumber  |  网站备案号  |  String  |  -  |  皖ICP备18017174号  |

---

## 版本说明

> 0.2.22 版本以上支持页脚组件，其他版本支持情况请自行查看版本历史

---

## 感谢使用

我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issue`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗 Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***
