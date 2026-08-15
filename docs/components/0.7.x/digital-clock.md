# 数字时钟

`fx67ll-digital-clock` 一个实用的数字时钟组件，同时提供模拟时钟（指针钟盘）与数字时间两种显示方式，支持任意 IANA 时区、12/24 小时制、多套配色主题与后台静默网络时间校正。

> 注意：移动端查看并非完美的显示效果，请尽量使用 PC 端查看。

---

## 基础示例

默认配置：北京时间、24 小时制、指针钟盘 + 数字时间 + 日期星期同时显示，秒针平滑扫动，默认 fx67ll 主题。

::: demo 默认配置下的数字时钟。
```vue
<template>
	<div class="clock-demo-box">
		<fx67ll-digital-clock :zoomSize="1" />
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

## 主题切换

通过 `theme` 切换七套内置主题（fx67ll / aurora / ocean / forest / sunset / violet / graphite），默认使用以 `#2ECC71` 为主色的 fx67ll 主题（时针直接采用主题主色，突出品牌绿），主题仅作用于时钟本体（钟盘、指针、文字），不会污染页面背景。

::: demo fx67ll 默认主题与 graphite 主题对比示例。
```vue
<template>
	<div class="clock-compare">
		<div class="clock-compare__item">
			<div class="clock-compare__label">fx67ll（品牌绿，默认）</div>
			<div class="clock-demo-box">
				<fx67ll-digital-clock theme="fx67ll" :zoomSize="0.72" />
			</div>
		</div>
		<div class="clock-compare__item">
			<div class="clock-compare__label">graphite（石墨黑）</div>
			<div class="clock-demo-box">
				<fx67ll-digital-clock theme="graphite" :zoomSize="0.72" />
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

## 显示内容组合

通过 `showAnalog` / `showDigital` / `showDate` 自由组合显示内容：仅数字时间、仅指针钟盘均可。

::: demo 左侧仅显示数字时间与日期，右侧仅显示指针钟盘。
```vue
<template>
	<div class="clock-compare">
		<div class="clock-compare__item">
			<div class="clock-compare__label">仅数字时间与日期</div>
			<div class="clock-demo-box">
				<fx67ll-digital-clock :showAnalog="false" :zoomSize="0.9" />
			</div>
		</div>
		<div class="clock-compare__item">
			<div class="clock-compare__label">仅指针钟盘</div>
			<div class="clock-demo-box">
				<fx67ll-digital-clock :showDigital="false" :showDate="false" :zoomSize="0.9" />
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

## 时区与小时制

通过 `timeZone` 指定任意 IANA 时区标识，`hour12` 切换 12 小时制（自动附带上午/下午标识）。

::: demo 伦敦时区 12 小时制示例。
```vue
<template>
	<div class="clock-demo-box">
		<fx67ll-digital-clock timeZone="Europe/London" :hour12="true" :showAnalog="false" :zoomSize="0.9" />
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

## 秒针样式与缩放尺寸

`smoothSeconds` 为 `false` 时秒针每秒跳格（跳秒风格），`zoomSize` 控制整体缩放，支持小数。

::: demo 跳秒风格 + 1.2 倍放大示例。
```vue
<template>
	<div class="clock-demo-box">
		<fx67ll-digital-clock :smoothSeconds="false" :zoomSize="1.2" />
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

## 自定义颜色

通过 `faceColor`（钟盘底色）、`hourHandColor` / `minuteHandColor` / `secondHandColor`（三根指针）、`textColor`（文字）自定义配色，十六进制颜色代码，留空则跟随主题。

::: demo 自定义深蓝配色示例。
```vue
<template>
	<div class="clock-demo-box">
		<fx67ll-digital-clock faceColor="#eef4fb" hourHandColor="#1e3a5f" minuteHandColor="#3b82f6" secondHandColor="#f59e0b" textColor="#1e3a5f" :zoomSize="0.85" />
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

### 安装注册

组件已包含在 `fx67ll-vue-ui` 中，安装组件库并全局注册后即可直接使用标签：

```JavaScript
import Vue from 'vue';
import fx67llVueUI from 'fx67ll-vue-ui';

Vue.use(fx67llVueUI);
```

### 常用用法速查

```Vue
<!-- 默认配置：北京时间、24 小时制、fx67ll 主题、指针钟盘 + 数字时间 + 日期 -->
<fx67ll-digital-clock />

<!-- 指定时区并切换 12 小时制（自动附带上午/下午标识） -->
<fx67ll-digital-clock timeZone="America/New_York" :hour12="true" />

<!-- 仅显示数字时间与日期 -->
<fx67ll-digital-clock :showAnalog="false" />

<!-- 仅显示指针钟盘（隐藏数字时间与日期星期） -->
<fx67ll-digital-clock :showDigital="false" :showDate="false" />

<!-- 切换主题 / 跳秒风格 / 放大显示 -->
<fx67ll-digital-clock theme="graphite" :smoothSeconds="false" :zoomSize="1.5" />

<!-- 自定义配色，留空的颜色项继续跟随主题 -->
<fx67ll-digital-clock faceColor="#eef4fb" secondHandColor="#f59e0b" textColor="#1e3a5f" />

<!-- 关闭后台网络时间同步（始终使用本地设备时间） -->
<fx67ll-digital-clock :syncEnabled="false" />

<!-- 自定义时间同步：指定同源接口地址 + 1 分钟重同步一次 -->
<fx67ll-digital-clock syncUrl="/api/time" :syncInterval="60000" />
```

### 完整示例：主题切换 + 事件监听

配合数据绑定可以动态切换主题，并通过 `tick` 事件在每秒获取时间信息：

```Vue
<template>
	<div class="clock-demo-box">
		<fx67ll-digital-clock
			:theme="currentTheme"
			:hour12="isHour12"
			:zoomSize="0.9"
			@tick="onTick"
			@time-sync="onTimeSync"
		></fx67ll-digital-clock>
	</div>
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				// 当前主题，可绑定按钮或下拉框动态切换
				currentTheme: 'fx67ll',
				// 是否 12 小时制
				isHour12: false
			};
		},
		methods: {
			// 每秒触发一次，返回 { hours, minutes, seconds, dateText, weekdayText }
			onTick(timeInfo) {
				console.log(timeInfo);
			},
			// 后台时间同步完成后静默触发，返回 { offset, corrected }
			onTimeSync(syncInfo) {
				console.log(syncInfo);
			}
		}
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

---

## 属性说明

|  参数  |  说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  timeZone  |  显示时区，IANA 时区标识  |  String  |  -  |  Asia/Shanghai  |
|  hour12  |  是否使用 12 小时制显示数字时间  |  Boolean  |  true / false  |  false  |
|  showAnalog  |  是否显示模拟时钟（指针钟盘）  |  Boolean  |  true / false  |  true  |
|  showDigital  |  是否显示数字时间  |  Boolean  |  true / false  |  true  |
|  showDate  |  是否显示日期与星期  |  Boolean  |  true / false  |  true  |
|  smoothSeconds  |  秒针是否平滑扫动，false 为每秒跳格  |  Boolean  |  true / false  |  true  |
|  zoomSize  |  时钟整体缩放尺寸，支持小数  |  Number  |  -  |  1  |
|  theme  |  时钟主题  |  String  |  fx67ll / aurora / ocean / forest / sunset / violet / graphite  |  fx67ll  |
|  faceColor  |  钟盘底色，十六进制，留空跟随主题  |  String  |  -  |  ''  |
|  hourHandColor  |  时针颜色，十六进制，留空跟随主题  |  String  |  -  |  ''  |
|  minuteHandColor  |  分针颜色，十六进制，留空跟随主题  |  String  |  -  |  ''  |
|  secondHandColor  |  秒针颜色，十六进制，留空跟随主题  |  String  |  -  |  ''  |
|  textColor  |  数字时间与日期文字颜色，十六进制，留空跟随主题  |  String  |  -  |  ''  |
|  syncEnabled  |  是否启用后台网络时间同步  |  Boolean  |  true / false  |  true  |
|  syncUrl  |  时间同步请求地址，留空请求当前站点，跨域受限时请配置同源接口  |  String  |  -  |  ''  |
|  syncInterval  |  网络时间重同步周期（毫秒）  |  Number  |  ≥ 30000  |  300000  |

---

## 事件说明

|  事件名  |  说明  |  回调参数  |
|  :----:  |  :----:  |  :----:  |
|  tick  |  每秒触发一次，返回当前时间信息  |  `{ hours, minutes, seconds, dateText, weekdayText }`  |
|  time-sync  |  后台时间同步完成后静默触发，返回同步结果  |  `{ offset, corrected }`（偏差毫秒数 / 是否执行了校正）  |

---

## 时间同步说明

组件遵循「本地时间优先」原则：

* 挂载后立即以本地设备时间开始渲染，**界面上没有任何加载或等待提示**；
* 后台通过 HTTP `Date` 响应头静默估算网络时间（服务器时间 + 半程往返耗时），仅在本地时间偏差超过 1 秒时才静默校正，1 秒以内视为噪音忽略；
* 周期性重同步（默认 5 分钟），页面从后台切回前台时立即重同步一次，修复标签页休眠期间累积的偏差；
* 渲染循环基于 `requestAnimationFrame` + `performance` 时间基准，不受 `setInterval` 漂移与后台标签页节流影响；
* 任何同步失败（网络错误、超时、跨域限制）均静默忽略，组件持续使用本地时间工作。

---

## 版本说明

> 0.7.0 版本新增数字时钟组件。其他版本支持情况请自行查看版本历史

---

## 感谢使用

我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issue`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗 Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***
