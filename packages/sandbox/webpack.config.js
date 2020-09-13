const { WebpackConfigDumpPlugin } = require("webpack-config-dump-plugin");
const path = require('path')

module.exports = {
	mode: 'development',
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:9000',
		'webpack/hot/only-dev-server',
		'./src/index.jsx'
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['@babel/react']
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.jsx', '.js'],
		alias: {
			'react-hot-loader': path.resolve(path.join(__dirname, '../../node_modules/react-hot-loader')),
			'react': path.resolve(path.join(__dirname, '../../node_modules/react')),
			'react-dom': path.resolve(path.join(__dirname, '../../node_modules/@hot-loader/react-dom'))
		}
	},
	output: {
		path: `${__dirname}/build/`,
		publicPath: '/',
		filename: 'sandbox.js'
	},
	devServer: {
		contentBase: `${__dirname}/build/`,
		port: 9000,
		hot: true
	},
	plugins: [
		new WebpackConfigDumpPlugin({ outputPath: './', name: 'dump.txt' })
		//new webpack.HotModuleReplacementPlugin()
	]
};
