const path = require('path')
const utils = require('./utils')
const config = require('./config')
const vueLoaderConfig = require('./vue-loader.conf')
const env = process.env.ENV || 'dev'
const webpack = require('webpack')
const merge = require('webpack-merge')
const packageConfig = require('../package.json')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

let baseWebpackConfig = {
    context: path.resolve(__dirname, '../'),
    entry: {
        style: './src/style/app.scss',
        {{#if_eq ie true}}
        app: ['babel-polyfill', './src/main.ts']
        {{/if_eq}}
        {{#if_eq ie false}}
        app: './src/main.ts'
        {{/if_eq}}
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        chunkFilename: '[name].bundle.js',
        publicPath:
            process.env.NODE_ENV === 'production'
                ? config.build.assetsPublicPath
                : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.ts', '.vue', '.js', '.json'],
        modules: [resolve('src'), resolve('node_modules')],
        alias: {
            vue$: 'vue/dist/vue.runtime.esm.js',
            env: resolve(`src/env/${env}`),
            assets: resolve('src/assets')
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
                test: /\.ts$/,
                enforce: 'pre',
                include: [resolve('src')],
                exclude: [resolve('node_modules'), /index\.ts$/],
                loader: 'tslint-loader',
                options: {
                    emitErrors: true
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
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
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
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.version': JSON.stringify(packageConfig.version)
        }),
        new webpack.DllReferencePlugin({
            manifest: require(`../dist/${env}/manifest/vendor-manifest.json`)
        }),

        new webpack.DllReferencePlugin({
            manifest: require(`../dist/${env}/manifest/vue-manifest.json`)
        })
    ]
}

if (env === 'doc') {
    const docWebpackConfig = require('./webpack.doc.conf')
    baseWebpackConfig = merge(baseWebpackConfig, docWebpackConfig)
}

module.exports = baseWebpackConfig
