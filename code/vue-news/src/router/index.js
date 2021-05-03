import Vue from 'vue';
import VueRouter from 'vue-router';

// import NewsView from '../views/NewsView.vue';
// import AskView from '../views/AskView.vue';
// import JobsView from '../views/JobsView.vue';

import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

import createListVIew from '../views/CreateListView.js';
Vue.use(VueRouter);

export const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            component: createListVIew('NewsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListVIew('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListVIew('JobsView'),
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
    ]
});
