const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

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
    }),
    new ModuleFederationPlugin({
      // 对外提供打包后的文件名，导入时会使用
      filename: 'myUser.js',
      // 微应用的名字，类似single-spa组织名
      name: 'ncwu',
      // 具体要导出谁
      exposes: {
        // 格式：名字: 具体哪一个组件
        './about': './src/About.js',
        './home': './src/Home.js'
      }
    })
  ]
}