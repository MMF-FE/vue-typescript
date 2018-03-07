/**
 * document router
 */

import Router, { RouteConfig } from 'vue-router'

import Vue from 'vue'

// routes
Vue.use(Router)

let routes: RouteConfig[] = [
    {
        name: 'home',
        path: '/:md?',
        component: require('views/Doc').default
    }
]

export default new Router({
    routes: routes
})
