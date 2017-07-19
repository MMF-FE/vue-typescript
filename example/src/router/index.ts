import Vue from 'vue'
import Router from 'vue-router'

// routes
import homeRoute from './home'
import productRoute from './product'

Vue.use(Router)

let routes: Router.RouteConfig[] = []

export default new Router({
    routes: routes
        .concat(homeRoute)
        .concat(productRoute)
})
