/**
 * Footer
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-21 11:33:39
 * @since 1.0.0
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './footer.vue'

import Filters from '../filter'

import { types, module} from 'store/modules/todo'

@Component({
    name: 'tag-todo-footer',
    mixins: [template],
    components: {
        Filters
    }
})
export default class Footer extends Vue {
    @module.Getter(types.getter.remaining) remaining: Types.todo.TodoItem[]
    @module.Getter(types.getter.completed) completed: Types.todo.TodoItem[]

    @module.Mutation(types.mutation.clearComplete) clearComplete
}
