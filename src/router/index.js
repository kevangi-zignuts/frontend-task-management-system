/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'

import List from '../components/tasks/List.vue'
import Create from '../components/tasks/Create.vue'
import View from '../components/tasks/View.vue'
import Edit from '../components/tasks/Edit.vue'
import NotFound from '../view/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'list',
        component: List
    },
    {
        path: '/create',
        name: 'create',
        component: Create
    },
    {
        path: '/view/:id(\\d+)',
        name: 'view',
        component: View
    },
    {
        path: '/edit/:id(\\d+)',
        name: 'edit',
        component: Edit
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes: routes
})

export default router 