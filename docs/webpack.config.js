const path = require('path')
const isProd = process.env.NODE_ENV === "production";
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const resolve = paths => path.resolve(__dirname, paths)

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    index: resolve('./src/main.ts'),
  },
  output: {
    path: resolve('../dist'),
    publicPath: '/',
    filename: 'static/js/[name].js'
  },
  devServer: {
    port: 8080,
    historyApiFallback: true // 使用history路由模式
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.esm-browser.js',
      '@': resolve('./src'),
      '@v': resolve('./src/views'),
      '@sty': resolve('./src/style'),
      '@r': resolve('./src/router'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [
                resolve('./src/style/variable.scss')
              ]
            }
          }
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              limit: 10 * 1024,
              outputPath: 'static/images'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('./public/index.html'),
      favicon: resolve('./public/favicon.ico')
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[chunkhash:10].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*']
    }),
  ]
};
