# Components
This template does not use single file component. Each component consists of 4 files. The reason to do like this is because the editor does not support *.vue files well enough.

## Components structrue

```
// for example, we have a components called 'hello'.
├── hello.scss
├── hello.ts        
├── hello.vue
└── index.ts
```

## vue file
As you can see, component template is using .vue file rather than .html file. That is because we can use vue-loader to take advantage of vue single file.

```html
<!-- vue file -->
<template>
    <div>
        <h1>Hello {{name}}</h1>
    </div>
</template>
<style src="./hello.scss" lang="scss" scoped></style>
```

## ts file
we use [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) to write typescript component. For the usage, you can read their document.

```typescript
import Vue from 'components/base'
import { Component, Prop } from 'vue-property-decorator'
import template from './hello.vue'

@Component({
    name: 'tag-hello',
    mixins: [template] // use mixins to mix vue file functions
})
export default class Hello extends Vue {
    // define prop
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
> Attention：[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) Component decorator is from [vue-class-component](https://github.com/vuejs/vue-class-component), please read the document.

## Styling
Please go to chapter [Styling](./Style.md).

## index.ts
This is component entry file, so that it will be easy to import other components.

```typescript
export * from './hello.ts'
```

The reason we don't name hello.ts as index.ts is considering editor is  always showing file name, thus you will never know which component it belongs to, unless you want to change cli compoent template.

## Import other components or templates
Import root path is src by default.

```js
// import 'src/components/tags/hello'
import Hello from 'components/tags/hello'
```
If you are using vscode，please consider the following configuration：
```json
{
    "editor.quickSuggestions": {
        "other": true,
        "comments": false,
        "strings": true
    }
}
```
so when you import module, editor will hint the path.
