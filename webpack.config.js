const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var isProd = process.env.NODE_ENV === "production";
var cssDev = [
  "style-loader?sourceMap",
  "css-loader?sourceMap",
  "postcss-loader?sourceMap",
  "sass-loader?sourceMap"
];
var cssProd = ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: [
    { loader: "css-loader" },
    { loader: "postcss-loader" },
    { loader: "sass-loader" }
  ]
});

const cssConfig = isProd ? cssProd : cssDev;


module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    sourceMapFilename: "[file].map" // Default
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: cssConfig
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, 
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "img/",
          publicPath: "/img/"
        }
      },
      {
        test: /\.(woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]",
          outputPath: "/",
          publicPath: "fonts/"
        }
      },
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    publicPath: '/dist/',
    open: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "/css/[name].css",
      disable: !isProd,
      allChunks: true
    })
  ]
};
