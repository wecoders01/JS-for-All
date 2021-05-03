const path = require("path");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/scripts/index.js',

   output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, 'dist'),
   },

   mode: "development",

   devServer: {
      contentBase: path.join(__dirname, 'dist'),
      open: true,
   },

   module: {
      rules: [
         {
            test: /\.js$/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
         },
         {
            test: /\.html$/,
            loader: 'html-loader',
            options: {
               minimize: false,
            },
         },
         {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
               name: "[name].[ext]",
               outputPath: "images/",
               publicPath: "images/"
            },
         },
      ]
   },


   plugins: [

      new MiniCssExtractPlugin({
         filename: "[name].css",
         chunkFilename: "[id].css"
      }),

      new HtmlWebpackPlugin({
         template: './src/index.html'
      }),
   ],

};
