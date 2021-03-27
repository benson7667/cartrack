const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge')
const commonWebpack = require('./webpack.common')
const postCssConfig = require('../postcss.config')

module.exports = merge(commonWebpack, {
    mode: 'development',
    devServer: {
        hot: true,
        inline: true,
        open: false,
        historyApiFallback: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: postCssConfig
                    },
                ]
            }
        ]
    },
    plugins: [
        new ReactRefreshPlugin(),
    ]
})