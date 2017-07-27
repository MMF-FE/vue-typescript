/**
 * Item
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-21 11:33:14
 * @since 1.0.0
 */

import Vue from 'components/base'
import { Component, Prop } from 'vue-property-decorator'
import template from './item.vue'

import { types, module } from 'store/modules/todo'

@Component({
    name: 'tag-todo-item',
    mixins: [template]
})
export default class Item extends Vue {
    @Prop()
    todo: Types.todo.TodoItem

    get status () {
        return this.todo.completed
    }

    set status (value) {
        this.toggleStatus({
            todo: this.todo,
            status: value
        })
    }

    @module.Mutation(types.mutation.removeTodo) remove
    @module.Mutation(types.mutation.toggleTodoStatus) toggleStatus
}
