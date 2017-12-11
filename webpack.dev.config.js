const
  webpack = require('webpack'),
  path = require('path'),
  configs = require('dotenv').config(),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry  : [
    'react-hot-loader/patch',
    path.resolve(__dirname, 'src') + '/main.js'
  ],
  output : {
    publicPath: '/',
    path      : path.resolve(__dirname, 'dist'),
    filename  : 'bundle.js'
  },
  resolve: {
    extensions: ['.scss', '.js', '.jsx', '.css'],
    alias     : {
      Components: path.join(__dirname, 'src', 'components'),
      Containers: path.join(__dirname, 'src', 'containers'),
      Services  : path.join(__dirname, 'src', 'services'),
      Constants : path.join(__dirname, 'src', 'constants'),
      Actions   : path.join(__dirname, 'src', 'store', 'actions'),
      Reducers  : path.join(__dirname, 'src', 'store', 'reducers'),
      Styles    : path.join(__dirname, 'src', 'styles'),
      Src       : path.join(__dirname, 'src'),
      Root      : path.join(__dirname)
    }
  },

  module: {
    loaders: [
      {
        test   : /\.jsx?/,
        include: path.resolve(__dirname, 'src'),
        loader : 'babel-loader'
      },
      {
        test   : /\.(ttf|eot|woff|woff2)$/,
        loader : 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.scss$/,
        use : [
          {
            loader : 'style-loader',
            options: {sourceMap: true}
          },
          {
            loader : 'css-loader',
            options: {
              localIdentName: '[name]__[local]___[hash:base64:10]',
              modules       : true,
              sourceMap     : true
            }
          },
          {
            loader : 'postcss-loader',
            options: {
              sourceMap: true,
              plugins  : function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            loader : 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use : [
          {
            loader: 'style-loader',
          },
          {
            loader : 'css-loader',
            options: {
              minimize: true
            }
          },
        ]
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title   : 'Spotify',
      template: './src/index.html',
      inject  : 'body'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      CONFIGS: JSON.stringify(configs.parsed)
    })
  ],

  devtool: 'eval-source-map',

  devServer: {
    host              : '0.0.0.0',
    hotOnly           : true,
    historyApiFallback: true,
    port              : configs.parsed.DEV_SERVER_PORT
  }
};
