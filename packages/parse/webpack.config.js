var path = require('path');
var config = {
	mode: 'development',
	entry: ['./src/index.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'parse.js',
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
				query: {
					presets: ['@babel/react']
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};

module.exports = config;
