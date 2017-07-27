import Vue from 'vue'
import App from 'components/pages/app'
import router from 'router'
import svgicon = require('vue-svgicon')
import store from 'store'

// import all icons
import 'components/icons'
Vue.use(svgicon, {
    tagName: 'icon'
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

