import home from '@/components/routes/home.vue'
import table from '@/components/routes/table.vue'
import item from '@/components/routes/item.vue'
import collection from '@/components/routes/collection.vue'

export default [
    {
        path: '/',
        component: home
    },
    {
        path: '/add',
        component: collection
    },
    {
        path: '/:collection/settings',
        component: collection
    },
    // {
    //     path: '/collection/+',
    //     component: collection
    // },
    // {
    //     path: '/collection/:collection',
    //     component: collection
    // },
    // {
    //     path: '/collection/:collection/+',
    //     component: field
    // },
    // {
    //     path: '/collection/:collection/:id',
    //     component: field
    // },
    // {
    //     path: '/:collection',
    //     component: table
    // },
    // {
    //     path: '/:collection/+',
    //     component: item
    // },
    // {
    //     path: '/:collection/:id',
    //     component: item
    // }
]
