/*eslint-disable no-var*/

var path = require('path');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var cssnext = require('postcss-cssnext');

module.exports = {
  devServer: {
    host: 'localhost',
    port: 9001
  },
  entry: {
    main: [
      './src/main'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
   plugins: [
    new AureliaWebpackPlugin({
      includeSubModules: [
        { moduleId: 'aurelia-auth' }
      ]
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015-loose', 'stage-1'], plugins: ['transform-decorators-legacy'] } },
      { test: /\.css?$/, loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.(png|gif|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff2' },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ]
  },
  postcss: function () {
      return [require("postcss-cssnext")()];
  }
};
