const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./config");

console.log(config.appSrc, '------------------config.appSrc');

module.exports = {
    resolve: {
        // extensions: [".js", ".jsx", ".css", ".json"],
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "appSrc": `${config.appSrc}`,
        },
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            include: path.join(__dirname, '../src')
        },
        {
            test: /\.tsx$/,
            use: [
                {
                    loader: 'ts-loader',
                }
            ],
            include: path.join(__dirname, '../src')
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '',
            filename: 'index.html',
            template:  path.join(__dirname, '../public/index.html'),
            // favicon: config.favicon,
            chunksSortMode: 'none',
            hash: true,// 防止缓存
        }),
    ]
}
