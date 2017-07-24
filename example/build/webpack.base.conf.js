var path = require('path')
var utils = require('./utils')
var config = require('./config')
var vueLoaderConfig = require('./vue-loader.conf')
var env = process.env.ENV || 'dev'
var webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        style: './src/style/app.scss',
        app: './src/main.ts'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        chunkFilename: '[name].bundle.js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.ts', '.vue', '.js', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
            'env': resolve(`src/env/${env}`),
            'assets': resolve('src/assets'),
            'md5': 'blueimp-md5'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                include: [resolve('src'), resolve('test')],
                options: {
                    transpileOnly: true
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },

    plugins: [
        // 作用域提升，减少代码量，加快代码运行速度（webpack 3.0）
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
}
