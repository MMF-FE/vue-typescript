# 构建命令
```bash
# 开发模式
npm run dev

# 构建开发环境
npm run build:dev

# 构建 sit 环境
npm run build:sit

# 构建 deploy 环境
npm run deploy

# 生成 svg 图标
npm run svg

```

## 添加组件
使用 **./tools/cli.js** 添加组件。
```text
选项：
  --version, -v  显示版本号                                               [布尔]
  --help, -h     显示帮助信息                                             [布尔]
  --type, -t     The component type
                                  [可选值: "view", "ui", "tag"] [默认值: "view"]
  --path, -p     The target path                      [默认值: "src/components"]
```
```bash
# 添加组件, 
./tools/cli.js add [componentName] -t [componentType]

# 如果只是添加 view, 而且已经安装 yarn
yarn cli add [componentName] -t [componentType]
```

componentName 可以是路径
```bash
./tools/cli.js add public/login -t view
```
以上会在 src/components/views/public/login 创建一个 view 类型的组件。
##### 
**-p** 参数是指定根路径。如果你要创建的组件不在 **src/components**, 你可以通过设置该参数改变根路径。

```bash
./tools/cli.js add hello -t tag -p demo/components
```
以上会在 demo/components/tags/hello 创建一个 tag 类型的组件。