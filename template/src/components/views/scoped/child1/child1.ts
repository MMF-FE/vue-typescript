/**
 * Child1
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-23 23:27:16
 * @since 1.0.0
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './child1.vue'

@Component({
    name: 'tag-scoped-child1',
    mixins: [template]
})
export default class Child1 extends Vue {

}
