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
    path    : path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.scss', '.js', '.jsx', '.css'],
    alias     : {
      Components: path.join(__dirname, 'src', 'components'),
      Styles    : path.join(__dirname, 'src', 'styles'),
      Root      : path.join(__dirname, 'src')
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
        test: /\.s?css$/,
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

  devServer: {
    host              : '0.0.0.0',
    hotOnly           : true,
    historyApiFallback: true,
    port              : configs.parsed.DEV_SERVER_PORT
  }
};
