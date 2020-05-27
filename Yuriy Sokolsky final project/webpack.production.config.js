var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode: 'production',
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

};