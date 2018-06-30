// Important modules this config uses
const webpack = require('webpack');

module.exports = require('./webpack.base.babel')({
  mode: 'development',

  // In production, we skip all hot-reloading stuff
  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  entry: [
    'eventsource-polyfill', // Necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true',
  ],

  optimization: {
    runtimeChunk: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading

  ],

  performance: {},
});
