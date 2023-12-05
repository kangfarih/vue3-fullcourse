<script setup>

import { ref } from 'vue';
import Header from './components/Header.vue';
import LoginModal from './components/LoginModal.vue';
import { RouterView } from 'vue-router';


const showLoginModal = ref(false)
</script>

<template>
  <Header @open-login-modal="showLoginModal = true" />
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
