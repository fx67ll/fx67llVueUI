# 随机马赛克头像

`fx67ll-random-mosaic-avatar` 基于 `identicon.js` 与 `blueimp-md5` 生成随机马赛克头像，支持随机生成与定制参数两种模式，可点击刷新重新生成。下方示例通过 `iframe` 嵌套个人站点演示（组件依赖 Node 环境的 identicon.js，文档站以 iframe 演示）。

## 基础示例
::: demo​ 使用默认配置生成随机马赛克头像。这里是通过`iframe`嵌套个人站点来作为演示，使用代码请参考下方注释里的代码~  
```vue
<template>
	<iframe id="iframe" :src="iframeSrc" style="height: 235px" width="100%" frameborder="0"></iframe>

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

## 开启点击后重新生成，并返回头像Url
::: demo​ 开启点击后重新生成，并返回随机生成的马赛克头像Url。这里是通过`iframe`嵌套个人站点来作为演示，使用代码请参考下方注释里的代码~  
```vue
<template>
	<iframe id="iframe" :src="iframeSrc" style="height: 235px" width="100%" frameborder="0"></iframe>

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

## 自定义配置
::: demo​ 自定义生成的随机马赛克头像配置。这里是通过`iframe`嵌套个人站点来作为演示，使用代码请参考下方注释里的代码~  
```vue
<template>
	<iframe id="iframe" :src="iframeSrc" style="height: 305px" width="100%" frameborder="0"></iframe>

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

## 快速上手
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

## 属性说明
|  参数  |  说明  |  类型  |  可选值  |  默认值  |  备注  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  avatarSize  |  生成的随机头像大小  |  String / Number  |  -  |  230  |  -  |
|  isNeedRandom  |  是否使用随机生成  |  Boolean  |  true / false  |  true  |  -  |
|  isAllowRefresh  |  是否允许点击后重新生成  |  Boolean  |  true / false  |  false  |  仅 isNeedRandom 为 true 时生效  |
|  avatarNum  |  指定生成的随机头像编号  |  String / Number  |  -  |  1023  |  仅 isNeedRandom 为 false 时生效  |
|  avatarType  |  指定生成的随机头像类型  |  String  |  png / svg  |  png  |  仅 isNeedRandom 为 false 时生效  |
|  avatarPadding  |  头像内边距，0-1 之间两位以内小数  |  String / Number  |  -  |  0.23  |  仅 isNeedRandom 为 false 时生效  |
|  avatarColor  |  头像前景色，长度为 4 的数组，元素为 0-255 整数  |  Array  |  -  |  [46, 204, 113, 255]  |  仅 isNeedRandom 为 false 时生效  |
|  avatarBgColor  |  头像背景色，长度为 4 的数组，元素为 0-255 整数  |  Array  |  -  |  [236, 240, 241, 111]  |  仅 isNeedRandom 为 false 时生效  |

## 事件说明
|  事件名称  |  说明  |  回调参数  |
|  :----:  |  :----:  |  :----:  |
|  avatarUrlChange  |  头像 Url 变化时触发  |  当前生成的马赛克头像 url  |
|  avatarClick  |  点击头像时触发（需 isAllowRefresh 为 true）  |  当前头像 url  |

## 版本说明
> 0.4.0 版本以上支持随机马赛克头像组件，其他版本支持情况请自行查看版本历史  

## 感谢使用
我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issue`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***
