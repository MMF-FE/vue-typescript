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

import { Getter, Mutation } from 'store/modules/todo'

@Component({
    name: 'tag-todo-footer',
    mixins: [template],
    components: {
        Filters
    }
})
export default class Footer extends Vue {
    @Getter
    remaining: Types.todo.Item[]

    @Getter
    completed: Types.todo.Item[]

    @Mutation
    clearComplete: () => void
}
