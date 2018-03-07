/**
 * webpack doc config
 * @author Allenice
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const utils = require('./utils')
const md = require('markdown-it')()
const slugify = require('transliteration').slugify
const prismjs = require('prismjs')

// prismjs components
require('prismjs/components/prism-typescript')
require('prismjs/components/prism-scss')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-yaml')

let config = require('./config')
let baseConfig = require('./webpack.base.conf')

const isBuild = process.env.NODE_ENV === 'production'

function convert(str) {
    str = str.replace(/(&#x)(\w{4});/gi, function($0) {
        return String.fromCharCode(
            parseInt(
                encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'),
                16
            )
        )
    })
    return str
}

let htmlConfig = {
    filename: 'index.html',
    template: 'build/tpl/doc.html',
    staticHost: '/',
    inject: true
}

// 不使用 dll
baseConfig.plugins.splice(1, 2)

let docConfig = merge(baseConfig, {
    node: {
        fs: false,
        process: false,
        Buffer: false
    },
    output: {
        path: path.resolve('./doc'),
        filename: utils.assetsPath('[name].js'),
        chunkFilename: utils.assetsPath('[name].js')
    },
    resolve: {
        alias: {
            // override router
            router: path.resolve('./src/router/doc.ts')
        }
    },
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.NormalModuleReplacementPlugin(/pages\/app/, 'pages/doc')
    ]
})

// i18n loader for doc
docConfig.module.rules[0].options.loaders.i18n = 'i18n-loader!yaml-loader'

// vue markdown loader
// @ts-ignore
docConfig.module.rules.push({
    test: /\.md$/,
    loader: 'vue-markdown-loader',
    options: {
        linkify: true,
        highlight(str, lang) {
            let langMark = prismjs.languages[lang] || prismjs.languages['bash']
            return prismjs.highlight(str, langMark)
        },
        use: [
            [
                require('markdown-it-container'),
                'demo',
                {
                    validate: function(params) {
                        return params.trim().match(/^demo\s*(.*)$/)
                    },

                    render: function(tokens, idx) {
                        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
                        if (tokens[idx].nesting === 1) {
                            var description = m && m.length > 1 ? m[1] : ''
                            var content = tokens[idx + 1].content
                            var html = convert(
                                utils.strip(content, ['script', 'style'])
                            ).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
                            var descriptionHTML = description
                                ? md.render(description)
                                : ''

                            return `<demo-block class="demo-box">
                              <div class="source" slot="source">${html}</div>
                              ${descriptionHTML}
                              <div class="highlight" slot="highlight">`
                        }
                        return '</div></demo-block>\n'
                    }
                }
            ],
            [require('markdown-it-container'), 'tip']
        ],
        preprocess: function(MarkdownIt, source) {
            MarkdownIt.renderer.rules.table_open = function() {
                return '<table class="table">'
            }
            // MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
            return source
        }
    }
})

if (!isBuild) {
    // dev config
    Object.keys(docConfig.entry).forEach(function(name) {
        docConfig.entry[name] = ['./build/dev-client'].concat(
            docConfig.entry[name]
        )
    })
    docConfig = merge(docConfig, {
        module: {
            rules: utils.styleLoaders({ sourceMap: true })
        },
        plugins: [
            new HtmlWebpackPlugin(htmlConfig),
            // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new FriendlyErrorsPlugin()
        ]
    })
} else {
    // build config
    htmlConfig.staticHost = ''
    docConfig.output.path = path.resolve('./dist/doc')
    docConfig.output.publicPath = ''

    docConfig = merge(docConfig, {
        module: {
            rules: utils.styleLoaders({ sourceMap: true, extract: true })
        },
        plugins: [
            new HtmlWebpackPlugin(htmlConfig),
            new ExtractTextPlugin({
                filename: utils.assetsPath('css/[name].css')
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function(module, count) {
                    // any required modules inside node_modules are extracted to vendor
                    return (
                        module.resource &&
                        /\.js$/.test(module.resource) &&
                        module.resource.indexOf(
                            path.join(__dirname, '../node_modules')
                        ) === 0
                    )
                }
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                sourceMap: true
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest',
                chunks: ['vendor']
            })
        ]
    })
}
module.exports = docConfig
