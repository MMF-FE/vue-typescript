import Vue from 'app/vueExt'
import { Component } from 'vue-property-decorator'
import * as Template from './hello.vue'

@Component({
    mixins: [Template]
})
export default class Hello extends Vue {
    msg = 'Welcome to Your Vue.js App'
}
