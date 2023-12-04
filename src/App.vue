<script setup>

import Header from './components/Header.vue';
import HeroListVue from './pages/HeroList.vue';
import Calendar from './pages/Calendar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <Header />
  <RouterView/>
</template>
