'use strict';
const path = require('path');
const webpack = require('webpack');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    vendor: [
      './demo/src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'demo'),
    filename: '[name].js',
    publicPath: '/demo/'
  },
  externals:{
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  resolve: {
    modules: ['node_modules', './src'],
  },
  module: {
    rules: [{
      test: /\.js/,
      loader: 'eslint-loader',
      enforce: 'pre',
      exclude: /(node_modules|dist)/
    }, {
      test: /\.js/,
      loader: 'babel-loader',
      exclude: /(node_modules|dist)/
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          minimize: production,
          modules: true,
          localIdentName: '[name]__[local]-[hash:base64:5]',
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: [require('autoprefixer')],
        }
      }, {
        loader: 'less-loader'
      }]
    },{
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      use: ['url-loader?limit=8192']
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ]
};
