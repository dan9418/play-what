var path = require('path');
var config = {
	mode: 'development',
	entry: ['../../build-ts/viewers/src/index.js'],
	output: {
		path: path.resolve(__dirname, '../../build'),
		filename: 'play-what-viewers.js',
		libraryTarget: "commonjs2"
	},
	resolve: {
		extensions: ['*', '.jsx', '.js']
	},
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
	externals: {
		'react': 'react'
	}
};

module.exports = config;
