// 开发环境配置

const merge = require('webpack-merge');
const common = require('./webpack.common.js'); // 引入公用模块
const webpack = require('webpack');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
		host: 'localhost',
		port: 8080,
		noInfo: true
	},
	mode: 'development',
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
})