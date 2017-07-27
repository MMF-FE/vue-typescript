/**
 * Scoped
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-23 23:27:05
 * @since 1.0.0
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './scoped.vue'

import Child1 from './child1'
import Child2 from './child2'

@Component({
    name: 'view-scoped',
    mixins: [template],
    components: {
        Child1,
        Child2
    }
})
export default class Scoped extends Vue {

}
