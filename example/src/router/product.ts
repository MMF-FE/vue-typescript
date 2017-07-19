/**
 * product module router
 */

import Router from 'vue-router'

function getView (name) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            // resolve(require(`components/views/product/${name}`).default)
            let map = {
                'list': require('components/views/product/list').default,
                'detail': require('components/views/product/detail').default
            }

            resolve(map[name])
        }, reject, 'product')
    }
}

let routes: Router.RouteConfig[] = [
    {
        name: 'product/list',
        path: '/product',
        component: getView('list')
    },
    {
        name: 'product/detail',
        path: '/product/:id',
        component: getView('detail')
    }
]

export default routes
