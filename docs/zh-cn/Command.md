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
使用 **./tools/cli.js** 添加组件。组件模板在 tools/tpl, 你可以根据需要修改模板文件。

```text
选项：
  --version, -v  显示版本号                       [布尔]
  --help, -h     显示帮助信息                     [布尔]
  --type, -t     The component type
  --root, -r     The component root path        [默认值: "src/components"]
```
默认路径是从 **src/components** 开始的
```bash
# 添加组件, 
./tools/cli add [componentPath] -t [componentType]

# use npm script
npm run cli add [componentPath] -- -t [componentType]

# use yarn
yarn cli add [componentPath] -- -t [componentType]
```
### -t
**-t** 参数只是标记这个组件是什么类型的组件，可以根据这个参数选择不同的模板创建组件。默认是根据 componentPath 开始的路径名确定 component type。比如

```
# component type: view
yarn cli add views/home

# component type: tag
yarn cli add tags/hello

# component type: tag
yarn cli add views/home/list -- -t tag
```

### -r
**-r** 参数是指定根路径。如果你要创建的组件不在 **src/components**, 你可以通过设置该参数改变根路径。

```bash
yarn cli add tags/hello -- -r demo/components
```
以上会在 demo/components/tags/hello 创建一个 tag 类型的组件。