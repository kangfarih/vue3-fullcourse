<template>
    <div class="bg-yellow-200 w-full h-16 flex">
        <div v-for="menu in menuList">
            <RouterLink :to="menu.path" :class="path == menu.path ? 'bg-white' : ''"
                class="h-full items-center flex p-2 px-3 hover:bg-white cursor-pointer font-bold rounded-t-3xl mx-1">
                {{ menu.title }}
            </RouterLink>
        </div>
        <div class=" hover:bg-white cursor-pointer font-bold rounded-t-3xl mx-1 ml-auto">
            <div v-if="props.isAuthed" @click="logout" class="h-full items-center flex p-2 px-3">
                Logout
            </div>
            <div v-else @click="$emit('open-login-modal')" class="h-full items-center flex p-2 px-3">
                Login
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useRoute, useRouter } from 'vue-router'
import { getAuth, signOut } from "firebase/auth";

const props = defineProps({
    isAuthed: { type: Boolean, required: true },
});

const route = useRoute();
const path = computed(() => route.path)

const menuList = [
    { path: '/', title: 'Home' },
    { path: '/heroes', title: 'DC Heroes' },
    { path: '/calendar', title: 'Calendar' },
    { path: '/markdown', title: 'Markdown' },
    { path: '/slider', title: 'Slider' },
]

const logout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        // console.log('log out succeed');
    }).catch((error) => {
        console.log(error);
    });
}

</script>

<style lang="scss" scoped></style>