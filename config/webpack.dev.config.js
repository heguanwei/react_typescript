const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMerge = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCommonConfig = require("./webpack.common.config");
const { CheckerPlugin } = require('awesome-typescript-loader');

const webpackDevConfig = {
    devtool: 'eval-source-map', // 指定加source-map的方式
    mode: 'development',
    entry: path.join(__dirname, '../src/index.tsx'),
    output: {
        filename: "js/[name].[hash].bundle.js",
        path: path.join(__dirname, '../dist')
    },
    devServer: {
        inline: true,// 打包后加入一个websocket客户端
        hot: true,// 热加载
        // contentBase: path.join(__dirname, "..", "dist"), // 静态文件根目录
        port: 3000, // 端口
        host: 'localhost',
        open: true, // 自动打开浏览器
        overlay: true,
        compress: false, // 服务器返回浏览器的时候是否启动gzip压缩\
        // 配置代理
        // proxy: newProxyObj,
        stats: {
            // 添加缓存（但未构建）模块的信息
            cached: true,
            // 显示缓存的资源（将其设置为 `false` 则仅显示输出的文件）
            cachedAssets: true,
            // 添加 children 信息
            children: true,
            // 添加 chunk 信息（设置为 `false` 能允许较少的冗长输出）
            chunks: true,
            // 将构建模块信息添加到 chunk 信息
            chunkModules: true,
            // `webpack --colors` 等同于
            colors: true,
            // 添加 --env information
            env: false,
            // 添加错误信息
            errors: true,
            // 添加错误的详细信息（就像解析日志一样）
            errorDetails: true,
            // 添加 compilation 的哈希值
            hash: false,
            // 添加构建模块信息
            modules: true,
            // 当文件大小超过 `performance.maxAssetSize` 时显示性能提示
            performance: true,
            // 添加时间信息
            timings: true,
            // 添加警告
            warnings: true
        }
    },
    watchOptions: {
        ignored: /node_modules/, //忽略不用监听变更的目录
        aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
        poll: 1000 //每秒询问的文件变更的次数
    },
    module: {
        rules: [
        {
            test: /\.(less|css)$/,
            // use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: 'less-loader',
                    options: {
                        modules: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]',  // 生成样式的命名规则
                        // 使用less默认运行时替换配置的@color样式
                        // modifyVars: config.color,
                        // javascriptEnabled: true,
                    },
                },

            ]
        }
        // {
        //     test: /\.tsx$/,
        //     use: [
        //         {
        //             loader: 'ts-loader',
        //         }
        //     ],
        //     include: path.join(__dirname, '../src')
        // }
        ]
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
        new CheckerPlugin()
    ]
}

module.exports = WebpackMerge(WebpackCommonConfig, webpackDevConfig)
