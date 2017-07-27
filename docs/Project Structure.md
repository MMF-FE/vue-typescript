# Project Structure
```text
.
├── build                   # 项目构建配置目录
│   ├── config              # 开发模式和生产模式配置
│   │   ├── index.js
│   ├── tpl                 # html 模板
│   │   └── index.html
│   └── ...
├── src
│   ├── api                 # 后端接口配置
│   │   ├── http.ts
│   │   ├── index.ts
│   │   └── modules         # 后端接口模块
│   │       └── ...
│   ├── assets              # module assets (processed by webpack)
│   │   └── svg             # 存放 svg 图标源文件
│   │       └── ...
│   ├── components          # 组件
│   │   ├── base.ts         # 组件基类，所有组件继承自它
│   │   ├── icons           # 生产的 svg 图标
│   │   ├── pages           # 页面级组件
│   │   ├── tags            # 全局组件 (自定义标签)
│   │   └── views           # 视图级组件
│   ├── env                 # 坏境配置
│   ├── main.ts             # 入口文件
│   ├── router              # 路由
│   ├── store               # vuex store
│   │   ├── modules         # vuex 模块
│   │   └── utils           # vuex 辅助
│   └── style               # 样式
├── static                  # pure static assets (directly copied)
├── tools                   # 工具，比如用来创建组件
└── typings                 # 类型定义文件
│   ├── globals.d.ts        # 全局类型定义
│   └── interface           # 接口定义
├── tsconfig.json           # typescript 配置
├── tslint.json             # typescript 格式检查
├── .editorconfig           # 编辑器格式配置
├── .npmrc                  # npm 配置
├── .postcssrc.js           # postcss 配置
├── .stylelintrc.js         # 样式检查
```