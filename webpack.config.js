const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'index': [ './src/ts/index.tsx', './src/scss/index.scss' ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: __dirname + "/",
        inline: true,
        hot: true,
        host: "0.0.0.0",
        port: 8081
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.jsx', '.js', '.scss' ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new MonacoWebpackPlugin()
    ]
};
