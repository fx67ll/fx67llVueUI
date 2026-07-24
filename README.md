# fx67ll Vue UI

> practice vue components like elementui & do sth different ez to use

![version](https://img.shields.io/badge/version-0.6.3-42b983)
![vue](https://img.shields.io/badge/Vue-2.6-42b983)
![license](https://img.shields.io/badge/license-MIT-blue)

一个个人维护的 Vue2 组件库，模仿 elementui 的使用方式，力求每个组件都能有一些不同的、独特的功能点。自用的同时锻炼制作复杂公共组件的能力。

[npm](https://www.npmjs.com/package/fx67ll-vue-ui) ｜ [组件官方文档](https://vue-ui.fx67ll.com) ｜ [GitHub](https://github.com/fx67ll/fx67llVueUI)

---

## ✨ 特性

- 🎨 **纯 CSS 优先**：形状、加载等组件均基于 CSS3 实现，无重度 JS 动画依赖
- 🧩 **一次注册，全局可用**：`Vue.use(fx67llVueUI)` 即可使用全部组件
- 🎯 **主题化能力**：通过 CSS 变量与 less 变量统一控制颜色、尺寸
- 📦 **零侵入**：组件样式自包含，无需额外引入样式文件

---

## 📦 安装

```bash
npm install fx67ll-vue-ui --save
```

---

## 🚀 使用步骤

1. 在 `main.js` 中注册组件

```JavaScript
import Vue from 'vue';
import fx67llVueUI from 'fx67ll-vue-ui';

Vue.use(fx67llVueUI);
```

2. 在 vue 页面中直接使用组件标签

```Vue
<fx67ll-loading type="ball-pulse" color="#42b983" />
<fx67ll-loading-screen v-model="loading" type="solar-system" tip="加载中" />
```

> 组件标签名即组件 `name` 的 kebab-case 形式，详见 [组件官方文档](https://vue-ui.fx67ll.com)。

---

## 🧱 组件概览（v0.6.3，共 20 个）

| 分类 | 组件 | 说明 |
| :---: | :--- | :--- |
| 🔄 加载 | `fx67ll-loading` | 26 款内联加载动效，支持颜色/大小/时长/全屏遮罩/v-model |
| 🔄 加载 | `fx67ll-loading-screen` | 14 款整页场景式加载动效，天生全屏，适合首屏等待 |
| 📊 加载 | `fx67ll-loading-progress` | 加载进度条，支持条纹/渐变/彩色三种样式（旧名 `loading-progress`） |
| 🎆 交互 | `fx67ll-nan-fireworks` | 放烟花组件，支持编程式控制与丰富配置 |
| 🖼️ 头像 | `fx67ll-random-mosaic-avatar` | 随机马赛克头像，支持点击刷新与定制 |
| ⏰ 时钟 | `fx67ll-binary-clock` | 二进制时钟，圆点颜色/尺寸/标签可自定义，随视口自适应 |
| 📄 页面 | `fx67ll-footer` | 网站页脚，可配置作者/年份/备案号 |
| 🔷 形状 | `fx67ll-shape-*` 系列（13 款） | 纯 CSS3 绘制的形状符号，可设颜色与大小（旧名 `shape-*`） |

---

## 📌 升级指南（0.6.2）

自 `0.6.2` 起，`loading-progress` 与 `shape-*` 系列组件统一加上 `fx67ll-` 前缀，与其它组件命名格式保持一致：

| 旧名称 | 新名称 |
| :---: | :---: |
| `loading-progress` | `fx67ll-loading-progress` |
| `shape-heart` | `fx67ll-shape-heart` |
| `shape-triangle` | `fx67ll-shape-triangle` |
| `shape-yinyang` | `fx67ll-shape-yinyang` |
| ... | （其余 10 款 `shape-*` 同理加 `fx67ll-` 前缀） |

> ✅ **向后兼容**：旧名称仍可正常使用，已做兼容注册，老版本可直接升级，旧代码无需修改。旧名称将在未来大版本中废弃。

---

## 📖 文档

完整的组件文档、属性说明与在线示例请访问：

👉 [https://vue-ui.fx67ll.com](https://vue-ui.fx67ll.com)

---

## ⚠️ 说明

- `0.2.2` 版本之前不支持一次注册使用多个组件，请使用 `0.2.2` 及以上版本
- 组件简介在 `0.3.0` 版本之后不再于 README 中逐个维护，请访问 [组件官方文档](https://vue-ui.fx67ll.com) 阅读使用详情
- 本组件库为个人项目，性能与覆盖度无法与主流组件库媲美，仅供参考与个人使用

---

## 📜 License

[MIT](./LICENSE)
