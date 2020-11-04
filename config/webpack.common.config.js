const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    resolve: {
        // extensions: [".js", ".jsx", ".css", ".json"],
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            include: path.join(__dirname, '../src')
        },
        {
            test: /\.ts$/,
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
