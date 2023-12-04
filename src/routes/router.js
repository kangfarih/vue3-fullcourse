import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import HeroList from '../pages/HeroList.vue'
import Calendar from '../pages/Calendar.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/heroes', component: HeroList },
    { path: '/calendar', component: Calendar },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
