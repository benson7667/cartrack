const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const commonWebpack = require('./webpack.common')
const postCssConfig = require('../postcss.config')

module.exports = merge(commonWebpack, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: postCssConfig
                    },
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: { sourceMap: true }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].[hash].bundle.css' }),
        new OptimizeCssAssetsPlugin(),
        new CleanWebpackPlugin()
    ]
})