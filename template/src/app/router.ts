import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = []

function addRoute(path: string, name: string, view: any) {
    routes.push({
        path: path,
        name: name,
        component: view.default
    })
    return addRoute
}

addRoute
// home
('/', 'home', require('components/views/home'))
// default view
('*', 'defaultView', require('components/views/home'))

export default new Router({
    routes: routes
})
