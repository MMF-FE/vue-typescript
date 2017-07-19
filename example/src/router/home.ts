/**
 * home module router
 */

import Router from 'vue-router'

function getView (viewName) {
    return resolve => {
        require.ensure([], (require: any) => {
            let map = {
                'home': require('components/views/home').default,
                'defaultView': require('components/views/home').default
            }

            resolve(map[viewName])
        }, 'home')
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
    }
]

routes.forEach((v) => {
    v.component = getView(v.name)
})

export default routes
