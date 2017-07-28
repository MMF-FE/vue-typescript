# 类型定义
类型定义存放在 **typings** 文件夹。关于类型定义，建议参考 [declaration templates](https://www.typescriptlang.org/docs/handbook/declaration-files/templates.html)


## Types 命名空间
默认所有的自定义类型都存放在 **Types** 的命名空间里面。你可以根据需要修改这个名字。

```typescript
// typings/interface/index.d.ts
export as namespace Types

// 混合其他模块的类型定义
export * from './state'
export * from './todo'

export interface PlainObject {
    [key: string]: any
}
```

可以在 ts 文件中直接使用 **Types**

```typescript
let a: Types.PlainObject
```