const path = require('path')
const isProd = process.env.NODE_ENV === "production";
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    index: path.resolve(__dirname, 'main.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
    resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.esm-browser.js',
      examples: path.resolve(__dirname),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
  ]
};
