import Landing from '../views/LandingView.vue'
import Main from '../views/MainView.vue'
import PageNotFound from '../views/PageNotFound.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Landing-Page',
        component: Landing
    },
    {
        path: '/main',
        name: 'Main-Page',
        component: Main
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'BadUrl',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  

export default router