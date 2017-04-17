const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    index: './demo/index.js',
    demo1: './demo/demo1.js',
    demo2: './demo/demo2.js'
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js'
  },
  externals: {
    react:'React',
    'react-dom':'ReactDOM'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['.js']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.less/,
        loader: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss-loader',
          'less-loader'
        ],
        exclude: /node_modules/
      }, {
        test: /\.css/,
        loader: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss-loader'
        ],
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    contentBase: path.resolve('./demo'),
    publicPath: '/',
    hot: true,
    noInfo: true
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [require('autoprefixer')],
      }
    }),
    new HtmlWebpackPlugin({
      title: '首页',
      chunks: ['index'],
      hash: true,
      template: path.resolve('./demo/index.html'),
      filename: path.resolve('./docs/index.html'),
    }),
    new HtmlWebpackPlugin({
      title: '基础应用',
      chunks: ['demo1'],
      hash: true,
      template: path.resolve('./demo/index.html'),
      filename: path.resolve('./docs/demo1.html'),
    }),
    new HtmlWebpackPlugin({
      title: '样式重写',
      chunks: ['demo2'],
      hash: true,
      template: path.resolve('./demo/index.html'),
      filename: path.resolve('./docs/demo2.html'),
    })
  ]
};

module.exports = config;
