# Vuex

使用 vue-cli 创建项目，并且选择使用 vuex, 将会创建一个使用 vuex 的 [todo 例子](https://github.com/MMF-FE/vue-typescript/blob/master/template/src/components/views/todo/todo.ts)。

## 使用 vuex

模板使用了 [vuex-class](https://github.com/ktsn/vuex-class) 简化 vuex。使用 vuex 之前，请先了解 [vuex](https://vuex.vuejs.org/)。

### 定义模块 state

使用 vuex 的第一步是先定义模块的 state 有哪一些。

```typescript
// typings/interface/state.d.ts
export namespace State {

    // root state
    export interface RootState {
        [key: string]: any
    }

    // todo state
    export interface TodoState {
        filter: string
        todos: Types.todo.TodoItem[]
    }
}
```

### 编写 vuex 模块

```typescript
import Vuex from 'vuex'
import { State, Getter, Mutation, Action, namespace } from 'vuex-class'
import keymirror from '../utils/keymirror'

// 使用 vuexUtil 提供的方法编写 getter, mutation 和 action
import { getter, mutation, action } from '../utils/vuexUtil'

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

export let module = {
    State: namespace('todo', State),
    Getter: namespace('todo', Getter),
    Mutation: namespace('todo', Mutation),
    Action: namespace('todo', Action)
}

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
import { types, module } from 'store/modules/todo'

class Todo extends Vue {
    @module.State(types.state.todos) allTodos

    @module.Getter(types.getter.filterTodos) todos

    @module.Mutation(types.mutation.setFilter) setFilter

    @module.Action(types.action.fetch) fetch
}
```



