# 随机马赛克头像

### 基础示例
::: demo​ 使用默认配置生成随机马赛克头像。这里是通过`iframe`嵌套个人站点来作为演示，使用代码请参考下方注释里的代码~  
```vue
<template>
	<iframe id="iframe" :src="iframeSrc" style="height: 230px" width="100%" frameborder="0"></iframe>

	<!-- 本页面的组件代码，直接全部使用默认配置 -->
	<!-- <fx67ll-random-mosaic-avatar /> -->
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				iframeSrc: 'https://three.fx67ll.com/fx67ll-vue-ui-avatar?showType=default',
			}
		},
		methods: {}
	};
</script>

<style>
</style>
```
:::

### 开启点击后重新生成，并返回头像Url
::: demo​ 开启点击后重新生成，并返回随机生成的马赛克头像Url。这里是通过`iframe`嵌套个人站点来作为演示，使用代码请参考下方注释里的代码~  
```vue
<template>
	<iframe id="iframe" :src="iframeSrc" style="height: 230px" width="100%" frameborder="0"></iframe>

	<!-- 本页面的组件代码，开启点击后重新生成，并返回头像Url -->
	<!-- <fx67ll-random-mosaic-avatar :isAllowRefresh="true" @avatarUrlChange="getAvatarUrl" /> -->
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				iframeSrc: 'https://three.fx67ll.com/fx67ll-vue-ui-avatar?showType=geturl',
			}
		},
		methods: {
			// 获取返回的头像Url
			// getAvatarUrl(url) {
			// 	console.log('avatarUrl: ', url);
			// },
		}
	};
</script>

<style>
</style>
```
:::

### 自定义配置
::: demo​ 自定义生成的随机马赛克头像配置。这里是通过`iframe`嵌套个人站点来作为演示，使用代码请参考下方注释里的代码~  
```vue
<template>
	<iframe id="iframe" :src="iframeSrc" style="height: 300px" width="100%" frameborder="0"></iframe>

	<!-- 本页面的组件代码，自定义配置 -->
	<!-- <fx67ll-random-mosaic-avatar 
			:avatarSize="300" 
			:isNeedRandom="false" 
			:avatarNum="404" 
			avatarType="svg"
			:avatarPadding="0.1"
			:avatarColor="[0, 0, 0, 255]" 
			:avatarBgColor="[255, 255, 255, 255]" /> -->
</template>

<script>
	export default {
		name: 'fx67llDemo',
		data() {
			return {
				iframeSrc: 'https://three.fx67ll.com/fx67ll-vue-ui-avatar?showType=custome',
			}
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
<fx67ll-random-mosaic-avatar />

// 自定义配置
<fx67ll-random-mosaic-avatar 
	:avatarSize="300" 
	:isNeedRandom="false" 
	:avatarNum="404" 
	avatarType="svg"
	:avatarPadding="0.1"
	:avatarColor="[0, 0, 0, 255]" 
	:avatarBgColor="[255, 255, 255, 255]" />
```

### 属性说明
|  参数				| 说明																						|  类型				|  可选值		|  默认值				|  备注										|
|  :----:			|  :----:																					|  :----:			|  :----:		|  :----:				|  :----:									|
|  avatarSize		|  生成的随机头像大小																		|  String or Number	|  -			|  230					|  -										|
|  isNeedRandom		|  是否使用随机生成																			|  Boolean			|  true/false	|  true					|  -										|
|  isAllowRefresh	|  是否允许点击后重新生成																	|  Boolean			|  true/false	|  false				|  定制属性，isNeedRandom为ture的时候生效	|
|  avatarNum		|  指定生成的随机头像编号																	|  String or Number	|  -			|  1023					|  定制属性，isNeedRandom为false的时候生效	|
|  avatarType		|  指定生成的随机头像类型																	|  String			|  png/svg		|  png					|  定制属性，isNeedRandom为false的时候生效	|
|  avatarPadding	|  指定生成的随机头像的内边距。必须是0-1之间两位以内小数，包括0和1							|  String or Number	|  -			|  0.23					|  定制属性，isNeedRandom为false的时候生效	|
|  avatarColor		|  指定生成的随机头像的颜色。必须是长度为4的数组，每个元素为0-255之间的整数，包括0和255		|  Array			|  -			|  [46, 204, 113, 255]	|  定制属性，isNeedRandom为false的时候生效	|
|  avatarBgColor	|  指定生成的随机头像的背景颜色。必须是长度为4的数组，每个元素为0-255之间的整数，包括0和255	|  Array			|  -			|  [236, 240, 241, 111]	|  定制属性，isNeedRandom为false的时候生效	|

### 事件说明
|  事件名称   | 说明  |  回调参数  |
|  :----:  |  :----:  |  :----:  |
|  avatarUrlChange  |  当随即头像Url变化时触发的事件  |  当前生成的马赛克头像的url  |


### 版本说明
> 0.4.0 版本以上支持随机马赛克头像组件，其他版本支持情况请自行查看版本历史  

### 感谢使用
我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issure`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***
