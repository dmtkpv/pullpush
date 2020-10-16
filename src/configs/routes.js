// import ui from '@/components/ui.vue';
import login from '@/components/routes/login.vue';
import dashboard from '@/components/routes/dashboard.vue';
// import redirect from '@/components/routes/redirect.vue';
import collection from '@/components/routes/collection.vue';
// import collectionItem from '@/components/routes/collection.item.vue';
// import settingsCollection from '@/components/routes/settings.collections.vue';
// import settingsCollectionItem from '@/components/routes/settings.collections.item.vue';

export default [
    {
        path: '/login',
        component: login,
    },
    {
        path: '/dashboard/loading',
        component: dashboard,
        props: {
            success: false,
            error: false
        }
    },
    {
        path: '/dashboard/error',
        component: dashboard,
        props: {
            success: false,
            error: {
                title: 'Database error',
                message: 'DOMException: The user denied permission to access the database.'
            }
        }
    },
    {
        path: '/',
        component: dashboard,
        props: {
            success: true
        },
        children: [
            {
                path: 'collections/:name',
                component: collection
            },
            // {
            //     path: 'collections/:name/:id',
            //     component: collectionItem
            // },
            // {
            //     path: 'settings/collections',
            //     component: settingsCollection
            // },
            // {
            //     path: 'settings/collections/:id',
            //     component: settingsCollectionItem
            // },
            // {
            //     path: '*',
            //     component: redirect
            // }
        ]
    }
];
