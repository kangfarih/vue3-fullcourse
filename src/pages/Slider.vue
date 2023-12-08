<template>
    <div class="w-full flex flex-wrap relative">
        <div v-for="(slide, i) in slideData" :key="slide.style" class="absolute w-full overflow-x-hidden">
            <transition name="slidetran">
                <div v-if="currentSlide === i" class="h-96 flex justify-center items-center" :class="slide.style">
                    <h1 class="font-bold text-2xl text-white">Slide {{ i }}</h1>
                </div>
            </transition>
        </div>
        <div class="w-full h-96 flex justify-center items-end pb-5 absolute">
            <div v-for="(dot, i) in slideData" :class="currentSlide === i ? 'bg-gray-700' : 'bg-gray-100'"
                class="rounded-full w-3 h-3 mx-2 cursor-pointer" @click="changeSlide(i)"> </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const slideData = [
    { style: 'bg-teal-500' },
    { style: 'bg-purple-500' },
    { style: 'bg-sky-600' },
    { style: 'bg-green-600' },
]
const currentSlide = ref(0)

const slideInterval = ref();

const changeSlide = (i) => {
    clearSlideInterval()
    currentSlide.value = i;
    setSlideInterval()
}

const setSlideInterval = () => {
    slideInterval.value =
        setInterval(() => {
            currentSlide.value = currentSlide.value < slideData.length - 1 ? currentSlide.value + 1 : 0
        }, 5000)
}
const clearSlideInterval = () => {
    clearInterval(slideInterval.value)
}

onMounted(() => {
    setSlideInterval()
})

onUnmounted(() => {
    clearSlideInterval()
})
</script>

<style scoped>
.slidetran-leave-active,
.slidetran-enter-active {
    transition: all 1s ease-in-out;
}

.slidetran-leave-to {
    transform: translateX(100%);
}

.slidetran-enter-from {
    transform: translateX(-100%);
}
</style>