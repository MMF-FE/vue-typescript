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
                'todo': require('components/views/todo')
            }

            resolve(map[viewName])
        }, reject, 'home')
    }
}

let routes: Router.RouteConfig[] = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'defaultView',
        path: '*',
    },
    {
        name: 'todo',
        path: '/todo/:filter?'
    }
]

routes.forEach((v) => {
    v.component = getView(v.name)
})

export default routes
