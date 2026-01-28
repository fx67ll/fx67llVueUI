# 放烟花

::: demo​ 大家一起来放烟花吧 (*^▽^*)  
```vue
<template>
    <div :style="{height: '444px'}">
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
</style>
```
:::

### 快速上手
```Vue
<fx67ll-nan-fireworks />
```

### 属性说明
|  参数   | 说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  bgStyleConfig  |  容器背景配置  |  String/Object  |  -  |  rgba(0, 0, 0, 0.97)  |
|  bgPreventZoom  |  是否启用容器背景防缩放功能  |  Boolean  |  true/false  |  true  |
|  launchBtnConfig  |  发射按钮配置  |  Object  |  -  |  -  |
|  isShowLaunchBtn  |  是否显示发射按钮  |  Boolean  |  true/false  |  true  |
|  fireworksConfig  |  烟花配置  |  Object  |  -  |  -  |
|  isAutoLaunch  |  是否启用自动发射  |  Boolean  |  true/false  |  false  |
|  autoLaunchInterval  |  自动发射间隔(毫秒)  |  Number  |  -  |  2333  |
|  launchCount  |  每次自动发射的烟花数量  |  Number  |  -  |  1  |
|  isShowLaunchTip  |  是否显示发射提示  |  Boolean  |  true/false  |  false  |

### 版本说明
> 0.5.0 版本以上支持放烟花组件，其他版本支持情况请自行查看版本历史  

### 感谢使用
我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issure`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***
