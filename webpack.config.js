const path = require('path');

module.exports = {
  entry: {
    pageOne: './src/index.js',
    pageTwo: './src/index2.js',
    pageThree: './src/index3.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]-[contenthash].js'
  }
}