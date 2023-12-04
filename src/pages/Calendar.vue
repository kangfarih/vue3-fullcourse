<template>
    <div class="w-full flex">
        <div class="m-auto">
            <h1 class="font-bold text-2xl text-center">Calendar</h1>
            <section class="mx-2 flex justify-between">
                <h1 class="font-bold">{{ currentMonthString }}</h1>
                <h1 class="font-bold">{{ currentYear }}</h1>
            </section>
            <section class="flex flex-wrap w-80">
                <p class="text-center" style="width: 14.28%;" v-for="day in days" :key="day.id">
                    {{ day }}
                </p>
            </section>
            <section class="flex flex-wrap w-80 mt-2">
                <p v-if="startDay() + 1 < 7" class="text-xs flex items-center justify-center text-gray-500"
                    style="width: 14.28%;" v-for="i in startDay() + 1">
                    {{ daysInPrevMonth() - startDay() - 1 + i }}</p>
                <p class="text-center" :class="isToday(i)" style="width: 14.28%;" v-for="i in daysInMonth()"> {{ i }} </p>
                <p class="text-xs flex items-center justify-center text-gray-500" style="width: 14.28%;"
                    v-for="i in endDay()">
                    {{ i }}</p>
            </section>
            <section class="flex justify-between">
                <button class="bg-cyan-400 rounded my-2 py-1 px-3 hover:bg-cyan-600 hover:text-white"
                    @click="goPrevMonth">prev</button>
                <button class="bg-cyan-400 rounded my-2 py-1 px-3 hover:bg-cyan-600 hover:text-white"
                    @click="goNextMonth">next</button>
            </section>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
const days = ref(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
const today = new Date();
const currentMonth = ref(new Date().getMonth() + 1);
const currentYear = ref(new Date().getFullYear())
const currentMonthString = computed(() => new Date(currentYear.value, currentMonth.value - 1).toLocaleString('default', { month: 'long' }))
// const isCurrentMonth = computed(() => today.getMonth() + 1 == currentMonth && today.getFullYear() == currentYear)

const prevMonth = computed(() => currentMonth.value == 1 ? 12 : currentMonth.value - 1)
const prevYear = computed(() => currentMonth.value == 1 ? currentYear.value - 1 : currentYear.value)
// const nextMonth = computed(() => currentMonth.value == 12 ? 1 : currentMonth.value + 1)
// const nextYear = computed(() => currentMonth.value == 12 ? currentYear.value + 1 : currentYear.value)

function daysInMonth() {
    return new Date(currentYear.value, currentMonth.value, 0).getDate();
}
function daysInPrevMonth() {
    return new Date(prevYear.value, prevMonth.value, 0).getDate();
}
function startDay() {
    return new Date(prevYear.value, prevMonth.value, 0).getDay();
}
function endDay() {
    return 6 - new Date(currentYear.value, currentMonth.value, 0).getDay();
}
function isToday(d) {
    console.log(today.getMonth() + 1 , currentMonth.value, today.getFullYear() , currentYear.value);
    if (today.getFullYear() != currentYear.value) return ''
    if (today.getMonth() + 1 != currentMonth.value) return ''
    return d === today.getDate() ? 'bg-cyan-400 rounded-full' : '';
}

function goPrevMonth() {
    if (currentMonth.value == 1) {
        currentYear.value--
        currentMonth.value = 12;
    } else {
        currentMonth.value--
    }
}

function goNextMonth() {
    if (currentMonth.value == 12) {
        currentMonth.value = 1
        currentYear.value++

    } else {
        currentMonth.value++
    }
}

</script>

<style lang="scss" scoped></style>