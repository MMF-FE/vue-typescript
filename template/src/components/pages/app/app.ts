import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './app.vue'

@Component({
    name: 'page-app',
    mixins: [template]
})
export default class App extends Vue {

}
