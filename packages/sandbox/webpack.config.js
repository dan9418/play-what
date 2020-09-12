const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/App.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:
                {
                    presets: ['@babel/react'],
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            react: path.resolve('./node_modules/react')
        }
    },
    output: {
        path: __dirname + '/build/',
        publicPath: '/',
        filename: 'sandbox.js'
    },
    devServer: {
        contentBase: __dirname + "/",
        port: 9000
    },
};
