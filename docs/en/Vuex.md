# Vuex

By using vue-cli start a project with Vuex, will generate a todo list example by using Vuex [todo example](https://github.com/MMF-FE/vue-typescript/blob/master/template/src/components/views/todo/todo.ts).

## Use vuex

Template use [vuex-class](https://github.com/ktsn/vuex-class) to simplify vuex. Before use vuex, please read [vuex](https://vuex.vuejs.org/) for more information.

### Define root state

The first step to use vuex is defining root state.

```typescript
// typings/interface/state.d.ts
export namespace State {

    // root state
    export interface RootState {
        [key: string]: any
    }
}
```

### Write vuex module

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

### Add module into main store

```typescript
// import modules
import todo from './modules/todo'

const store = new Vuex.Store({
    modules: {
        todo
    }
})
```

### Use in components

```typescript
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



