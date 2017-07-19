/**
 * ProductDetail
 * @author allenice
 * @since 2017-07-18 05:46:19
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './productDetail.vue'

@Component({
    name: 'ProductDetail',
    mixins: [template]
})
export default class ProductDetail extends Vue {

}
