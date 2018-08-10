// 生产环境配置

const merge = require('webpack-merge'); // 合并配置
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new UglifyJSPlugin()
	]
})