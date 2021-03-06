const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

// to visualize the webpack bundle contents:
// yarn add -D webpack-bundle-analyzer
// yarn build
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge.smart(common, {
  entry: {
    'escher': './src/main.js',
    'escher.min': './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'escher',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true
    })
    // new BundleAnalyzerPlugin()
  ],
  externals: ['@jupyter-widgets/base']
})
