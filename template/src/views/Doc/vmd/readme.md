<style lang="scss" scoped>
    @import "~style/base/base";

    .demo-wrap {
        padding: 10px;
    }

    .my-input {
        width: 156px;
        height: 36px;
        padding: 0 10px;
        margin-bottom: 10px;
        border: 1px solid #DCDCDC;
        color: $color-primary;
    }

    button {
        height: 36px;
        padding: 0 10px;
    }
</style>
<script lang="ts">
import Vue from 'components/base'
import { Component, Watch, Prop } from 'vue-property-decorator'

@Component({
    name: 'demo'
})
export default class Demo1 extends Vue  {
    input = ''

    submit () {
        alert(this.input)
    }
}
</script>

# Develop Docuemnt

本文档是开发文档，包括常用命令，教程，规范和基础组件等等。

## 文档编写流程

* `yarn doc` 进入文档开发模式
* 在 **src/components/views/doc/vmd** 下建一个 markdown 文档
* 在 **views/doc/menuConfig.ts** 设置侧栏菜单
* 写完后， `yarn doc:build` 编译文档
* build 完之后，查看文档可以直接 `yarn doc:open`

## 文档结构
```
.
├── basic           # 基础文档，比如颜色配置，按钮等基础元素的文档
├── components      # 组件文档，如果组件是一系列的，可以考虑新建一个文件夹，比如 form 表单相关的
├── form            # form 表单文档
├── rules           # 代码规范文档
└── tutorial        # 教程或笔记文档
├── readme.md       # 前言
├── structure.md    # 项目结构
```
> 文件夹都是预设的，可以根据自身项目需要修改结构

## 在文档中运行 vue 代码和展示实例代码
### 运行代码
每个 markdown 文件的只会运行一个 script 标签的代码。运行的代码或整个文档的 demo 样式都需要写在文件的开头位置。 模板代码(html) 和当前例子的样式需要写到对应列子的 demo 位置，不需要写在开头。
```html
<style lang="scss" scoped>
    @import "~style/base/base";
</style>
<script lang="ts">
    import Vue from 'components/base'
    import { Component, Watch, Prop } from 'vue-property-decorator'

    @Component({
        name: 'demo'
    })
    export default class Demo1 extends Vue  {
        // write your code for the demo of this markdown file
    }
</script>
... markdown main content
```

### 展示实例代码
```txt
: : : demo [描述]
` ` `html
...template code
<style></style>
<script></script>
` ` `
: : :
```

模板代码写在当前例子, script 代码从开头的代码那里拷贝过来。
::: demo 使用 style, 的时候，注意使用 `~style/xxxx`, 而且不需要 `template` 标签
```html
<div class="demo-wrap">
    <input v-model="input" placeholder="请输入内容" class="my-input"></input>
    <button class="submit-btn" @click="submit">Submit</button>
</div>

<script lang="ts">
import Vue from 'components/base'
import { Component, Watch, Prop } from 'vue-property-decorator'

@Component({
    name: 'demo'
})
export default class Demo1 extends Vue  {
    input = ''

    submit () {
        alert(this.input)
    }
}
</script>
```
:::

