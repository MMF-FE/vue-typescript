{{#ie}}
import 'vue-svgicon/dist/polyfill'
{{/ie}}
import Vue from 'vue'

// register plugins hooks fo vue component
import 'common/registerHooks'

import * as svgicon from 'vue-svgicon'
// import all icons
import 'components/icons'

import router from 'router'
{{#vuex}}
import store from 'store'
{{/vuex}}

import App from 'components/pages/app'

// import all icons
import 'components/icons'
Vue.use(svgicon, {
    tagName: 'icon'
})

new Vue({
    el: '#app',
    router,
    {{#vuex}}
    store,
    {{/vuex}}
    render: h => h(App)
})
