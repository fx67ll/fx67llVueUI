module.exports = {
	theme: '@vuepress/theme-default',
	title: 'fx67ll Vue UI',
	description: "fx67ll 的 Vue UI 组件库",
	head: [
		// header里添加<link ref="" href=""/>
		[
			'link', {
				rel: 'icon',
				href: '/favicon.ico'
			}
		]
	],
	base: '/',
	port: '1888',
	dest: ".vuepress/dist",
	themeConfig: {
		// 左上角logo
		logo: 'https://test.fx67ll.com/fx67ll-img-collection/fx67ll.jpg',
		// 最后更新时间
		// 你可以通过 themeConfig.lastUpdated 选项来获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)， 同时它将以合适的日期格式显示在每一页的底部
		lastUpdated: 'Last Updated',
		nav: [{
				text: '首页',
				link: '/',
			}, {
				text: '快速上手',
				link: '/guide/quick-start',
			},
			{
				text: '组件',
				link: '/components/0.2.0/footer',
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
		sidebar: {
			'/guide/': [{
				title: "快速上手",
				path: '/guide/quick-start',
			}],
			'/components/': [{
				title: "组件",
				path: '/components/0.2.0/footer',
				// 设置展开全部子导航
				// collapsable: false,
				children: [{
					title: "页面组件",
					path: '/components/0.2.0/footer',
					// 设置展开全部子导航
					// collapsable: false,
					children: [{
							title: "页脚组件",
							path: '/components/0.2.0/footer',
						},
						{
							title: "进度条组件",
							path: '/components/0.2.0/progress',
						},
					]
				}, {
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
				}, ]
			}, ],
		},
	},
	head: [],
	// plugins: ['demo-container'],
	markdown: {},
}
