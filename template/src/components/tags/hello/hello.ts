import Vue from 'components/base'
import { Component, Prop } from 'vue-property-decorator'
import template from './hello.vue'

@Component({
    name: 'tag-hello',
    mixins: [template]
})
export default class Hello extends Vue {
    @Prop({ default: 'World' })
    name: string
}
