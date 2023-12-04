<template>
    <div class="bg-yellow-200 w-full h-16 flex">
        <div v-for="menu in menuList" class="h-full items-center flex p-2 hover:bg-teal-200 cursor-pointer font-bold">
            {{ menu.title }}
        </div>
    </div>
</template>

<script setup>
const menuList = [
    { title: 'DC Heroes' },
    { title: 'Calendar' }
]
</script>

<style lang="scss" scoped></style>