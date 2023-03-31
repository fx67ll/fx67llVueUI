# 形状组件

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

// 阴阳符号
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