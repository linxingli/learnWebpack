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
  },
  devServer: {
    contentBase: './build', // 设置服务器访问的基本目录
    host: 'localhost',
    port: '8081',
    open: true // 自动打开页面
  }
}