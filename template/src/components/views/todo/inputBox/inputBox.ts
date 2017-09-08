/**
 * InputBox
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-21 11:48:03
 * @since 1.0.0
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './inputBox.vue'

import { Store } from 'store/modules/todo'

@Component({
    name: 'tag-todo-inputbox',
    mixins: [template]
})
export default class InputBox extends Vue {
    title = ''

    @Store.state todos: Types.todo.TodoItem[]

    @Store.getter isAllCompleted: boolean

    @Store.mutation
    addTodo: (todo: Types.todo.TodoItem) => void

    @Store.mutation('toggleAllTodoStatus')
    toggleAllStatus: (status: boolean) => void

    onEnter () {
        this.addTodo({
            title: this.title,
            completed: false
        })

        this.title = ''
    }
}
