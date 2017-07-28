{{#ie}}
import 'vue-svgicon/dist/polyfill'
{{/ie}}
import Vue from 'vue'
import App from 'components/pages/app'
import router from 'router'
import svgicon = require('vue-svgicon')
{{#vuex}}
import store from 'store'
{{/vuex}}

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

