/**
 * product module router
 */

import Router from 'vue-router'

function getView (viewName) {
    return resolve => {
        require.ensure([], (require: any) => {
            let map = {
                'product': require('components/views/product').default,
                'productDetail': require('components/views/productDetail').default
            }

            resolve(map[viewName])
        }, 'product')
    }
}

let routes: Router.RouteConfig[] = [
    {
        name: 'product',
        path: '/product',
    },
    {
        name: 'productDetail',
        path: '/product/:id',
    }
]

routes.forEach((v) => {
    v.component = getView(v.name)
})

export default routes
