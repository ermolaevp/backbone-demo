const webpack = require('webpack');

module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"},
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel' // 'babel-loader' is also a legal name to reference
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.ejs$/,
        loader: 'ejs',
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: "underscore"
    })
  ]
};
