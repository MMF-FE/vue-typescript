<style lang="scss" scoped>
    section {
        /deep/ {
            pre, code {
                line-height: 2em !important;
            }
        }
    }
</style>

# 项目结构
```bash
.
├── build                   # webpack 相关
│   ├── config
│   ├── tpl                 # 页面模板
├── src
│   ├── api                 # 后端 api 接口
│   │   └── modules         # 后端 api 接口模块
│   ├── assets              # 资源文件夹
│   │   ├── images
│   │   └── svg             # svg 图标源文件
│   ├── common              # 通用代码
│   ├── components          # 通用组件
│   │   ├── base.ts         # 组件基类
│   │   └── icons           # svg 图标生成文件
│   ├── env                 # 坏境配置
│   ├── pages               # 页面级组件
│   ├── views               # 视图级组件
│   └── router              # 路由配置
│   ├── store               # vuex store
│   │   ├── modules         # vuex 全局模块
│   │   └── utils           # vuex 辅助工具
│   ├── style               # 全局样式
│   │   └── base
├── static                  # 不需要经过 webpack 处理的静态文件
├── tools                   # 命令行工具
│   ├── cli.ts
│   ├── command             # cli 命令配置
├── typings                 # typescript 类型定义
└──
```
