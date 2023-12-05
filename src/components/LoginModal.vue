<template>
    <div class="fixed inset-0 w-full h-full flex justify-center items-center">
        <div class="absolute w-full h-full bg-gray-500 opacity-20" @click="$emit('close-login-modal')" />
        <div class=" bg-white z-10 rounded-md flex">
            <div class="m-1 p-4 flex-1 rounded-md border-solid border-2 border-gray-200 shadow-lg">
                <h1 class="w-full text-center font-bold text-2xl mb-6">Login</h1>
                <GoogleLogin @close-login-modal="$emit('close-login-modal')"/>
                <form action="" class="flex flex-col">
                    <label for="email" class="font-bold">Username or Email</label>
                    <input v-model="email" type="email" name="" id="email" placeholder="Enter your username or email"
                        class="h-10 border-solid border-gray-400 border-2 my-1 rounded-md p-2 w-72 shadow-md">
                    <label for="password" class="font-bold">Password</label>
                    <input v-model="password" type="password" name="" id="password" placeholder="Enter your password"
                        class="h-10 border-solid border-gray-400 border-2 my-1 rounded-md p-2 w-72 shadow-md">
                    <button type="submit" @click.prevent="submit"
                        class="rounded-md bg-teal-600 hover:bg-teal-800 text-white p-2 mt-4">
                        <span v-if="!isLoading"> Submit </span>
                        <span v-else> ⏳ </span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import GoogleLogin from './Login/GoogleLogin.vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const emit = defineEmits(['close-login-modal'])

const isLoading = ref(false);
const email = ref('')
const password = ref('')
const auth = getAuth();

function submit() {
    isLoading.value = true;

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            emit('close-login-modal')
            isLoading.value = false;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}
</script>

<style scoped>
.border-shadow {
    box-shadow: inset 0 0 1px #000;
}
</style>