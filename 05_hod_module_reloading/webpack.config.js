const path               = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin     = require('webpack-manifest-plugin')
const webpack            = require('webpack')

module.exports = {
  mode: 'development',

  entry: {
    '00-hot-reloading': 'webpack-hot-middleware/client',
    app:   './src/index.js',  // first entry point
    print: './src/print.js',  // second entry point
  },

  devtool: 'inline-source-map', // add source maps

  plugins: [
    new webpack.HotModuleReplacementPlugin(),                // enable hot module replacement on our custom dev server
    new CleanWebpackPlugin(['dist']),                        // delete previously generated files from the dist dir
    new HtmlWebpackPlugin({title: 'Hot Module Reloading'}),  // generate index.html
    new ManifestPlugin(),                                    // emit dist/manifest.json
  ],

  output: {
    filename: '[name].bundle.js',          // how to name files
    path: path.resolve(__dirname, 'dist'), // where to save files
    publicPath: '/',                       // root path for the dev server
  },

}
