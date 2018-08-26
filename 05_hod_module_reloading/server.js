const express              = require('express')
const webpack              = require('webpack')

const app      = express()
const config   = require('./webpack.config.js')

// Tell express to use the webpack-dev-middleware and use the webpack.config.js configuration file as a base.
const webpackDevMiddleware = require('webpack-dev-middleware')
const compiler             = webpack(config)
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
)

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
})
