var utils = require('./utils')
var config = require('./config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    esModule: true,
    cssModules: {
        localIdentName: isProduction ? '[hash:base64:6]' : '[local]--[hash:base64:5]',
        camelCase: true
    },
    loaders: utils.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
        extract: isProduction
    })
}
