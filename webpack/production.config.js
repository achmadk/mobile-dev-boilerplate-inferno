const webpack = require('webpack'),
path = require('path'),
CleanWebpackPlugin = require('clean-webpack-plugin')

var webpackConfig = require('../webpack.config')

webpackConfig.output = {
  path: path.resolve(__dirname, '../www'),
  publicPath: '',
  filename: 'bundle.js'
}

webpackConfig.devtool = 'cheap-module-source-map'

webpackConfig.plugins.push(
  new CleanWebpackPlugin([path.resolve(__dirname, '../www')], {
    root: path.resolve(__dirname, '..'),
    verbose: true
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    },
    '__DEVTOOLS__': false
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
  // new webpack.IgnorePlugin(/^\.\/languages$/, [/numbro$/]),
  // new webpack.ContextReplacementPlugin(/numbro[\\\/]dist[\\\/]languages$/, /^\.\/en-GB$/),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: false
  })
)

module.exports = webpackConfig
