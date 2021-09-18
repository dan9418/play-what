var path = require('path');
var config = {
  mode: 'development',
  entry: ['../../build-ts/core/src/index.js'],
  output: {
    path: path.resolve(__dirname, '../../build/'),
    filename: 'play-what-core.js',
    libraryTarget: "commonjs2"
  }
};

module.exports = config;
