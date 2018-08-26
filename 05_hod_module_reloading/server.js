const express = require('express')
const webpack = require('webpack')
const app     = express()

// Tell express to use the webpack-dev-middleware and use the webpack.config.js configuration file as a base.
const config   = require('./webpack.config.js')
const compiler = webpack(config)
const whm      = require("webpack-hot-middleware")
const wdm      = require('webpack-dev-middleware')
app.use(whm(compiler)) // hot module reloading (doesn't seem to work :/)
app.use(
  wdm(compiler, {
    publicPath: config.output.publicPath
  })
)



// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
})
