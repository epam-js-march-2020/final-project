var path = require('path');
var webpack = require('webpack');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        app: './src/App.jsx',
        vendor: ['react','react-dom','react-router'],
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: '[name].bundle.js'
    },
    module: {

        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [
        // To strip all locales except “en”
        new MomentLocalesPlugin(),

        // Or: To strip all locales except “en”, “es-us” and “ru”
        // (“en” is built into Moment and can’t be removed)
        new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'ru'],
        }),
    ],
};