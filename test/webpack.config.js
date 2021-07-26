const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const resolve = paths => path.resolve(__dirname, paths)

module.exports = {
  mode: 'development',
  entry: resolve('./index.js'),
  devServer: {
    port: 8080,
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },

      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(woff|eot|ttf|svg|png|jpg|jpeg)$/,
        loader: 'url-loader',
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
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('./index.html'),
    }),
  ],
}
