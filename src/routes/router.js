import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import HeroList from '../pages/HeroList.vue'
import Calendar from '../pages/Calendar.vue'
import MarkdownApp from '../pages/MarkDownApp.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/heroes', component: HeroList },
    { path: '/calendar', component: Calendar },
    { path: '/markdown', component: MarkdownApp },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
