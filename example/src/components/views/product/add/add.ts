/**
 * Add
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-18 23:26:44
 * @since 1.0.0
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './add.vue'

@Component({
    name: 'product-add',
    mixins: [template]
})
export default class Add extends Vue {

}
