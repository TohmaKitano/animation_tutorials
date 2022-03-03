const path = require('path');

module.exports = {
  // development or production
  mode: "development",
  // devtool: "source-map",
  // mode: "production",

  entry: './src/assets/js/main.js',

  // babel
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ]
  },
  target: ["web", "es5"],

  output: {
    path: path.resolve(__dirname, './dist/assets/js/'),
    filename: 'main.js',
    clean: true
  },

  devServer: {
    contentBase: "dist",
    open: true
  },

};