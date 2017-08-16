import Vue from 'components/base'
import { Component, Watch, Prop } from 'vue-property-decorator'
import template from './home.vue'
import Hello from 'components/tags/hello'

@Component({
    name: 'view-home',
    mixins: [template],
    components: {
        Hello
    }
})
export default class Home extends Vue {
    async created () {
        // api example
        let res = await this.api.getPackage({})
        console.log(res.content)
    }

    beforeRouteEnter (to, from, next) {
        console.log('before home enter')
        next()
    }

    beforeRouteLeave (to, from, next) {
        console.log('before home leave')
        next()
    }
}

