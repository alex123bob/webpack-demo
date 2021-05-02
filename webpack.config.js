const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {FileListPlugin} = require('./plugins/FileList');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
              test: /\.(png|jpe?g|gif)/i,
              use: [
                  {
                      loader: 'file-loader',
                      options: {
                          context: 'src',
                          name: '[path][contenthash].[ext]'
                      }
                  }
              ]
          }
      ]
  },
  plugins: [
      new HTMLWebpackPlugin(),
      new FileListPlugin()
  ]
};