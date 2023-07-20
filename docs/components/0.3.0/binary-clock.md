# 二进制时钟

::: demo​ 一个有意思的装饰用的时钟组件 (●ˇ∀ˇ●) ~ 注意！！！移动端查看并非完美的显示效果，请尽量使用PC端查看~  
```vue
<template>
	<fx67ll-binary-clock :isShowTime="true" :zoomSize="1" />
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {};
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
<fx67ll-binary-clock :isShowTime="true" :zoomSize="1" />
```

### 属性说明
|  参数   | 说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  isShowTime  |  是否显示十进制时间  |  Boolean  |  true/false  |  true  |
|  zoomSize  |  修改时钟缩放尺寸，复杂修改请直接重写样式表  |  Number  |  -  |  1  |

### 版本说明
> 0.3.7 版本以上支持二进制时钟组件，其他版本支持情况请自行查看版本历史  

### 感谢使用
我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issure`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***
