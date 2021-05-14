# fx67llVueUI
do sth like ElementUI & do sth different

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
// shapeColor，符号的颜色，十六进制颜色代码
// shapeSize，符号的大小，支持数字，包括小数

// 无限符号
<shape-infinity shapeColor="#000000" :shapeSize="1"></shape-infinity>

// 五角星符号
<shape-starfive shapeColor="#000000" :shapeSize="1"></shape-starfive>
```

## 0.x.x.202105xx
* `下一个版本`思考下拉树的组件

## 0.2.3.20210514
* 修复文档错误

## 0.2.2.20210514
* 完成一次注册使用多个组件

## 0.2.1.20210513
* 完成纯CSS3绘制的五角星符合组件的封装，可以设置无限符号的颜色和大小

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