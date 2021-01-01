const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: './src/scripts/index.js',

  output: {
    filename: 'main.js',
    publicPath: './',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    watchContentBase: true
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/pages/login.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'signup.html',
      template: './src/pages/signup.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'reset-password.html',
      template: './src/pages/reset-password.pug'
    }),
    new SVGSpritemapPlugin('src/pics/icons/*.svg')
  ],

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /.pug$/i,
        use: [
          "pug-loader",
        ],
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf|png|jpg|gif)$/,
        loader: 'url-loader'
      },
    ],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') { }
  if (argv.mode === 'production') { }
  return config;
}