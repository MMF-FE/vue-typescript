/**
 * Item
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-21 11:33:14
 * @since 1.0.0
 */

import Vue from 'components/base'
import { Component, Prop } from 'vue-property-decorator'
import template from './item.vue'

import { Store } from 'store/modules/todo'

@Component({
    name: 'tag-todo-item',
    mixins: [template]
})
export default class Item extends Vue {
    @Prop()
    todo: Types.todo.TodoItem

    @Store.mutation('removeTodo')
    remove: (todo: Types.todo.TodoItem) => void

    @Store.mutation('toggleTodoStatus')
    toggleStatus: (payload: { todo: Types.todo.TodoItem, status: boolean }) => void

    get status () {
        return this.todo.completed
    }

    set status (value) {
        this.toggleStatus({
            todo: this.todo,
            status: value
        })
    }
}
