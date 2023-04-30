const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => {
  return {
    mode: 'production',
    entry: {
      main: './src/js/index.js', 
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
  title: 'TODOs List',
  inject: 'head',
  filename: 'index.html',
  favicon: 'favicon.ico',
  meta: {
    viewport: 'width=device-width, initial-scale=1.0'
  }
      }),
      new InjectManifest({
        swSrc: '/sw.js',
        exclude: [/\.map$/, /asset-manifest\.json$/],
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'manifest.webmanifest', to: 'manifest.webmanifest' },
          { from: './src/images/manifest-icon-192.maskable.png', to: './img/icons' }]
        })
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource',
        },
      ],
    },
  };
};
