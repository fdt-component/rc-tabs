'use strict';
const path = require('path');
const webpack = require('webpack');
const webpackUMDExternal = require('webpack-umd-external');
const DashboardPlugin = require('webpack-dashboard/plugin');
const production = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    index: [
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  externals:webpackUMDExternal({
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
    'react-tappable/lib/Tappable': 'Tappable',
    classnames: 'classnames',
    'prop-types': 'PropTypes',
  }),
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
    new DashboardPlugin()
  ]
};
