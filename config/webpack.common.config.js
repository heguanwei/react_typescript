const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./config");

module.exports = {
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", "jsx"],
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
