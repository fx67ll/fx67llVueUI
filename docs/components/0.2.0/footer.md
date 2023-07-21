# 网站页脚

::: demo​ `fx67ll` 个人搭建的主页统一使用的页脚组件，需要配合整体项目来使用，会自动固定在引入页面的底部。这里是通过`iframe`嵌套个人站点来作为演示，使用代码请参考下方注释里的代码~
```vue
<template>
	<iframe id="iframe" :src="iframeSrc" style="height: 80px" width="100%" frameborder="0" />
	
	<!-- 本页面的组件代码，直接全部使用默认配置 -->
	<!-- <fx67ll-footer /> -->
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				iframeSrc: 'https://three.fx67ll.com/fx67ll-vue-ui-footer'
			};
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
// 默认配置
<fx67ll-footer />

// 自定义配置
<fx67ll-footer 
	fontColor="#bababa" 
	hoverColor="#42b983" 
	zIndex="99999" 
	authorName="fx67ll" 
	homePage="https://fx67ll.com" 
	startYear="2018" 
	icpNumber="皖ICP备18017174号" />
```

### 属性说明
|  参数   | 说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  fontColor  |  字体颜色，十六进制颜色代码  |  String  |  -  |  #bababa  |
|  hoverColor  |  a标签悬浮颜色，十六进制颜色代码  |  String  |  -  |  #42b983  |
|  zIndex  |  在页面中所有元素显示的优先级  |  Number  |  -  |  99999  |
|  authorName  |  网站作者名称  |  String  |  -  |  fx67ll  |
|  homePage  |  网站作者主页  |  String  |  -  |  https://fx67ll.com  |
|  startYear  |  网站开始运营年份，支持字符串和数字，数字仅限四位数年份  |  String or Number  |  -  |  2018  |
|  ipNumber  |  网站备案号  |  String  |  -  |  皖ICP备18017174号  |

### 版本说明
> 0.2.22 版本以上支持页脚组件，其他版本支持情况请自行查看版本历史  

### 感谢使用
我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issure`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***