const webpack = require('webpack');
const path = require('path');
const configs = require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractSCSS = new ExtractTextPlugin('assets/css/[name].[hash].css');
const extractVendors = new ExtractTextPlugin('assets/css/[name].[hash].css');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src') + '/main.jsx'
  ],
  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].[hash].js'
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
          name: 'assets/fonts/[name].[ext]'
        }
      },
      {
        test: /\.(jpg|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]'
        }
      },
      {
        test: /\.less/,
        use: extractVendors.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader',
              options: {
                modifyVars: {
                  '@primary-color': '#21c55e'
                }
              }
            }
          ]
        })
      },
      {
        test: /\.css/,
        use: extractVendors.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: extractSCSS.extract({
          fallback: 'style-loader',
          publicPath: '../../',
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[name]__[local]___[hash:base64:10]',
                modules: true,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourcemap: true,
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
                sourcemap: true
              }
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      CONFIGS: JSON.stringify(configs.parsed),
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      output: {
        comments: false
      }
    }),
    new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
    new HtmlWebpackPlugin({
      title: 'Spotify',
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'assets/js/vendor.[hash].js',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') >= 0;
      }
    }),
    new CopyWebpackPlugin([
      {from: path.resolve(__dirname, 'static'), to: path.resolve(__dirname, 'dist')}
    ]),
    extractVendors,
    extractSCSS
    // new BundleAnalyzerPlugin()
  ],

  devtool: 'source-map'
};
