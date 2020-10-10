import ui from '@/components/ui.vue';
import login from '@/components/login.vue';
import dashboard from '@/components/dashboard.vue';
import collection from '@/components/routes/collection.vue';
import collectionItem from '@/components/routes/collection.item.vue';
import settingsCollection from '@/components/routes/settings.collections.vue';
import settingsCollectionItem from '@/components/routes/settings.collections.item.vue';

export default [
    {
        path: '/',
        component: dashboard,
        children: [
            {
                path: 'collections/:collection',
                component: collection
            },
            {
                path: 'collections/:collection/:id',
                component: collectionItem
            },
            {
                path: 'settings/collections',
                component: settingsCollection
            },
            {
                path: 'settings/collections/:id',
                component: settingsCollectionItem
            }
        ]
    },
    {
        path: '/login',
        component: login,
    },
    {
        path: '/ui',
        component: ui,
    }
];
