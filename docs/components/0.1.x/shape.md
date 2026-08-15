# 形状组件一览

> 📌 **组件名称变更（0.6.2）**：形状系列组件统一加 `fx67ll-` 前缀，如 `shape-heart` 更名为 `fx67ll-shape-heart`。**旧名称（如 `<shape-heart>`）仍可使用**（已做兼容），老版本可直接升级，旧代码无需修改。

::: demo​ 如果你懒得找 **UI** 切图，可以试试这个`没什么卵用`的组件，O(∩_∩)O哈哈~
```vue
<template>
	<fx67ll-shape-infinity shapeColor="#000000" :shapeSize="1" />
	<fx67ll-shape-star-five shapeColor="#000000" :shapeSize="1" />
	<fx67ll-shape-triangle type="up" shapeColor="#000000" :shapeSize="1" />
	<fx67ll-shape-heart shapeColor="#000000" :shapeSize="1" />
	<fx67ll-shape-space-invader shapeColor="#000000" :shapeSize="1" />
	<fx67ll-shape-egg shapeColor="#000000" :shapeSize="1" />
	<fx67ll-shape-pac-man shapeColor="#000000" :shapeSize="1" />
	<fx67ll-shape-diamond shapeColor="#000000" :shapeSize="1" />
	<fx67ll-shape-yinyang shapeColorYin="#000000" shapeColorYang="#ffffff" :shapeSize="1" />
	<fx67ll-shape-cross shapeColor="#000000" :shapeSize="1" />
	<fx67ll-shape-moon shapeColor="#000000" :shapeSize="1" />
	<fx67ll-shape-star-six shapeColor="#000000" :shapeSize="1" />
	<fx67ll-shape-talk-bubble talkText="测试文字" textColor="#ffffff" shapeColor="#000000" :shapeSize="1" />
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
// 无限符号
<fx67ll-shape-infinity shapeColor="#000000" :shapeSize="1" />

// 五角星符号
<fx67ll-shape-star-five shapeColor="#000000" :shapeSize="1" />

// 三角形符号
<fx67ll-shape-triangle type="up" shapeColor="#000000" :shapeSize="1" />

// 爱心符号
<fx67ll-shape-heart shapeColor="#000000" :shapeSize="1" />

// 太空入侵者
<fx67ll-shape-space-invader shapeColor="#000000" :shapeSize="1" />

// 鸡蛋符号
<fx67ll-shape-egg shapeColor="#000000" :shapeSize="1" />

// 吃豆人
<fx67ll-shape-pac-man shapeColor="#000000" :shapeSize="1" />

// 钻石符号
<fx67ll-shape-diamond shapeColor="#000000" :shapeSize="1" />

// 阴阳符号
<fx67ll-shape-yinyang shapeColorYin="#000000" shapeColorYang="#ffffff" :shapeSize="1" />

// 十字架符号
<fx67ll-shape-cross shapeColor="#000000" :shapeSize="1" />

// 月亮符号
<fx67ll-shape-moon shapeColor="#000000" :shapeSize="1" />

// 六角星符号
<fx67ll-shape-star-six shapeColor="#000000" :shapeSize="1" />

// 聊天框
<fx67ll-shape-talk-bubble talkText="测试文字" textColor="#ffffff" shapeColor="#000000" :shapeSize="1" />
```

### 通用公共属性说明
|  参数   | 说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  shapeColor  |  符号的颜色，十六进制颜色代码  |  String  |  -  |  #000000  |
|  shapeSize  |  符号的大小，支持数字，包括小数  |  Number  |  -  |  1  |

### 三角形符号特殊属性说明
|  参数   | 说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  type  |  三角形指向  |  String  |  down/up/left/right  |  down  |

### 阴阳符号特殊属性说明
|  参数   | 说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  shapeColor  |  阴阳符号阴的颜色，十六进制颜色代码  |  String  |  -  |  #000000  |
|  shapeColorYin  |  阴阳符号阳的颜色，十六进制颜色代码  |  String  |  -  |  #ffffff  |

### 聊天框特殊属性说明
|  参数   | 说明  |  类型  |  可选值  |  默认值  |
|  :----:  |  :----:  |  :----:  |  :----:  |  :----:  |
|  talkText  |  聊天框文字  |  String  |  -  |  -  |
|  textColor  |  聊天框文字颜色  |  String  |  -  |  #ffffff  |

### 版本说明
> 0.2.15 版本以上支持全部形状组件，其他版本支持情况请自行查看版本历史  

### 感谢使用
我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎提交`issure`，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***
