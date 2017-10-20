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
      { test: /\.jsx$/, loader: ['react-hot-loader/webpack','babel-loader'], exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader', options: {
              includePaths: ['./node_modules']
            }
          },
        ]
      },
      {test: /\.jpe?g$|\.gif$|\.png$/i,loader: 'file-loader'},
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
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
