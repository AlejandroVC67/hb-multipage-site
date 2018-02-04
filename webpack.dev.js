const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
console.log('holi estoy en dev')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {

    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {sourceMap: true}
            },
            'sass-loader?sourceMap'
          ]
        })
      }
    ]
  }
})
