const path = require('path')
const isProd = process.env.NODE_ENV === "production";
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const resolve = paths => path.resolve(__dirname, paths)

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    index: resolve('./src/main.ts'),
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].js'
  },
  devServer: {
    port: 8080,
    publicPath: '/',
    historyApiFallback: true // 使用history路由模式
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.esm-browser.js',
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
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('./public/index.html'),
      favicon: resolve('./public/favicon.ico')
    }),
  ]
};
