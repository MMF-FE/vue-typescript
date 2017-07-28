# 样式
默认使用 sass(scss), 在 build/utils.js 配置如下：

```js
scss: generateLoaders('sass', {
    includePaths: [
        path.join(__dirname, '../src/style'),
        path.join(__dirname, '../node_modules')
    ]
})
```
import sass 默认是从 src/style 目录或 node_modules 开始的, 所以即使你组件目录层次多深，引入样式都很方便。
> 注意：如果是引入 node_modules 里面的模块，需要加上 **~**

```scss
@import "base/base"; // 引入 src/style/base/_base.scss

@import "~normalize.css"; // 引入 node_modules/normalize.css
```

## base.scss
src/style/base/_base.scss 只能引入不能生成代码的模块，比如 变量、mixins 等。 

## 资源路径（assets）
sass 中引用资源（assets）使用 [postcss-assets](https://github.com/borodean/postcss-assets) 提供的 reslove 方法。默认的资源根路径是 src/assets/images。你可以修改 .postcssrc.js 文件来修改或添加路径。

```js
// .postcssrc.js
module.exports = {
    "plugins": {
        // to edit target browsers: use "browserlist" field in package.json
        // 浏览器配置在 package.json 那里编辑
        "autoprefixer": {},
        "postcss-assets": {
            relative: true,
            loadPaths: ['./src/assets/images']
        }
    }
}
```

```scss
.logo {
    // url("src/assets/images/logo.png")
    // 页面显示的地址会被 webpack 处理过
    background-image: resolve("logo.png");
}
```

## scoped css
创建组件的时候，默认样式开启 css scoped。

```html
<style src="./home.scss" lang="scss" scoped></style>
```
css scoped 的好处是组件样式不会影响到其他组件或全局样式，也不会被其他组件(其他组件也是 scoped 的)影响，又不像 css module 那样需要修改 html 模板代码。如果你需要覆盖子组件的样式，可以使用 ** /deep/ **。具体例子可以参考 [scoped example](https://github.com/MMF-FE/vue-typescript/blob/master/template/src/components/views/scoped/scoped.scss)。

```scss
.parent {
    color: red;
    
    /deep/ {
        .child {
            color: green;
        }
    }
}
```
> 如果不使用 sass, 可以用 **>>>** 代替 **/deep/**
> 由于使用 scoped css, 所以不需要嵌套太多层选择器，尽量不要嵌套。