var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
var ExtractTextPluginConfig = new ExtractTextPlugin("[name].css");

module.exports = { 
    entry: __dirname + '/app/index.jsx',
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {   
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.(ttf|eot|woff|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                },
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig, ExtractTextPluginConfig]
};
