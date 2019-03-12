const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/index2.js'],
  output: {
    path: path.resolve(__dirname,'build'),
    filename: '[name]-[contenthash].js'
  }
}