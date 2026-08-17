# 快速上手

`fx67ll-vue-ui` 是一个基于 `Vue 2` 的个人组件库，模仿 `elementui` 的使用方式，力求每个组件都能有一些不同的、独特的功能点。本文介绍如何在项目中安装、注册并使用组件。

---

## 环境要求

|  依赖  |  版本要求  |  说明  |
|  :----:  |  :----:  |  :----  |
|  Vue  |  2.6.x  |  仅支持 `Vue 2`，暂不支持 `Vue 3`  |
|  Node.js  |  10+  |  仅构建工具链需要，浏览器运行不依赖  |
|  浏览器  |  现代浏览器  |  支持 `CSS 变量` 与 `requestAnimationFrame` 的主流浏览器即可  |

---

## 安装

推荐使用 `npm` 安装：

```bash
npm install fx67ll-vue-ui --save
```

也可以使用其他包管理器：

```bash
yarn add fx67ll-vue-ui
pnpm add fx67ll-vue-ui
```

---

## 全局注册

在项目的 `main.js` 中注册组件库，一次注册，全局可用：

```JavaScript
import Vue from 'vue';
import fx67llVueUI from 'fx67ll-vue-ui';

Vue.use(fx67llVueUI);
```

> 注意：组件库样式已自包含（`less` + `CSS 变量`），注册后**无需额外引入任何样式文件**。

> 说明：目前组件库以整体 `UMD` 包形式发布，暂不支持按需引入与 `tree-shaking`；如对体积有严格要求，可参考源码目录结构（`src/components` 下每个组件自包含）单独拷贝所需组件源码使用。

---

## 基础使用

注册完成后，在任意 `vue` 页面中直接使用组件标签即可：

```Vue
<template>
	<div class="demo-box">
		<!-- 数字时钟：默认北京时间、fx67ll 主题 -->
		<fx67ll-digital-clock :zoomSize="0.8" />

		<!-- 二进制时钟：以二进制点阵显示时间 -->
		<fx67ll-binary-clock :isShowTime="true" />

		<!-- 内联加载动画 -->
		<fx67ll-loading type="ball-pulse" color="#42b983" />

		<!-- 场景式加载动画：v-model 控制显隐 -->
		<fx67ll-loading-screen v-model="loading" type="solar-system" tip="加载中" />

		<!-- 网站页脚：可配置作者/起始年份/备案号 -->
		<fx67ll-footer fontColor="#9aa7b3"></fx67ll-footer>
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				loading: true
			};
		}
	};
</script>
```

---

## 组件标签名规则

组件标签名为组件 `name` 的 `kebab-case`（短横线）形式，统一以 `fx67ll-` 为前缀：

|  组件 name  |  页面标签  |
|  :----:  |  :----:  |
|  fx67llDigitalClock  |  `<fx67ll-digital-clock>`  |
|  fx67llBinaryClock  |  `<fx67ll-binary-clock>`  |
|  fx67llLoading  |  `<fx67ll-loading>`  |
|  fx67llFooter  |  `<fx67ll-footer>`  |
|  ...  |  其余组件同理  |

> `0.6.2` 起 `loading-progress` 与 `shape-*` 系列组件统一加上 `fx67ll-` 前缀，旧名称仍做兼容注册，老代码无需修改即可升级，详见[历史版本](/guide/history-version.md)。

---

## 下一步

* 浏览全部组件与在线示例，请访问[组件](/components/0.7.x/digital-clock)文档，并通过左侧导航切换分类
* 了解各版本变更内容，请查看[历史版本](/guide/history-version.md)
* 使用中遇到问题或发现错误，欢迎提交 `issue` 反馈：[GitHub Issues](https://github.com/fx67ll/fx67llVueUI/issues)
