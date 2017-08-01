# Vuex

By using vue-cli start a project with Vuex, will generate a todo list example by using Vuex [todo example](https://github.com/MMF-FE/vue-typescript/blob/master/template/src/components/views/todo/todo.ts).

## Use vuex

Template use [vuex-class](https://github.com/ktsn/vuex-class) to simplify vuex. Before use vuex, please read [vuex](https://vuex.vuejs.org/) for more information.

### Define state

The first step to use vuex is defining state.

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

### Write vuex module

```typescript
import Vuex from 'vuex'
import { State, Getter, Mutation, Action, namespace } from 'vuex-class'
import keymirror from '../utils/keymirror'

// Use vuexUtil methods to write getter, mutation 和 action
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
// vuex
import { types, module } from 'store/modules/todo'

class Todo extends Vue {
    @module.State(types.state.todos) allTodos

    @module.Getter(types.getter.filterTodos) todos

    @module.Mutation(types.mutation.setFilter) setFilter

    @module.Action(types.action.fetch) fetch
}
```



