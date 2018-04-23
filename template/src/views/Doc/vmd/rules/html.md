# HTML (模板) 规范
- 本规范在 [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/index.html)进行修改，建议在阅读本文档之前，先阅读 [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/index.html)。

## 为 `v-for` 设置键值 <em class="rule-a"></em>

> 标签能加 key 的尽量加一个, 比如 HTML 结构有点类似，容易混淆的, Element UI 的 popover。加 key  能避免一些不可预知的 bug。
<br>
> https://cn.vuejs.org/v2/style-guide/index.html#%E4%B8%BA-v-for-%E8%AE%BE%E7%BD%AE%E9%94%AE%E5%80%BC-%E5%BF%85%E8%A6%81

## 避免 `v-if` 和 `v-for` 用在一起 <em class="rule-a"></em>
https://cn.vuejs.org/v2/style-guide/index.html#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7-%E5%BF%85%E8%A6%81

## 标签属性有三个或以上的，需要换行写 <em class="rule-a"></em>
```html
<div
    v-for="v in list"
    :key="v.id"
    :value="v.value">
    {{ v.name }}
</div>
```

## 元素特性的顺序 <em class="rule-a"></em>
顺序为：，指令, props(带 `:` 在不带 `:` 的后面), 事件
```html
<div
    v-show="isShow"
    v-for="v in list"
    class="demo"
    cus-props="1"
    :key="v.id"
    :value="v.value"
    @click="handleClick"
    @keyup="handleKeyup">
    {{ v.name }}
</div>
```

## 属性能合并写的，就合并写。<em class="rule-a"></em>

```html
<!-- wrong -->
<div
    class="demo"
    :class="{
        'is-active': isActive
    }"
    @click="handleClick">
    Hello
</div>

<!-- ok -->
<div
    :class="{
        'demo': true,
        'is-active': isActive
    }"
    @click="handleClick">
    Hello
</div>

<!-- ok -->
<div
    :class="[
        'demo',
        isActive ? 'is-active' : ''
    ]"
    @click="handleClick">
    Hello
</div>
```

## 模板中的组件名大小写 <em class="rule-b"><em>
统一使用 kebab-case。
```html
<my-component></my-component>
```
> https://cn.vuejs.org/v2/style-guide/index.html#%E6%A8%A1%E6%9D%BF%E4%B8%AD%E7%9A%84%E7%BB%84%E4%BB%B6%E5%90%8D%E5%A4%A7%E5%B0%8F%E5%86%99-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90

## 模板中简单的表达式 <em class="rule-b"><em>
组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。
> https://cn.vuejs.org/v2/style-guide/index.html#%E6%A8%A1%E6%9D%BF%E4%B8%AD%E7%AE%80%E5%8D%95%E7%9A%84%E8%A1%A8%E8%BE%BE%E5%BC%8F-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90
