const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    mode: 'production',

    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader' 
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    name: '[name].pug',
                },
            },
            {
                test: /\.(s[ca]ss)$/,
                use: [ 
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                     'sass-loader' 
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
          }),
        new HtmlWebpackPlugin({
            template: './public/index.pug'
        }),
    ],

    devServer: {
        open: true
    }
}