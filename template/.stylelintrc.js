/**
 * sass 规范
 * @date 2016-11-11 15:25:26
 * @author Allenice <994298628@qq.com>
 * @link http://www.allenice233.com
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
        "number-leading-zero": null,
        // 属性顺序
        "order/declaration-block-order": [
            "dollar-variables",
            "custom-properties",
            "declarations",
            "rules",
            "at-rules"
        ],
        "order/declaration-block-properties-specified-order": [
            "display",
            "float",
            "position",
            "left",
            "top",
            "right",
            "bottom",
            "width",
            "height",
            "padding",
            "margin",
            "border",
            "background",
            "color",
            "font",
            "text"
        ]
    }
}
