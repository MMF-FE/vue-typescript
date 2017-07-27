/**
 * Child2
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-23 23:27:36
 * @since 1.0.0
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './child2.vue'

@Component({
    name: 'tag-scoped-child2',
    mixins: [template]
})
export default class Child2 extends Vue {

}
