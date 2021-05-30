const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const srcPath = path.join(__dirname, '../src');
const publicPath = '/';
module.exports = {
  entry: ['../src/index'],
  cache: false,
  context: srcPath,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'static/js/[name].[fullhash].js',
    publicPath,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
      components: `${srcPath}/components/`,
      containers: `${srcPath}/containers/`,
      lib: `${srcPath}/lib/`,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: srcPath,
        loader: 'babel-loader',
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.join(__dirname, '../public/'),
        to: path.join(__dirname, '../dist/'),
        noErrorOnMissing: true,
      }],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Toggle Anything',
      template: path.join(__dirname, '../src/assets/index.html'),
    }),
    new StyleLintPlugin({
      configFile: path.resolve(__dirname, '../.stylelintrc'),
      context: srcPath,
      emitErrors: false,
      files: '**/*.scss',
      failOnError: true,
      quiet: false,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
