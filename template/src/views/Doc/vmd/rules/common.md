# 通用规范
- 本规范在 [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/index.html)进行修改，建议在阅读本文档之前，先阅读 [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/index.html)。

## 组件名为多个单词 <em class="rule-a"></em>
**组件名应该始终是多个单词的，pages, views 组件除外。** <br>
这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的
> https://cn.vuejs.org/v2/style-guide/index.html#%E7%BB%84%E4%BB%B6%E5%90%8D%E4%B8%BA%E5%A4%9A%E4%B8%AA%E5%8D%95%E8%AF%8D-%E5%BF%85%E8%A6%81


## components 文件夹
`src/components` 存放的是全局公用的组件。如果组件只在某个模块或 view 组件中使用，将这个组件放在对应的 `components` 目录下，而且这个 `components` 目录不能再分第二级目录。

## 组件名大写开头 <em class="rule-a"></em>
因为我们组件的目录结构是多层的，每个组件分为四个文件放在一个文件夹，为了区分普通文件夹和组件，约定组件名都大写开头，普通文件夹全小写(kebab-case)。
``` bash
views
    |-customer                              # 模块
        |-components                        # 模块公用的组件
            |-CustomerFilter
        |-CustoemrList                      # 模块中的 view 组件
                |-components                # view 组件下的普通组件
                    |-CustomerListItem
        |-CustomerDetail
```

## 紧密耦合的组件名 <em class="rule-b"></em>
**和父组件紧密耦合的子组件应该以父组件名作为前缀命名。和父组件紧密耦合的子组件应该以父组件名作为前缀命名。** <br>
如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。<br>
> https://cn.vuejs.org/v2/style-guide/index.html#%E7%B4%A7%E5%AF%86%E8%80%A6%E5%90%88%E7%9A%84%E7%BB%84%E4%BB%B6%E5%90%8D-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90

## 应该尽量避免多个层级的文件目录。<em class="rule-b"></em>
按照 `紧密耦合的组件名` 的规则命名组件，避免过多层级的文件目录。
```
# 反例
components/
    |-Menu
        |-Item

# 好例子
components/
    |-Menu
    |-MenuItem
```

## 完整单词组件名 <em class="rule-b"><em>
组件名应该倾向于完整单词而不是缩写。
> https://cn.vuejs.org/v2/style-guide/index.html#%E5%AE%8C%E6%95%B4%E5%8D%95%E8%AF%8D%E7%9A%84%E7%BB%84%E4%BB%B6%E5%90%8D-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90
