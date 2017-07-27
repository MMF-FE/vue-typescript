/**
 * home module router
 */

import Router from 'vue-router'

function getView (viewName) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            let map = {
                'home': require('components/views/home'),
                'defaultView': require('components/views/home'),
                'todo': require('components/views/todo'),
                'scoped': require('components/views/scoped')
            }

            resolve(map[viewName])
        }, reject, 'home')
    }
}

let routes: Router.RouteConfig[] = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'defaultView',
        path: '*'
    },
    {
        name: 'todo',
        path: '/todo/:filter?'
    },
    {
        name: 'scoped',
        path: '/scoped'
    }
]

routes.forEach((v) => {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name)
    }
})

export default routes
