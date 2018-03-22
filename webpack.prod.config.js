const webpack = require('webpack');
const path = require('path');
const configs = require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src') + '/main.jsx'
  ],
  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.scss', '.js', '.jsx', '.css'],
    alias: {
      Components: path.join(__dirname, 'src', 'components'),
      Containers: path.join(__dirname, 'src', 'containers'),
      Services: path.join(__dirname, 'src', 'services'),
      Constants: path.join(__dirname, 'src', 'constants'),
      Actions: path.join(__dirname, 'src', 'store', 'actions'),
      Reducers: path.join(__dirname, 'src', 'store', 'reducers'),
      Styles: path.join(__dirname, 'src', 'styles'),
      Src: path.join(__dirname, 'src'),
      Root: path.join(__dirname)
    }
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[name]__[local]___[hash:base64:10]',
                modules: true,
                sourceMap: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
    new HtmlWebpackPlugin({
      title: 'Spotify',
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      CONFIGS: JSON.stringify(configs.parsed),
      'process.env.NODE_ENV': '"production"'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') >= 0;
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    })
    // new BundleAnalyzerPlugin()
  ],

  devtool: 'eval'
};
