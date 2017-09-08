/**
 * InputBox
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-21 11:48:03
 * @since 1.0.0
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './inputBox.vue'

import { State, Getter, Mutation } from 'store/modules/todo'

@Component({
    name: 'tag-todo-inputbox',
    mixins: [template]
})
export default class InputBox extends Vue {
    title = ''

    @State
    todos: Types.todo.Item[]

    @Getter
    isAllCompleted: boolean

    @Mutation
    addTodo: (todo: Types.todo.Item) => void

    @Mutation('toggleAllTodoStatus')
    toggleAllStatus: (status: boolean) => void

    onEnter () {
        this.addTodo({
            title: this.title,
            completed: false
        })

        this.title = ''
    }
}
