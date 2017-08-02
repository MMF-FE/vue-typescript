# 存在的问题
升级到 vue-loader 13.x 和 webpack3.x 遇到不少兼容问题。目前还没解决的有以下问题

### 修改 vue 文件或样式文件都会刷新浏览器
这个目前定位到刷新的操作是在 build/dev-server.js 的一段代码。
```js
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})
```
目前模板已经注释掉这段代码了，如果修改了 build/tpl 里面的 html, 需要手动刷新。

### production 模式下没有将样式抽离到 css 文件
当 build production 的时候，如果你使用 `require.ensure` 的方式分离代码，组件里面的样式不会抽离到单独的 css 文件中，这个问题目前还没有找到解决办法。

> 在 `build/webpack.prod.conf.js` 文件中，你可以为插件 `extract-text-webpack-plugin` 设置 `allChunks: true`, 这样可以将所有的样式抽离到一个 css 文件中。

> refs: https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/120

> 如果你找到了解决方法，麻烦提交一下 [issue](https://github.com/MMF-FE/vue-typescript/issues) 或 [PR](https://github.com/MMF-FE/vue-typescript/pulls)