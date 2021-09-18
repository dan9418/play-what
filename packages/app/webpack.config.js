const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
	mode: 'development',
	entry: env === 'production' ?
		['../../build-ts/app/src/index.js'] :
		[
			'webpack-dev-server/client?http://localhost:9000',
			'../../build-ts/app/src/index.js'
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
			'react': path.resolve(path.join(__dirname, '../../node_modules/react')),
		}
	},
	output: {
		path: `${__dirname}/../../build`,
		publicPath: '/',
		filename: 'play-what-app.js'
	},
	devServer: {
		contentBase: `${__dirname}/../../`,
		port: 9000,
		hot: true
	}
};
