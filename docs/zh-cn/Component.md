# 组件
本模板没有使用单文件组件，每个组件由四个文件组成，这是因为目前编辑器对 *.vue 文件的支持性不是很强。

## 组件结构

```
├── hello.scss
├── hello.ts        
├── hello.vue
└── index.ts
```

## vue 文件
可以看到，组件模板是使用 vue 文件的，而不是使用 html, 这是因为可以借助 vue-loader 将单文件组件的优势融入进来。

```html
<!-- vue 文件 -->
<template>
    <div>
        <h1>Hello {{name}}</h1>
    </div>
</template>
<style src="./hello.scss" lang="scss" scoped></style>
```

## ts 文件
使用 typescript 编写组件，我们使用了 [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator), 具体使用方式，请参考其文档。

```typescript
import Vue from 'components/base'
import { Component, Prop } from 'vue-property-decorator'
import template from './hello.vue'

@Component({
    name: 'tag-hello',
    mixins: [template] // 使用 mixins 将 vue 文件的功能混合进来
})
export default class Hello extends Vue {
    // 定义 prop
    @Prop({ default: 'World' })
    name: string
    
    // computed
    get fullname () {
        return `hello, ${this.name}`
    }
    
    // method
    say () {
        console.log(this.fullname)
    }
}


```
> 注意：[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) 的 Component 装饰器来自 [vue-class-component](https://github.com/vuejs/vue-class-component), 需要看一下该文档

## 样式
请参考 [样式](/zh-cn/Style.md) 一节。

## index.ts
这个文件是组件的入口文件，方便其他组件导入。

```typescript
export * from './hello.ts'
```

为什么不直接将 hello.ts 命名为 index.ts 呢？这是因为考虑到编辑器打开文件的时候显示文件名的问题，不然显示 index.ts 你都不知道这个是哪个组件。如果不想要 index.ts, 你可以修改 cli 的组件模板。

## 引入其他组件或模块
引入其他组件或模块，默认以 src 目录开始查找的。

```js
// 引入 'src/components/tags/hello'
import Hello from 'components/tags/hello'
```
如果你使用 vscode 开发的话，建议设置以下选项：
```json
{
    "editor.quickSuggestions": {
        "other": true,
        "comments": false,
        "strings": true
    }
}
```
这样你 import 的时候就有路径提示。
