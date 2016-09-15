const webpack = require('webpack'),
path = require('path'),
WebpackDevServer = require('webpack-dev-server'),
BrowserSyncPlugin = require('browser-sync-webpack-plugin')

var webpackConfig = require('../webpack.config')

webpackConfig.entry.unshift(
  'webpack-dev-server/client?http://localhost:8080/', // Setting the URL for the hot reload
  'webpack/hot/only-dev-server' // Reload only the dev server
)

webpackConfig.output = {
  path: path.resolve(__dirname, '../temp'),
  publicPath: '',
  filename: 'bundle.js'
}

webpackConfig.devServer = {
  contentBase: path.resolve(__dirname, '../temp'),
  inline: true,
  hot: true // Activate hot loading
}

webpackConfig.devtool = 'eval'

webpackConfig.plugins.unshift(
  new webpack.HotModuleReplacementPlugin(),
  new BrowserSyncPlugin({
    host: 'localhost',
    port: 8070,
    proxy: 'http://localhost:8080/'
  })
)

module.exports = webpackConfig
// new WebpackDevServer(webpack(webpackConfig), {
//   publicPath: webpackConfig.output.publicPath,
//   hot: true,
//   historyApiFallback: true
// }).listen(8080, 'localhost', (err, result) => {
//   if (err) {
//     return console.log(err);
//   }
// })
