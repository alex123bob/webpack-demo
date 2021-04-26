const path = require('path');


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
                          name: 'resources/[contenthash].[ext]'
                      }
                  }
              ]
          }
      ]
  }
};