import 'style/app.scss'
import Vue from 'vue'
import store from 'store'
import App from 'components/pages/app'
import router from 'app/router'
import svgicon = require('vue-svgicon')

// import all icons
import 'components/icons'

Vue.use(svgicon, {
    tagName: 'icon'
})

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
