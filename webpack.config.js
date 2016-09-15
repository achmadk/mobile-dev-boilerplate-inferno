const webpack = require('webpack'); // Requiring the webpack lib
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:8080/', // Setting the URL for the hot reload
    // 'webpack/hot/only-dev-server', // Reload only the dev server
    './src/index.jsx'
    // './src/modules/main.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel' // Include the react-hot loader
    }, {
      test: /\.less$/,
      loader: 'style!css!less' // We add the css loader
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass' // We add the css loader
    }, {
      test: /\.css$/,
      loader: 'style!css' // We add the css loader
    }, {
      // When you encounter images, compress them with image-webpack (wrapper around imagemin)
      // and then inline them as data64 URLs
      test: /.*\.(png|jpg|svg)$/i,
      loader: 'url?name=./img/[hash].[ext]!image-webpack',
    }, {
      // test:  /\.(ttf|eot|svg)(\?[a-z0-9=&.]+)?$/,
      test:  /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      loader: 'file?name=./font/[hash].[ext]'
    }, {
      // test: /\.woff(2)?(\?[a-z0-9=&.]+)?$/,
      test: /\.woff(2)?(\?[\s\S]+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=./font/[hash].[ext]'
    }]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src', 'test'],
    extensions: ['', '.js', '.jsx'],
    root: __dirname,
    alias: {
      root: 'src',
      api: 'src/api',
      api_backup: 'src/api_backup',
      assets: 'src/assets',
      components: 'src/components',
      modules: 'src/modules'
    }
  },
  // output: {
  //   path: __dirname + '/www',
  //   publicPath: '',
  //   filename: 'bundle.js'
  // },
  // devServer: {
  //   contentBase: './www',
  //   inline: true,
  //   hot: true // Activate hot loading
  // },
  // devtool: 'cheap-module-source-map',
  plugins: [
    // new webpack.HotModuleReplacementPlugin(), // Wire in the hot loading plugin
    new webpack.NoErrorsPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   filename: 'index.html',
    //   minify: false,
    //   inject: 'body'
    // }),
    new CopyWebpackPlugin([
      { from: './src/pages'},
      { from: './src/assets/img', to: 'img' }
    ])
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: false,
    //   sourcemap: false,
    //   // compress: { warnings: false },
    //   // output: { comments: false }
    // })
  ]
};
