# Styling
Use sass(scss) by default. Configuration is under build/utils.js shown as follow:

```js
scss: generateLoaders('sass', {
    includePaths: [
        path.join(__dirname, '../src/style'),
        path.join(__dirname, '../node_modules')
    ]
})
```
import sass by default is start from src/style or node_modules, so even you have very deep directory structure, it would be easy to import style.
> Attention：If import style from node_modules, please prefix  **~**

```scss
@import "base/base"; // import src/style/base/_base.scss

@import "~normalize.css"; // import node_modules/normalize.css
```

## base.scss
src/style/base/_base.scss can only import modules doesn't generate code, such as, variables, mixins, etc. 

## Resouce path（assets）
sass import（assets）use [postcss-assets](https://github.com/borodean/postcss-assets) reslove method. By default, root path is src/assets/images. You can modify .postcssrc.js to change or add path.

```js
// .postcssrc.js
module.exports = {
    "plugins": {
        // to edit target browsers: use "browserlist" field in package.json
        // Browser config is in package.json
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
    // The address in actually page is produced by webpack
    background-image: resolve("logo.png");
}
```

## scoped css
When add components, the default style already enabled css scoped

```html
<style src="./home.scss" lang="scss" scoped></style>
```
The advantage of css scoped is that components styles will not affect other components styles or vice versa, and does not need to change html template like css module. If you want to override child components styles, you can use ** /deep/ **. Here is the example [scoped example](https://github.com/MMF-FE/vue-typescript/blob/master/template/src/components/views/scoped/scoped.scss)。

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
> If you don't use sass, you can use **>>>** instead of **/deep/**
> Because using scoped css, please don't use too many nested selector or don't use nested.