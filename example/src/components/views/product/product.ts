import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './product.vue'

@Component({
    name: 'Product',
    mixins: [template]
})
export default class Product extends Vue {

}
