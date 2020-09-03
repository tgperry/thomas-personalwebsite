import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/LandingView.vue'
import Main from '../views/MainView.vue'

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
    }
]

const router = new VueRouter({
    routes
})

export default router