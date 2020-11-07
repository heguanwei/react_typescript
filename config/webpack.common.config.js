const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./config");

console.log(config.appSrc, '------------------config.appSrc');

module.exports = {
    resolve: {
        // extensions: [".js", ".jsx", ".css", ".json"],
        // extensions: [".ts", ".tsx", ".js", ".jsx"],
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        alias: {
            "@src": `${config.appSrc}`,
        },
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: ['babel-loader'],
            //     include: path.join(__dirname, '../src')
            // },
            // {
            //     test: /\.ts[x]$/,
            //     loader: "awesome-typescript-loader",
            //     include: path.join(__dirname, '../src')
            // },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '',
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html'),
            // favicon: config.favicon,
            chunksSortMode: 'none',
            hash: true,// 防止缓存
        }),
    ]
}
