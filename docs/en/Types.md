# Type definition
Type definitions is under **typings**. For defining types，please go to [declaration templates](https://www.typescriptlang.org/docs/handbook/declaration-files/templates.html)


## Types naming space
By default, every customized type is under **Types**. You can change names based on your needs.

```typescript
// typings/interface/index.d.ts
export as namespace Types

// mix other modules type definition
export * from './state'
export * from './todo'

export interface PlainObject {
    [key: string]: any
}
```

You can use **Types** in ts files directly

```typescript
let a: Types.PlainObject
```