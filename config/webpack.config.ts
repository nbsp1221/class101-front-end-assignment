import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { isEnvProduction } from './env';
import paths from './paths';

const config: webpack.Configuration = {
  mode: isEnvProduction ? 'production' : 'development',
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  entry: paths.appMain,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appIndexHtml
    })
  ],
  output: {
    filename: 'app.js',
    path: paths.appBuild
  }
};

export default config;