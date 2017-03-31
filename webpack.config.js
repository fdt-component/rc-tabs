const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './pages/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'test')
  },
  externals: {
    react:'React',
    'react-dom':'ReactDOM'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      },{
        test: /\.less/,
        loader: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss-loader',
          'less-loader'
        ],
        exclude: /node_modules/
      },{
        test: /\.css/,
        loader: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss-loader'
        ]
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    contentBase: path.resolve('./pages'),
    publicPath: '/dist/',
    hot: true,
    noInfo: true
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [require('autoprefixer')],
      }
    })
  ]
}

module.exports = config;
