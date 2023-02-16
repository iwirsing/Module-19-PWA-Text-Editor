const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');



module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // TODO: Add and configure workbox plugins for a service worker and manifest file.
      //webpack plugin that generates the html files and injects the bundles
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Contact Cards'
      }),

      //inject custom service worker
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'sec-sw.js',
      }),

      //create a manifest.json file
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Text Editor',
        description: 'Edit your text and keep it.',
        start_url: './',
        publicPath: './',
      })
    ],

    module: {

    // TODO: Add CSS loaders and babel to webpack.`
    //adding the loaders and babel to webpack
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,

          //babel loader for using ES6 and making it readable in ES5 browsers
          use: {
            loader: 'babel-loader',
            options: {
              presents: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
