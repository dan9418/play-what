var path = require('path');
var config = {
  mode: 'development',
  entry: ['../../build-ts/ui/src/index.js'],
  output: {
    path: path.resolve(__dirname, '../../build/'),
    filename: 'play-what-ui.js',
    libraryTarget: "commonjs2"
  }
};

module.exports = config;
