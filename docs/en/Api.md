# Use APIs
Use [axios](https://github.com/mzabriskie/axios) as default http client

## http.ts

**src/api/http.ts** already sealed axios. Right now it only sealed get and post methods inside. Other http request methods can be extended by yourself.

### get

```typescript
function get<T>(url, data?: Types.PlainObject): Promise<T> {
}
```
**T** is the type response data 

```typescript
// The /list response data type is {status: number,list: any[]}
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
**src/api/index.ts** is server-side api configuration. It seperates different modules into several files.
## Use Api in Components
Each Components has **api** property by default, which comes from src/api/index.ts

```typescript
export default class Home extends Vue {
    async created () {
        // api example
        let res = await this.api.getList({})
        console.log(res.list)
    }
}

```
