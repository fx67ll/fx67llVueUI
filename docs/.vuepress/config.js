// 配置参考网站
// https://vuepress.vuejs.org/zh/
// https://calebman.github.io/vuepress-plugin-demo-container/zh/

module.exports = {
	// 网站皮肤主题
	theme: '@vuepress/theme-default',
	// 网站标题
	title: 'fx67ll Vue UI',
	// 网站描述
	description: "fx67ll 的 Vue UI 组件库",
	// html head 标签配置
	head: [
		// header里添加<link ref="" href=""/>
		[
			'link', {
				rel: 'icon',
				href: '/favicon.ico'
			}
		]
	],
	// 默认路径
	base: '/',
	// dev port
	port: '1888',
	// 打包之后文件目录  
	dest: ".vuepress/dist",
	// 主题详细配置
	themeConfig: {
		// 左上角logo
		logo: 'https://test.fx67ll.com/fx67ll-img-collection/fx67ll.jpg',
		// 最后更新时间
		// 你可以通过 themeConfig.lastUpdated 选项来获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)， 同时它将以合适的日期格式显示在每一页的底部
		lastUpdated: 'Last Updated',
		// 导航栏
		nav: [{
				text: '首页',
				link: '/',
			},
			{
				text: '快速上手',
				link: '/guide/quick-start',
			},
			{
				text: '组件',
				link: '/components/0.1.0/shape',
			},
			{
				text: 'Github',
				link: 'https://github.com/fx67ll/fx67llVueUI'
			},
			{
				text: '友情链接',
				ariaLabel: 'Language Menu',
				items: [{
					text: "fx67ll's github",
					link: 'https://github.com/fx67ll'
				}, {
					text: "fx67ll's npm",
					link: 'https://www.npmjs.com/search?q=fx67ll'
				}, {
					text: "个人技术博客",
					link: 'https://fx67ll.xyz'
				}, {
					text: '个人站点导航',
					link: 'https://nav.fx67ll.com'
				}, {
					text: 'Node.js 学习示例',
					link: 'https://node.fx67ll.com'
				}, {
					text: 'Three.js 作品合集',
					link: 'https://three.fx67ll.com'
				}, {
					text: 'uni-app 作品示例合集',
					link: 'https://uni.fx67ll.com'
				}, {
					text: '持续开发中......',
					link: 'https://map.fx67ll.com'
				}, ]
			}
		],
		// 显示所有页面的标题链接
		// 默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接  
		displayAllHeaders: true,
		// 侧边栏
		sidebar: {
			'/guide/': [{
					title: "快速上手",
					path: '/guide/quick-start',
				},
				{
					title: "历史版本",
					path: '/guide/history-version',
				}
			],
			'/components/': [{
				title: "组件",
				path: '',
				// 设置展开全部子导航
				// collapsable: false,
				children: [{
					title: "形状组件",
					path: '/components/0.1.0/shape',
					// 设置展开全部子导航
					// collapsable: false,
					children: [{
							title: "无限符号",
							path: "/components/0.1.0/components/shape-infinity"
						},
						{
							title: "五角星符号",
							path: "/components/0.1.0/components/shape-starfive"
						},
						{
							title: "三角形符号",
							path: "/components/0.1.0/components/shape-triangle"
						},
						{
							title: "爱心符号",
							path: "/components/0.1.0/components/shape-heart"
						},
						{
							title: "太空入侵者",
							path: "/components/0.1.0/components/shape-space-invader"
						},
						{
							title: "鸡蛋符号",
							path: "/components/0.1.0/components/shape-egg"
						},
						{
							title: "吃豆人",
							path: "/components/0.1.0/components/shape-pac-man"
						},
						{
							title: "钻石符号",
							path: "/components/0.1.0/components/shape-diamond"
						},
						{
							title: "阴阳符号",
							path: "/components/0.1.0/components/shape-yinyang"
						},
						{
							title: "十字架符号",
							path: "/components/0.1.0/components/shape-cross"
						},
						{
							title: "月亮符号",
							path: "/components/0.1.0/components/shape-moon"
						},
						{
							title: "六角星符号",
							path: "/components/0.1.0/components/shape-star-six"
						},
						{
							title: "聊天框",
							path: "/components/0.1.0/components/shape-talk-bubble"
						}
					],
				}, {
					title: "页面组件",
					path: '',
					// 设置展开全部子导航
					// collapsable: false,
					children: [{
							title: "网站页脚",
							path: '/components/0.2.0/footer',
						},
						{
							title: "加载进度条",
							path: '/components/0.2.0/progress',
						},
					]
				}, {
					title: "时钟组件",
					path: '',
					// 设置展开全部子导航
					// collapsable: false,
					children: [{
						title: "二进制时钟",
						path: '/components/0.3.0/binary-clock',
					}, ]
				}, {
					title: "头像组件",
					path: '',
					// 设置展开全部子导航
					// collapsable: false,
					children: [{
						title: "随机马赛克头像",
						path: '/components/0.4.0/mosaic-avatar',
					}, ]
				}, ]
			}, ],
		},
	},
	// 国际化，目前只支持中文
	// 后期需要修改配置可以查阅：https://vuepress.vuejs.org/zh/guide/i18n.html#%E7%AB%99%E7%82%B9%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE  
	locales: {
		// 键名是该语言所属的子路径
		// 作为特例，默认语言可以使用 '/' 作为其路径。
		'/': {
			lang: 'zh-CN',
			title: 'fx67ll Vue UI',
			description: 'fx67ll 的 Vue UI 组件库'
		},
		// '/en/': {
		// 	lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
		// 	title: 'fx67ll Vue UI',
		// 	description: 'fx67ll Vue UI'
		// }
	},
	// vuepress 插件，使用默认配置的简易写法
	// plugins: ['vuepress-plugin-demo-container'],
	// vuepress 插件
	plugins: {
		// 示例展示插件
		'vuepress-plugin-demo-container': {
			// 示例展示插件国际化
			locales: [{
					"lang": "zh-CN",
					"demo-block": {
						"hide-text": "隐藏代码",
						"show-text": "显示代码",
						"copy-text": "复制代码",
						"copy-success": "复制成功"
					}
				},
				// {
				// 	"lang": "en-US",
				// 	"demo-block": {
				// 		"hide-text": "Hide",
				// 		"show-text": "Expand",
				// 		"copy-text": "Copy",
				// 		"copy-success": "Successful"
				// 	}
				// }
			]
		},
		// 官方插件，页面跟随侧边栏滚动
		'@vuepress/active-header-links': {
			sidebarLinkSelector: '.sidebar-link',
			headerAnchorSelector: '.header-anchor'
		},
		// 官方插件，一键回顶
		'@vuepress/back-to-top': {},
		// // 官方插件，最后更新时间，此插件包含在默认主题，需要安装moment插件，暂时不用，直接放开的话打包会报错
		// '@vuepress/last-updated': {
		// 	// 默认情况下，本插件为每个页面生成一个 13 位的时间戳，你可以传入一个 transformer 将其转换为你想要的任何格式。
		// 	transformer: (timestamp, lang) => {
		// 		// 不要忘了安装 moment
		// 		const moment = require('moment')
		// 		moment.locale(lang)
		// 		return moment(timestamp).fromNow()
		// 	},
		// 	// 如果你在多语言模式下运行，你还可以使用第二个参数 lang 为不同语言生成时间字符串。
		// 	// 你也可以传入一个对象作为选项，以自定义时间戳的输出格式。详细信息请参阅 Date.prototype.toLocaleString() (opens new window)的选项参数。
		// 	// dateOptions: {
		// 	// 	hour12: false
		// 	// }
		// },
		// 官方插件，进度条
		'@vuepress/nprogress': {},
		// 官方插件，搜索框，此插件包含在默认主题，这里修改配置主要是为了增加搜索数量
		'@vuepress/search': {
			searchMaxSuggestions: 10
		},
		// 后期如果需要图片预览功能，可以用这个官方插件
		// https://vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html#%E4%BD%BF%E7%94%A8
	}
}