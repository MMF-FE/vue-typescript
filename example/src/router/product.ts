/**
 * product module router
 */

import Router from 'vue-router'

function getView (name) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            resolve(require(`components/views/product/${name}/index.ts`))
        }, reject, 'product')
    }
}

let routes: Router.RouteConfig[] = [
    {
        name: 'productList',
        path: '/product',
        component: getView('list')
    },
    {
        name: 'productDetail',
        path: '/product/:id',
        component: getView('detail')
    }
]

export default routes
