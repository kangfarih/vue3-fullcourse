<template>
    <div class="bg-yellow-200 w-full h-16 flex">
        <div v-for="menu in menuList">
            <RouterLink :to="menu.path" class="h-full items-center flex p-2 hover:bg-white cursor-pointer font-bold">
                {{ menu.title }}
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const menuList = [
    { path: '/', title: 'Home' },
    { path: '/heroes', title: 'DC Heroes' },
    { path: '/calendar', title: 'Calendar' }
]
</script>

<style lang="scss" scoped></style>