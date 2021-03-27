const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BASE_PATH = path.resolve(__dirname, '../')
const SRC_PATH = `${BASE_PATH}/src`
const PUBLIC_PATH = `${BASE_PATH}/public`
const DIST_PATH = `${BASE_PATH}/dist`

module.exports = {
    entry: [`${SRC_PATH}/index.tsx`],
    output: {
        filename: "[name].[hash].bundle.js",
        path: path.resolve(__dirname, DIST_PATH),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${PUBLIC_PATH}/index.html`,
            title: 'Cartrack',
            description: 'Cartrack assigment'
        }),
    ]
}