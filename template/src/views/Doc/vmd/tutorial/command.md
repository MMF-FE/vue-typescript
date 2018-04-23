# 命令
## 安装

```
yarn
yarn dll
```

## 使用

### 进入开发模式
```
yarn dev
```

### 生成 svg 图标
```
yarn svg
```

### CLI
请查看 [CLI](/#/tutorial__cli) 一节

### 编写文档
```bash
# 开发
# 第一次先运行 yarn dll:doc
yarn dll:doc
yarn doc

# 查看 build 后的文档
yarn doc:open
```

### build
```
yarn build
```
build 提供了编程接口以便 git hooks 使用。
```js
async function onUpdate() {
    let build = require('build/build')
    // 设置 build 的坏境
    process.env.ENV = 'dev'
    await build()
}
```

### update 更新依赖包
```
yarn update:ts       # 更新 typescript 相关依赖
yarn update:vue      # 更新 vue 相关依赖
```

### 代码格式化
**这里是全部文件格式化，请慎重使用。**
```
yarn format:js      # 格式化 typescript 和 js
yarn format:scss    # 格式化 scss
```
