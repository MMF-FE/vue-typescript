import Vue from 'app/vueExt'
import VueComponent from 'vue-class-component'
import * as Template from './hello.vue'

@VueComponent({
    mixins: [Template]
})
export default class Hello extends Vue {
    msg = 'Welcome to Your Vue.js App'
}
