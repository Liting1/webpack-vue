// 公用模块 (生产环境及开发环境都需要)

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // vue-loader 插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: { // webpack入口文件
		app: './src/main.js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.styl(us)?$/,
			use: ['style-loader', 'css-loader', 'stylus-loader'],
			include: [/src/]
		}, {
			test: /\.js$/,
			use:[{
				loader: 'babel-loader',
				options: {
					presets: ['react', 'env']
				}
			}],
			include: [
				path.resolve(__dirname, 'src') // 文件包含的目录
			]
		}, {
			test: /\.vue$/,
			use: ['vue-loader']
		}, {
			test: /\.(png|jpg|jpeg)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: '10000', // 文件小于指定大小就转换为 DataURL
					name: '[name].[ext]', // 指定输出时的文件名
					outputPath: 'assets/img', // 指定文件输出存放的位置
					publicPath: ''
				}
			}]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ['url-loader']
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html'
		}),
		new VueLoaderPlugin()
	],
	output: {
		filename: '[name].js', // 打包后输出文件名
		path: path.resolve(__dirname, 'dist') // 输出的文件位置
	},
	resolve: {
		alias: { // 修改vue引用时的文件指向
			vue$: 'vue/dist/vue.esm.js'
		}
	}
}