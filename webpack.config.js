let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/app.ts'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.js'
	},
	module: {
		rules: [{
			test: /\.ts$/,
			use: {
				loader: 'ts-loader'
			}
		}]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './index.html'
		})
	]
};