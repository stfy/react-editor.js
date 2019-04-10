const path = require('path');
const pkg = require('./package.json');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),

  target: 'web',
  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-editorjs.js',
    library: ['React-EditorJS'],
    libraryTarget: 'umd'
  },

  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      }]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
    }),
  ],
  devtool: false,
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true
      })
    ]
  }
};