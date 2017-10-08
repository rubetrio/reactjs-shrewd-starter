const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devServer: {
    inline:true,
    port: 8000,
    disableHostCheck: true
  },
  plugins: [
    HtmlWebpackPluginConfig,
    // new BundleAnalyzerPlugin({
    //     analyzerMode: 'static'
    //  })
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
  ]
}
