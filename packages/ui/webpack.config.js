var path = require('path');
var config = {
  mode: 'development',
  entry: ['../../build/ui/src/index.js'],
  output: {
    path: path.resolve(__dirname, '../../build/scripts/'),
    filename: 'play-what-ui.js',
    libraryTarget: "commonjs2"
  }
};

module.exports = config;
