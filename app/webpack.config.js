const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        init: './src/init.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mark\'s Pizza Cafe',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        allowedHosts: [
            'marks-pizza-cafe.markortleb.com',  // Allow requests from production hostname
            'localhost',                  // Allow localhost
            '127.0.0.1'                   // Allow requests from localhost IP
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
};