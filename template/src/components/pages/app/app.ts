import Vue from 'app/vueExt'
import VueComponent from 'vue-class-component'
import * as Template from './app.vue'

@VueComponent({
    name: 'App',
    mixins: [Template]
})
export default class App extends Vue {
}
