const path = require('path');

const webpack = require('webpack');
const Html = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: './docs',
    hot: true
  },
  entry: {
    'canvas-umd': './src/index.js',
    'demo': './src/demo.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Html({
      filename: 'index.html',
      template: './src/demo.hbs'
    })
  ]
};
