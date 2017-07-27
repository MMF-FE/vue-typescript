/**
 * Filter
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-21 11:33:30
 * @since 1.0.0
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './filter.vue'

@Component({
    name: 'tag-todo-filter',
    mixins: [template]
})
export default class Filter extends Vue {

}
