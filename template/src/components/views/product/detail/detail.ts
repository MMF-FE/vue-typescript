/**
 * Detail
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-18 22:56:43
 * @since 1.0.0
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './detail.vue'

@Component({
    name: 'view-product-detail',
    mixins: [template]
})
export default class Detail extends Vue {
}
