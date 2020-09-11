var path = require('path');
var config = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'play-what.js',
    libraryTarget: "commonjs2"
  }
};

module.exports = config;