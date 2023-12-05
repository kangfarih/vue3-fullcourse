<script setup>

import { onMounted, ref } from 'vue';
import Header from './components/Header.vue';
import LoginModal from './components/LoginModal.vue';
import { RouterView } from 'vue-router';
import firebase from './utilities/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const showLoginModal = ref(false)
const isAuthed = ref(false)
const authedUser = ref({})

onMounted(() =>
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isAuthed.value = true;
      authedUser.value = user;
    } else {
      isAuthed.value = false;
      authedUser.value = {};
    }
  })
);

</script>

<template>
  <Header @open-login-modal="showLoginModal = true" :isAuthed="isAuthed" />
  <RouterView />
  <transition name="fade">
    <LoginModal v-if="showLoginModal" @close-login-modal="showLoginModal = false" />
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
