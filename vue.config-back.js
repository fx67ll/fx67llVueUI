const path = require("path");
const fs = require('fs');

// 把目标路径按当前文件路径转成绝对路径
function resolve(dir) {
	return path.join(__dirname, dir)
}

// path是组件代码所在的文件夹名称
// 返回一个对象entries，key为每个组件文件夹的名称，值为每个组件文件夹中入口文件index.js的绝对路径
function getEntries(path) {
	// 获取到组件代码所在的文件夹目录下所有文件名称
	let files = fs.readdirSync(resolve(path));
	// 数组reduce()方法循环files，先将每个文件名（item）利用join(path, item)转成路径存到itemPath变量
	// 用fs.statSync(itemPath).isDirectory()对每个文件进行判断是不是文件夹
	// 如果是文件夹，先把itemPath和入口文件index.js拼接成一个地址，再转成绝对路径，将item作为key，赋值到返回对象上
	// 如果不是文件夹，直接把itemPath转成绝对路径，将item去除后缀作为key，赋值到返回对象上
	const entries = files.reduce((ret, item) => {
		const itemPath = join(path, item)
		const isDir = fs.statSync(itemPath).isDirectory();
		if (isDir) {
			ret[item] = resolve(join(itemPath, 'index.js'))
		} else {
			const [name] = item.split('.')
			ret[name] = resolve(`${itemPath}`)
		}
		return ret
	}, {})
	return entries
}

// 添加全局less文件
function addStyleResource(rule) {
	rule
		.use("style-resource")
		.loader("style-resources-loader")
		.options({
			// 这里暂时保留加载多个全局less的方式
			// patterns: [path.resolve(__dirname, "./src/assets/styles/mixin.less"), path.resolve(__dirname,
			// 	"./src/assets/styles/test.less")],
			patterns: [path.resolve(__dirname, "./src/assets/styles/mixin.less")],
		})
}

module.exports = {
	// 部署应用包时的基本 URL
	// 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/
	// 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
	// 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，记得修改路由模式为hash
	publicPath: './',
	// 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
	// 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)
	outputDir: 'lib',
	// 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
	// 注意： 该目录是相对于 outputDir
	assetsDir: 'static',
	// 指定生成的 index.html 的输出路径 (相对于 outputDir)，也可以是一个绝对路径
	indexPath: 'index.html',
	// 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建，并且生产环境中F12不会被看到源码
	productionSourceMap: false,
	// 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)，当作为一个库构建时，要将其设置为 false 免得用户自己导入 CSS
	// css: {
	// 	extract: false,
	// },
	// 在lib文件夹中建立style文件夹中，生成对应的css文件
	css: {
		sourceMap: true,
		extract: {
			filename: 'style/[name].css'
		}
	}
	// Webpack配置
	configureWebpack: {
		// 配置别名
		resolve: {
			alias: {
				'@': resolve('src'),
				'@a': resolve('src/assets'),
				'@v': resolve('src/views'),
				'@c': resolve('src/components')
			}
		},
		// 暴露默认导出配置
		output: {
			// 默认导出配置
			// libraryExport: 'default',
			// 配置每个组件打包后生成对应文件名称
			filename: '[name]/index.js',
			// 入口文件的返回值将分配给module.exports对象，使其组件库在webpack构建的环境下使用
			libraryTarget: 'commonjs2'
		},
		// 实现组件库的按需引入的前提是组件库是多入口文件页面打包的
		entry: {
			...getEntries('src/components'),
		}
	},
	chainWebpack: (config) => {
		const types = ["vue-modules", "vue", "normal-modules", "normal"];
		types.forEach((type) =>
			addStyleResource(config.module.rule("less").oneOf(type))
		);
		config.module
			.rule('js')
			.include
			.add('/src/components')
			.end();
		config.module
			.rule('fonts')
			.use('url-loader')
			.tap(option => {
				option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]';
				return option;
			});
		// 删除splitChunks，因为每个组件是独立打包，不需要抽离每个组件的公共js出来
		config.optimization.delete('splitChunks');
		// 删除copy，不要复制public文件夹内容到lib文件夹中
		config.plugins.delete('copy');
		// 删除html，只打包组件，不生成html页面
		config.plugins.delete('html');
		// 删除preload以及prefetch，因为不生成html页面，所以这两个也没用
		config.plugins.delete('preload');
		config.plugins.delete('prefetch');
		// 删除hmr，删除热更新
		config.plugins.delete('hmr');
		// 删除自动加上的入口App
		config.entryPoints.delete('app');
	},
	// 配置连接后台的代理问题
	devServer: {
		// host: '0.0.0.0',
		port: 1111,
		open: false,
		proxy: {
			[process.env.VUE_APP_BASE_API]: {
				target: `http://localhost:3000`,
				changeOrigin: true,
				pathRewrite: {
					['^' + process.env.VUE_APP_BASE_API]: ''
				}
			}
		},
		// disableHostCheck: true
	},
}
