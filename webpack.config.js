const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    pageOne: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]-[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: [require('autoprefixer')()]
          }
        }]
      },
      {
        test: /\.less$/,
        use: ['style-loader','css-loader','less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader',{
          loader: 'postcss-loader',
          options: {
            plugins: [require('autoprefixer')()]
          }
        }]
      }
    ]
  },
  devServer: {
    contentBase: './build', // 设置服务器访问的基本目录
    host: 'localhost',
    port: '8081',
    open: true // 自动打开页面
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false
    })
  ]
}