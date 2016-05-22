const path = require('path')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: `index.js`,
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
    ]
  },
}