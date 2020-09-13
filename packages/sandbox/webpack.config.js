module.exports = {
	mode: 'development',
	entry: './src/index.jsx',
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
			//react: path.resolve('./node_modules/react')
			'react-dom': '@hot-loader/react-dom'
		}
	},
	output: {
		path: `${__dirname}/build/`,
		publicPath: '/',
		filename: 'sandbox.js'
	},
	devServer: {
		contentBase: `${__dirname}/`,
		port: 9000,
		hot: true
	}
	/*plugins: [
		new webpack.HotModuleReplacementPlugin()
	]*/
};
