
<style lang="scss" scoped>
    @import "~style/base/_base.scss";

    /deep/ {
        div.tab-header {
            display: none;
        }

        div.tab-panel {
            height: auto;
        }
    }

    .icon-list {
        display: flex;
        flex-wrap: wrap;
    }

    .icon {
        width: 100px;
        margin: 10px 5px;
        border-radius: 4px;
        text-align: center;

        /deep/ {
            .svg-icon {
                width: 80px;
                height: 80px;
            }
        }
    }

    .icon-name {
        line-height: 24px;
        font-size: 16px;
    }
</style>
<script lang="ts">
    import 'components/icons'

    import Vue from 'vue'
    import { Component } from 'vue-property-decorator'
    import { icons } from 'vue-svgicon'

    @Component({
        name: 'svg-demo'
    })
    export default class SvgDemo extends Vue {
        protected get iconList(): string[] {
            if (icons) {
                return Object.keys(icons)
            }
            return []
        }
    }
</script>

# SVG ICONS

本项目使用 [`vue-svgicon`](https://github.com/MMF-FE/vue-svgicon) 生成 svg 图标

## 生成图标

* 将 svg 源文件放到 `src/assets/svg`
* 运行命令 `yarn svg`

> 如果与方向有关的图标，比如 `arrow`, 只需导出向上方向的图标，然后通过 `dir` 属性控制上下左右方向

## 使用图标

```ts
// main.ts, (代码已默认生成)
import * as svgicon from 'vue-svgicon'

// 引入所有的图标
import 'components/icons'

// 配置 svg icon 插件
Vue.use(svgicon, {
    tagName: 'icon'
})
```

```html
<icon name="vue"></icon>
```

更详细的使用方式，请查看：https://github.com/MMF-FE/vue-svgicon

## 图标列表
:::demo
```html
<div class="icon-list">
    <div class="icon" v-for="v in iconList">
        <icon :name="v" original></icon>
        <p class="icon-name">{{ v }}</p>
    </div>
</div>
```
:::
