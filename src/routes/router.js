import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import HeroList from '../pages/HeroList.vue'
import Calendar from '../pages/Calendar.vue'
import MarkdownApp from '../pages/MarkDownApp.vue'
import Slider from '../pages/Slider.vue'
import Calculator from '../pages/calculator.vue'
import ReusableModal from '../pages/ReusableModal.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/heroes', component: HeroList },
    { path: '/calendar', component: Calendar },
    { path: '/markdown', component: MarkdownApp },
    { path: '/slider', component: Slider },
    { path: '/calculator', component: Calculator },
    { path: '/reusable-modal', component: ReusableModal },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
