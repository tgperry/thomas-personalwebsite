import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/LandingView.vue'
import Main from '../views/MainView.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
    },
    {
        path: '*',
        name: 'BadUrl',
        component: PageNotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router