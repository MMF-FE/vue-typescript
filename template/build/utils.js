require('shelljs/global')

const path = require('path')
const config = require('./config')
const cheerio = require('cheerio')
const ora = require('ora')
let webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const env = process.env.ENV || 'dev'
const packageConfig = require('../package.json')

let assetsRoot = config.dev.assetsRoot
let assetsSubDirectory = config.dev.assetsSubDirectory

if (process.env.NODE_ENV === 'production') {
    assetsRoot = config.build.assetsRoot
    assetsSubDirectory = config.build.assetsSubDirectory
}

exports.assetsPath = function(_path) {
    return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function(options) {
    options = options || {}

    let cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }

    // generate loader string to be used with extract text plugin
    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
        const loaders = options.usePostCSS
            ? [cssLoader, postcssLoader]
            : [cssLoader]

        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            })
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }

    // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass', {
            includePaths: [
                path.join(__dirname, '../src/style'),
                path.join(__dirname, '../node_modules')
            ]
        }),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
    const output = []
    const loaders = exports.cssLoaders(options)

    for (const extension in loaders) {
        const loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }

    return output
}

exports.getDllNames = function() {
    let map = {}
    ls(path.join(assetsRoot, assetsSubDirectory, '**/*.dll.*.js')).forEach(
        file => {
            let info = path.parse(file)

            map[
                String(info.name)
                    .split('.dll.')
                    .shift() + '.dll'
            ] = path.join(assetsSubDirectory, 'dll', info.base)
        }
    )

    return map
}

// 去掉 html 标签
exports.strip = function(html, tags) {
    let $ = cheerio.load(html, { decodeEntities: false })
    if (!tags || tags.length === 0) {
        return html
    }

    tags = !Array.isArray(tags) ? [tags] : tags
    let len = tags.length

    while (len--) {
        $(tags[len]).remove()
    }

    return $('body').html()
}

exports.createNotifierCallback = () => {
    const notifier = require('node-notifier')

    return (severity, errors) => {
        if (severity !== 'error') return

        const error = errors[0]
        const filename = error.file && error.file.split('!').pop()

        notifier.notify({
            title: packageConfig.name,
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname, 'logo.png')
        })
    }
}

// run webpack
exports.runWebpack = function(webpackConfig) {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig, (err, stats) => {
            if (err) {
                reject(err)
                return
            }
            process.stdout.write(
                stats.toString({
                    colors: true,
                    modules: false,
                    children: false,
                    chunks: false,
                    chunkModules: false
                }) + '\n\n'
            )

            if (stats.hasErrors()) {
                reject(new Error('Build failed with errors.\n'))
            } else {
                resolve(stats)
            }
        })
    })
}

exports.loading = function(msg = 'loading') {
    var spinner = ora(msg + ' ')
    spinner.start()
    return spinner
}
