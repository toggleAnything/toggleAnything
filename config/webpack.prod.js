const webpack = require('webpack');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = require('./webpack.common');

const config = merge(
  baseConfig,
  {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        parallel: true,
      })],
    },
    plugins: [
      new webpack.optimize.AggressiveMergingPlugin(),
    ],
  },
);

module.exports = config;
