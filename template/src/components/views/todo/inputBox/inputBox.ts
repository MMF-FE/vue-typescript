/**
 * InputBox
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-21 11:48:03
 * @since 1.0.0
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './inputBox.vue'

import { types, module } from 'store/modules/todo'

@Component({
    name: 'tag-todo-inputbox',
    mixins: [template]
})
export default class InputBox extends Vue {
    title = ''

    @module.State(types.state.todos) todos

    @module.Getter(types.getter.isAllCompleted) isAllCompleted

    @module.Mutation(types.mutation.addTodo) addTodo
    @module.Mutation(types.mutation.toggleAllTodoStatus) toggleAllStatus

    onEnter () {
        this.addTodo({
            title: this.title,
            completed: false
        })

        this.title = ''
    }
}
