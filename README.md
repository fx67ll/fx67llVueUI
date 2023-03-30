# fx67llVueUI
practice vue components like elementui & do sth different ez to use

[npm](https://www.npmjs.com/package/fx67ll-vue-ui "npm")

===========================================================================
#### 注意！！！   0.2.2版本之前不支持一次注册使用多个组件！！！
===========================================================================


### 使用步骤
1. `npm install fx67ll-vue-ui --save`
2. 在`main.js`中注册组件

```JavaScript
import fx67llVueUI from 'fx67ll-vue-ui'
Vue.use(fx67llVueUI)
```

3. 在vue页面中导入使用


### 组件简介
1. 网站页脚组件

```Vue
属性 fontColor：字体颜色，默认值：#bababa
属性 hoverColor：a标签悬浮颜色，默认值：#42b983
属性 zIndex: z-index，默认值：99999
属性 authorName：网站作者名称，默认值：fx67ll
属性 homePage：网站作者主页，默认值：https://fx67ll.com
属性 startYear：网站开始运营年份，默认值：2018，支持字符串和数字，限制四位年份
属性 ipNumber：网站备案号，默认值：皖ICP备18017174号

<fx67ll-footer fontColor="#bababa" hoverColor="#42b983" zIndex="99999" authorName="fx67ll" homePage="https://fx67ll.com" startYear="2018" icpNumber="皖ICP备18017174号"></fx67ll-footer>
```

2.  加载进度条组件

```Vue
属性 progressNum：当前进度百分比，默认值：0
属性 isFinished：加载是否已完成，默认值：false，可选值：false/true
属性 styleType：进度条样式种类，默认值：striped，可选值：striped/gradient/colorful
属性 zIndex：z-index，默认值：99999
属性 bgColor：背景颜色，默认值：#2c303a
属性 textColor：提示文字颜色，默认值：#bababa
属性 stripedFirstColor：条纹颜色一，默认值：#fcbc51
属性 stripedSecondColor：条纹颜色二，默认值：#fca311
属性 gradientFirstColor：渐变颜色一，默认值：#F9BCCA
属性 gradientSecondColor：渐变颜色二，默认值：#aaffff
属性 animationTime：单次动画时间，默认值：0.6

<loading-progress progressNum="0" :isFinished="false" styleType="striped" zIndex="99999" bgColor="#2c303a" textColor="#bababa" 
stripedFirstColor="#fcbc51" stripedSecondColor="#fca311" gradientFirstColor="#F9BCCA" gradientSecondColor="#aaffff" animationTime="0.6"></loading-progress>
```

3. 形状组件合集

```Vue
// 通用公共属性
属性 shapeColor：符号的颜色，十六进制颜色代码
属性 shapeSize：符号的大小，支持数字，包括小数

// 无限符号
<shape-infinity shapeColor="#000000" :shapeSize="1"></shape-infinity>

// 五角星符号
<shape-starfive shapeColor="#000000" :shapeSize="1"></shape-starfive>

// 三角形符号
// type：三角形指向，默认值：down，可选值：down/up/left/right
<shape-triangle type="up" shapeColor="#000000" :shapeSize="1"></shape-triangle>

// 爱心符号
<shape-heart shapeColor="#000000" :shapeSize="1"></shape-heart>

// 太空入侵者
<shape-space-invader shapeColor="#000000" :shapeSize="1"></shape-space-invader>

// 鸡蛋符号
<shape-egg shapeColor="#000000" :shapeSize="1"></shape-egg>

// 吃豆人
<shape-pac-man shapeColor="#000000" :shapeSize="1"></shape-pac-man>

// 钻石符号
<shape-diamond shapeColor="#000000" :shapeSize="1"></shape-diamond>

// 钻石符号
// shapeColor：由于本符号必须由两个颜色组合，所以该参数废弃
// shapeColorYin：阴阳符号阴的颜色，十六进制颜色代码
// shapeColorYang：阴阳符号阳的颜色，十六进制颜色代码
<shape-yinyang shapeColorYin="#000000" shapeColorYang="#000000" :shapeSize="1"></shape-yinyang>

// 十字架符号
<shape-cross shapeColor="#000000" :shapeSize="1"></shape-cross>

// 月亮符号
<shape-moon shapeColor="#000000" :shapeSize="1"></shape-moon>

// 六角星符号
<shape-star-six shapeColor="#000000" :shapeSize="1"></shape-star-six>

// 聊天框
// talkText：聊天框文字  
// textColor：聊天框文字颜色，默认白色（#ffffff）
<shape-talk-bubble talkText="测试文字" textColor="#ffffff" shapeColor="#000000" :shapeSize="1"></shape-talk-bubble>
```

我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎在评论区讨论指正，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llVueUI)，为我点一颗Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***


## 0.x.x.20xxxxxx
* 使用`VuePress`添加doc文档，并部署在线文档演示  
* 进度条组件继续丰富，需要添加如果需要多个资源加载的功能，还要考虑定制化加载文案  
	+ [很惊艳的设计](http://www.htmleaf.com/Demo/20141013171.html)  
	+ [无限时钟加载](https://www.html5tricks.com/5-cool-css3-loading-animation.html)  
	+ [动画加载](https://www.html5tricks.com/pure-css3-candle-animation.html)  
* 时钟组件继续丰富
	+ `FilpClock`和`BinaryClock`添加到组件库中  
	+ 或者考虑下`FilpClock`添加到fx67llClock库中就行了？
* 按钮组件添加
	+ [拟物风格](https://www.html5tricks.com/css3-neumorphic-elements.html)，其中的时钟可以加到上面的时钟组件库  
	+ [模拟开关](https://www.html5tricks.com/pure-css3-red-switch-button.html)  
	+ [hove动效菜单按钮](http://www.htmleaf.com/html5/html5donghua/2014100438.html)  
* 思考下有什么卵用的插件
	+ [解锁面板，有什么界面需要解锁配置吗？](https://www.html5tricks.com/html5-password-animation.html)  
	+ [canvas下雨](https://www.html5tricks.com/html5-canvas-rain.html)  
	+ [磁带播放器，可以模拟一个音乐播放器](https://www.html5tricks.com/html5-cassette-player.html)  
	+ [消息提示框](http://www.htmleaf.com/html5/html5donghua/20141016210.html)  
	+ [问卷调查插件](http://www.htmleaf.com/html5/html5muban/20141016202.html)  
	+ [文章详情查看插件](http://www.htmleaf.com/jQuery/Layout-Interface/20141221952.html)  
	+ [平滑动画库，查看有没有vue版本](http://www.htmleaf.com/Demo/201501271285.html)  
	+ [模拟物理作用力和重力效应的js插件库](http://www.htmleaf.com/jQuery/Layout-Interface/201506142030.html)  
	+ [右键插件](http://www.htmleaf.com/jQuery/Menu-Navigation/201709254757.html)  
	+ [全屏滚动插件](http://www.htmleaf.com/jQuery/Layout-Interface/201812055442.html)  
	+ [页面滚动触发插件](http://www.htmleaf.com/jQuery/Layout-Interface/201607073698.html)  
	+ [页面切换动效插件](http://www.htmleaf.com/jQuery/Layout-Interface/pageSwitch.html)  
	+ [非常丝滑的全屏滚动插件](http://www.htmleaf.com/jQuery/Layout-Interface/201506132027.html)  

## 0.2.22.20211208
* 修复21版本包提交失败问题，`0.2.21`版本为废弃版本  
* 修复加载进度条组件百分百之后隐藏异常的问题  
* 删除不必要中文字体包文件  

## 0.2.20.20211207
* 修复加载进度条组件当前进度百分比为零会验证参数异常的问题  

## 0.2.19.20211207
* 修复页脚组件网站作者主页字段验证错误问题  
* 修复加载进度条组件加载完成后不隐藏加载页面的问题  

## 0.2.18.20211207
* 修复16/17版本包提交失败问题，`0.2.16`和`0.2.17`版本均为废弃版本，请在`0.2.18`版本中使用上述两个新组件  
* 完成网站页脚组件的封装，可以设置字体颜色、a标签悬浮颜色、z-index、网站作者名称、网站作者主页、网站开始运营年份、网站备案号  
* 完成加载进度条组件的封装，可以设置当前进度百分比、加载是否已完成、进度条样式种类、z-index、背景颜色、提示文字颜色、条纹颜色一、条纹颜色二、渐变颜色一、渐变颜色二、单次动画时间  
* 添加less中动画的封装，现已支持在less中直接使用animation，定义keyframe的方式稍稍有点区别，示例如下：  
```Less
.keyframes(all, animationName, {
		from {
			width: 0%;
		}

		to {
			width: 100%;
		}
	}
);
```

## 0.2.15.20210624
* 完成纯CSS3绘制的 ***聊天框*** 组件组件的封装，可以设置 ***聊天框*** 组件的颜色和大小，以及传入聊天框宽度、简易的文字内容和文字颜色  
* **后期考虑** 丰富 ***聊天框*** 组件的用途，并用考虑如何用正则验证传入的宽度格式  
* **后续版本** 一键回顶组件  
* **远期版本** 右键菜单组件  

## 0.2.14.20210623
* 完成纯CSS3绘制的 ***六角星符号*** 组件的封装，可以设置 ***六角星*** 的颜色和大小  

## 0.2.13.20210622
* 完成纯CSS3绘制的 ***月亮符号*** 组件的封装，可以设置 ***月亮*** 的颜色和大小  

## 0.2.12.20210621
* 完成纯CSS3绘制的 ***十字架符号*** 组件的封装，可以设置 ***十字架*** 的颜色和大小  

## 0.2.11.20210615
* 完成纯CSS3绘制的 ***阴阳*** 组件的封装，可以设置 ***阴阳*** 的颜色和大小  

## 0.2.10.20210611
* 完成纯CSS3绘制的 ***钻石符号*** 组件的封装，可以设置 ***钻石*** 的颜色和大小  

## 0.2.9.202106010
* 完成纯CSS3绘制的 ***吃豆人*** 组件的封装，可以设置 ***吃豆人*** 的颜色和大小  

## 0.2.8.20210609
* 完成纯CSS3绘制的 ***鸡蛋符号*** 组件的封装，可以设置 ***鸡蛋符号*** 的颜色和大小  

## 0.2.7.20210608
* 完成纯CSS3绘制的 ***太空入侵者*** 组件的封装，可以设置 ***太空入侵者*** 的颜色和大小  

## 0.2.6.20210607
* 完成纯CSS3绘制的 ***爱心符号*** 组件的封装，可以设置 ***爱心*** 的颜色和大小  

## 0.2.5.20210603
* 后续的话功能过于复杂，且能够独立发挥较大作用的的组件单独提供，简单的或者个人使用的特殊组件继续在本组件库中整合  
* 完成纯CSS3绘制的 ***三角形符号*** 组件的封装，可以设置 ***三角形*** 的指向，颜色和大小  

## 0.2.4.20210531
* 综合考虑下，该控件整合自己写过的所有控件，暂不提供按需加载的功能  
* 不过某些比较有意思的控件仍然在npm上提供单独下载  

## 0.2.3.20210514
* 修复文档错误  

## 0.2.2.20210514
* 完成一次注册使用多个组件  
* `0.2.2`版本之前不支持一次注册使用多个组件  

## 0.2.1.20210513
* 完成纯CSS3绘制的 ***五角星符号*** 组件的封装，可以设置 ***五角星*** 的颜色和大小  

## 0.2.0.20210420
* 去除不必要的依赖，减少安装时间  
* 添加MIT的软件使用许可证  

## 0.1.1.20210420
* 完成纯CSS3绘制的 ***无限符号*** 组件的封装，可以设置 ***无限*** 的颜色以及大小  
* 测试单组件发布到npm上的全流程  

## 0.1.0.20210419
* 模仿elementui的组件库做一个自己的vue组件库  
* 同时用于练习在npm上面发包  
* 锻炼自己制作复杂公共vue组件的能力，为个人项目提供方便  
* 自己写的性能肯定没法和主流的组件库媲美，我对自己的要求是先模仿一些基础的功能，再力求每个组件上能有一些不同的独特的功能点  
