# fx67llVueUI
do sth like ElementUI & do sth different ez to use

[npm](https://www.npmjs.com/package/fx67ll-vue-ui "npm")

=================================================================================
#### 注意！！！   0.2.2版本之前不支持一次注册使用多个组件！！！
=================================================================================

### 使用步骤
1. `npm install fx67ll-vue-ui --save`
2. 在`main.js`中注册组件
```
import fx67llVueUI from 'fx67ll-vue-ui'
Vue.use(fx67llVueUI)
```
3. 在需要的地方直接使用
```
// 网站页脚插件
// fontColor：字体颜色，默认值：#bababa
// hoverColor：a标签悬浮颜色，默认值：#42b983
// authorName：网站作者名称，默认值：fx67ll
// homePage：网站作者主页，默认值：https://fx67ll.com
// startYear：网站开始运营年份，默认值：2018，支持字符串和数字，限制四位年份
// icpNumber：网站备案号，默认值：皖ICP备18017174号
<fx67ll-footer fontColor="#bababa" hoverColor="#42b983" authorName="fx67ll" homePage="https://fx67ll.com" startYear="2018" icpNumber="皖ICP备18017174号"></fx67ll-footer>


// 形状插件合集开始

// 通用公共属性
// shapeColor：符号的颜色，十六进制颜色代码
// shapeSize：符号的大小，支持数字，包括小数

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

// 鸡蛋形状
<shape-egg shapeColor="#000000" :shapeSize="1"></shape-egg>

// 吃豆人
<shape-pac-man shapeColor="#000000" :shapeSize="1"></shape-pac-man>

// 钻石形状
<shape-diamond shapeColor="#000000" :shapeSize="1"></shape-diamond>

// 钻石形状
// shapeColor：由于本符号必须由两个颜色组合，所以该参数废弃
// shapeColorYin：阴阳符号阴的颜色，十六进制颜色代码
// shapeColorYang：阴阳符号阳的颜色，十六进制颜色代码
<shape-yinyang shapeColorYin="#000000" shapeColorYang="#000000" :shapeSize="1"></shape-yinyang>

// 十字架形状
<shape-cross shapeColor="#000000" :shapeSize="1"></shape-cross>

// 月亮形状
<shape-moon shapeColor="#000000" :shapeSize="1"></shape-moon>

// 六角星形状
<shape-star-six shapeColor="#000000" :shapeSize="1"></shape-star-six>

// 聊天框
// talkText：聊天框文字  
// textColor：聊天框文字颜色，默认白色（#ffffff）
<shape-talk-bubble talkText="测试文字" textColor="#ffffff" shapeColor="#000000" :shapeSize="1"></shape-talk-bubble>

// 形状插件合集结束
```

## 0.2.16.20211206
* 完成网站页脚组件的封装，可以设置字体颜色，a标签悬浮颜色，网站作者名称，网站作者主页，网站开始运营年份，网站备案号  

## 0.x.x.20xxxxxx
* `下一个版本` 一键回顶组件
* `下一个版本` 右键菜单组件

## 0.2.15.20210624
* 完成纯CSS3绘制的***聊天框***组件组件的封装，可以设置***聊天框***组件的颜色和大小，以及传入聊天框宽度、简易的文字内容和文字颜色  
* **后期考虑**丰富组件并用正则验证传入的宽度字符串格式  

## 0.2.14.20210623
* 完成纯CSS3绘制的六角星形状组件的封装，可以设置六角星的颜色和大小  

## 0.2.13.20210622
* 完成纯CSS3绘制的月亮形状组件的封装，可以设置月亮的颜色和大小  

## 0.2.12.20210621
* 完成纯CSS3绘制的十字架形状组件的封装，可以设置十字架的颜色和大小  

## 0.2.11.20210615
* 完成纯CSS3绘制的***阴阳***组件的封装，可以设置***阴阳***的颜色和大小  

## 0.2.10.20210611
* 完成纯CSS3绘制的钻石形状组件的封装，可以设置钻石的颜色和大小  

## 0.2.9.202106010
* 完成纯CSS3绘制的***吃豆人***组件的封装，可以设置***吃豆人***的颜色和大小  

## 0.2.8.20210609
* 完成纯CSS3绘制的鸡蛋形状组件的封装，可以设置鸡蛋的颜色和大小  

## 0.2.7.20210608
* 完成纯CSS3绘制的***太空入侵者***组件的封装，可以设置***太空入侵者***的颜色和大小  

## 0.2.6.20210607
* 完成纯CSS3绘制的爱心符号组件的封装，可以设置爱心的颜色和大小  

## 0.2.5.20210603
* 涉及到其他依赖的控件还是考虑剔除出自己的组件库，VueUI只提供不依赖其他组件库的组件  
* 后续的话功能复杂且独立的组件单独提供，简单的组件继续在VueUI中整合  
* 完成纯CSS3绘制的三角形符号组件的封装，可以设置三角形的指向，颜色和大小  

## 0.2.4.20210531
* 综合考虑下，该控件整合自己写过的所有控件，暂不提供按需加载的功能  
* 不过某些比较有意思的控件仍然在npm上提供单独下载  

## 0.2.3.20210514
* 修复文档错误  

## 0.2.2.20210514
* 完成一次注册使用多个组件  

## 0.2.1.20210513
* 完成纯CSS3绘制的五角星符号组件的封装，可以设置无限符号的颜色和大小  

## 0.2.0.20210420
* 去除不必要的依赖，减少安装时间  
* 添加MIT的软件使用许可证  

## 0.1.0.20210420
* 完成纯CSS3绘制的无限符号组件的封装，可以设置无限符号的颜色以及大小  
* 测试单组件发布到npm上的全流程  

## 0.1.0.20210419
* 模仿Element的组件库做一个自己的Vue组件库  
* 主要是用于练习在npm上面发包  
* 以及锻炼自己制作那种去除掉任何业务逻辑的Vue公共组件的能力  
* 自己写的性能肯定没法和主流的组件库媲美，我对自己的要求是先模仿一些基础的功能，再力求每个组件上能有一些不同的独特的功能点  