const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
	mode: 'development',
	entry: env === 'production' ?
		['./src/index.jsx'] :
		[
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
				options: {
					presets: [
						"@babel/preset-env",
						"@babel/preset-react"
					]
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
		filename: 'play-what-app.js'
	},
	devServer: {
		contentBase: `${__dirname}/build/`,
		port: 9000,
		hot: true
	}
};
