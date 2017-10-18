const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { ReactLoadablePlugin } = require('react-loadable/webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HTMLWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const pkg = require('./package.json')

module.exports = {
  entry: {
    main: [
      'react-hot-loader/patch',
      './src/index.js'
    ]
  },
  output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[name].bundle.js',
  },
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: ['react-hot-loader/webpack','babel-loader'], exclude: /node_modules/ }
    ]
  },
  devServer: {
    inline:true,
    port: 8000,
    disableHostCheck: true
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    new ReactLoadablePlugin({
      filename:  path.resolve(__dirname, 'public', 'dist', 'react-loadable.json'),
    })
  ]
}
