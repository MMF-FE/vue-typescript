/**
 * sass 规范
 * @author Allenice <994298628@qq.com>
 * @since 2017-06-30 05:15:45
 */

// 这里 js 使用双引号是因为想可以自由转换成 json

module.exports = {
    "ignoreFiles": ["node_modules/**/*.scss"],
    "extends": "stylelint-config-standard",
    "plugins": ['stylelint-order'],
    "rules": {
        "color-hex-case": null,
        "color-hex-length": null,
        "max-empty-lines": 1,
        "indentation": 4,
        // 字符串使用双引号
        "string-quotes": "double",
        // 使用了 autoprefix 不需要前缀
        "property-no-vendor-prefix": true,
        "selector-type-no-unknown": null,
        "selector-pseudo-element-colon-notation": null,
        "selector-pseudo-class-no-unknown": null,
        "number-leading-zero": null
        // 属性顺序
    }
}
