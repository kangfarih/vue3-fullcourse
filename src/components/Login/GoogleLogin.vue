<template>
    <div class="my-2 text-center font-bold ">
        <button @click="loginWithGoogle"
            class="py-2 px-4 rounded-3xl border-solid border-gray-400 border-2 hover:bg-blue-200">
            Login with Google</button>
        <div class="my-4">
            Or
        </div>
    </div>
</template>

<script setup>
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const emit = defineEmits(['close-login-modal'])

function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // const user = result.user;

            emit('close-login-modal')
        }).catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // const email = error.customData.email;
            // const credential = GoogleAuthProvider.credentialFromError(error);
        });
}
</script>

<style scoped></style>