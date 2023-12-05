<template>
    <div class="bg-yellow-200 w-full h-16 flex">
        <div v-for="menu in menuList">
            <RouterLink :to="menu.path" :class="path == menu.path ? 'bg-white' : ''"
                class="h-full items-center flex p-2 hover:bg-white cursor-pointer font-bold rounded-t-3xl mx-1">
                {{ menu.title }}
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useRoute, useRouter } from 'vue-router'


const route = useRoute();
const path = computed(() => route.path)

const menuList = [
    { path: '/', title: 'Home' },
    { path: '/heroes', title: 'DC Heroes' },
    { path: '/calendar', title: 'Calendar' },
    { path: '/markdown', title: 'Markdown' },
]

</script>

<style lang="scss" scoped></style>