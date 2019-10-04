import * as path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const cleanWebpackPlugin = new CleanWebpackPlugin();

require('dotenv').config();
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  output: {
    path: path.resolve( __dirname, `../bundle/`),
    filename: '[name].js'
  },
  entry: {
    index: path.resolve( __dirname, '../src/index.ts')
  },
  resolve: {
    mainFiles: ['index'],
    extensions: [ '.js', '.ts' ],
    modules: [ 'node_modules' ],
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    cleanWebpackPlugin,
  ],
  module: {
    rules: [
      {
        test: /.*(tsx?)$/,
        use: [
          'babel-loader',
          'ts-loader',
        ],
      },
    ]
  },
};
