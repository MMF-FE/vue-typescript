# 使用后端接口
使用 [axios](https://github.com/mzabriskie/axios) 作为默认的 http client

## http.ts

**src/api/http.ts** 对 axios 进行了封装，目前只封装了 get, post 方法，需要其他 http 请求 method 可以自行封装。

### get

```typescript
function get<T>(url, data?: Types.PlainObject): Promise<T> {
}
```
**T** 是接口返回的数据类型

```typescript
// 这里 /list 的接口返回的数据格式是 {status: number,list: any[]}
{
    getList (params: any) {
        return get<{
            status: number
            list: any[]
        }>('/list', params)
    }
}
```

### post
```typescript
function post<T>(url, data?: Types.PlainObject): Promise<T> {
}

```

## index.ts
**src/api/index.ts** 是后端接口配置。可以将不同模块的接口拆分成几个文件。

## 在组件中使用 Api
每个组件默认都有 **api** 这个成员，**api** 就是来自 src/api/index.ts

```typescript
export default class Home extends Vue {
    async created () {
        // api example
        let res = await this.api.getList({})
        console.log(res.list)
    }
}

```
