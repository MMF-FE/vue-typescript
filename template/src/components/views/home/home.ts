import Vue from 'app/vueExt'
import VueComponent from 'vue-class-component'
import { Watch, Prop } from 'vue-property-decorator'
import { State, Mutation, Getter, Action} from 'vuex-class'
import * as Template from './home.vue'
import Hello from 'components/tags/hello'

@VueComponent({
    name: 'Home',
    mixins: [Template],
    components: {
        'hello': Hello
    }
})
export default class Home extends Vue {
    offsetCout = 100

    @State('content') content
    @State('count') count
    @State(function (state) {
        return state.count + this.offsetCout
    }) countWithOffset

    @Mutation('add') plus
    @Getter('doubleCount') doubleCount
    @Action('getContent') getContent

    async testVuex () {
        this.plus()
        try {
            await this.getContent({arg: 0})
        } catch (err) {
            console.log(err)
            return  false
        }
    }
}

