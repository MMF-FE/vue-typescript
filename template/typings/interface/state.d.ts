/**
 * State interface
 */


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

// 可以直接 export
// export interface MyState {
//     [key: string]: Types.PlainObject
// }
