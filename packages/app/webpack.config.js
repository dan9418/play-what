const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const path = require('path');
const env = process.env.NODE_ENV;

const isDevelopment = env !== 'production';

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	entry: isDevelopment ?
		['../../build-ts/app/src/index.js'] :
		['../../build-ts/app/src/index.js'],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [
						"@babel/preset-env",
						"@babel/preset-react",
					],
					plugins: [
						"react-refresh/babel"
					]
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [new ReactRefreshWebpackPlugin()],
	resolve: {
		extensions: ['*', '.jsx', '.js'],
		alias: {
			'react': path.resolve(path.join(__dirname, '../../node_modules/react')),
		}
	},
	output: {
		path: `${__dirname}/../../build`,
		publicPath: `/`,
		filename: 'play-what-app.js'
	},
	devServer: {
		static: {
			directory: `${__dirname}/../../`,
			publicPath: ``,
			watch: true
		},
		port: 9000,
		hot: true
	}
};
