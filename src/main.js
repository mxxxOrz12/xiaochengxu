import { createApp } from 'vue'
import './style.css'
import 'vant/lib/index.css';

import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./views/Home.vue'),
        },
        {
            path: '/list',
            name: 'List',
            component: () => import('./views/List.vue')
        },
        {
            path: '/detail',
            name: 'Detail',
            component: () => import('./views/Detail.vue')
        },
        {
            path: '/cart',
            name: 'Cart',
            component: () => import('./views/Cart.vue')
        },
        {
            path: '/user',
            name: 'User',
            component: () => import('./views/User.vue')
        },
    ]
});

//路由前置守卫
router.beforeEach((to, from, next) => {
    console.log('beforeEach');
    next();
});

createApp(App).use(router).mount('#app')