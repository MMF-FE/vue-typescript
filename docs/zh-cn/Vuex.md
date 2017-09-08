# Vuex

使用 vue-cli 创建项目，并且选择使用 vuex, 将会创建一个使用 vuex 的 [todo 例子](https://github.com/MMF-FE/vue-typescript/blob/master/template/src/components/views/todo/todo.ts)。

## 使用 vuex

模板使用了 [vuex-class](https://github.com/ktsn/vuex-class) 简化 vuex。使用 vuex 之前，请先了解 [vuex](https://vuex.vuejs.org/)。

### 定义模块 RootState

使用 vuex 的第一步是先定义 RootState。

```typescript
// typings/interface/state.d.ts
export namespace State {

    // root state
    export interface RootState {
        [key: string]: any
    }
}
```

### 编写 vuex 模块

```typescript
import Vuex from 'vuex'
import keymirror from '../utils/keymirror'

import {
    State as vState,
    Getter as vGetter,
    Mutation as vMutation,
    Action as vAction,
    namespace
} from 'vuex-class'

// Use vuexUtil methods to write getter, mutation and action
import {
    getter,
    mutation,
    action,
    decorator
} from '../utils/vuexUtil'


/*** state ***/
let state: TodoState = {}

/*** getters ***/
let getters = getter(state, {
    // getters
})

/*** mutations ***/
let mutations = mutation(state, {
    // mutations
})

/*** actions ***/
let actions = action(state, {
    // actions
})

/*** module store ***/
let store: Vuex.Module<TodoState, RootState> = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}

/*** exports ***/
export let types = {
    state: keymirror(state),
    getter: keymirror(getters),
    mutation: keymirror(mutations),
    action: keymirror(actions)
}


const storeName = 'todo'
export let State = decorator(namespace(storeName, vState), types.state)
export let Getter = decorator(namespace(storeName, vGetter), types.getter)
export let Mutation = decorator(namespace(storeName, vMutation), types.mutation)
export let Action = decorator(namespace(storeName, vAction), types.action)

export default store

```

### 在主 store 中加入该模块

```typescript
// import modules
import todo from './modules/todo'

const store = new Vuex.Store({
    modules: {
        todo
    }
})
```

### 在组件中使用

```typescript
// vuex
import { State, Getter, Mutation, Action } from 'store/modules/todo'

class Todo extends Vue {
    @State('todos')
    allTodos: Types.todo.Item[]
    
    // == @State('foo') foo: string
    @State
    foo: string
    
    @Getter('filterTodos')
    todos: Types.todo.Item[]

    @Mutation
    filterTodos: (filter: string) => void

    @Action
    fetch: () => Promise<any>
}

```
建议 state, getter, mutation, action 需要明确写出其类型。

