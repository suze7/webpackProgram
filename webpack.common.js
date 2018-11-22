const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
    // another: './src/another-module.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new Visualizer(),
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  output: {
    filename: '[name].[contenthash].js',
    // chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
