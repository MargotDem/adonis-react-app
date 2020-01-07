const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const extractSass = new ExtractTextPlugin({
  filename: 'app.css'
})

function sassRules () {
  return [
    {
      test: /\.(sass|scss)$/,
      loader: extractSass.extract(['css-loader', 'sass-loader'])
    }
  ]
}

function scriptRules () {
  return [
    {
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      options: { presets: ['@babel/preset-env'] }
    }
  ]
}

module.exports = {
  entry: [
    './resources/assets/sass/app.scss',
    './resources/assets/js/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },
  module: {
    rules: sassRules().concat(scriptRules())
  },
  plugins: [
    extractSass
  ]
}
