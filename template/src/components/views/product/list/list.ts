/**
 * List
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-18 22:56:47
 * @since 1.0.0
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './list.vue'

@Component({
    name: 'view-product-list',
    mixins: [template]
})
export default class List extends Vue {

}
