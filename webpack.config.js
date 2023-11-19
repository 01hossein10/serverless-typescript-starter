const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
  mode: 'production',
  entry: slsw.lib.entries,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  target: 'node',
  externals: ['aws-sdk', 'aws-crt'],
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        loader: 'ts-loader',
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.serverless'),
            path.resolve(__dirname, '.webpack')
          ]
        ],
        options: {
          transpileOnly: true
        }
      }
    ]
  }
};