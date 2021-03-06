const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const uglifyjsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
    entry: './src/main.js',
    output: {
        // 动态获取路径
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
        // publicPath: "dist/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader 负责加载css文件
                // style-loader 负责将样式添加到DOM中
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片小于limit时，会编译成base64形式
                            // 当加载的图片大于limit时，会使用file-loader
                            limit: 10,
                            // 图片打包命名
                            name: "img/[name].[hash:8].[ext]"
                        },
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                        // presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    },
    resolve: {
        // 解决runtime-only报错问题
        extensions: ['.js', '.css', '.vue'],
        alias: {
            "vue$": 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // 添加版权插件
        new webpack.BannerPlugin("最终版权归老纸所有"),
        // 设置模板
        new htmlWebpackPlugin({
            template: 'index.html'
        }),
        // 混淆压缩js
        new uglifyjsPlugin()
    ],
    devServer: {
        contentBase: './dist',
        inline: true
    }
}