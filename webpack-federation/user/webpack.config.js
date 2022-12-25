const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry入口，output出口，module模块，plugins插件，mode工作模式，devServer开发服务器
  mode: 'development', // production, development, none
  entry: './src/index.js',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3001,
    open: true
  }
}