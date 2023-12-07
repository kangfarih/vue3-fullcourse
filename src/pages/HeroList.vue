<template>
    <div class="w-full flex p-2">
        <div class="m-auto">
            <h1 class="font-semibold">DC Heroes</h1>
            <ul>
                <li v-for="(hero, index) of dcHeros" class="flex justify-between mt-1">
                    <div>
                        {{ index + 1 }}. {{ hero.name }}
                    </div>
                    <button class="mx-2 bg-blue-300 focus:bg-blue-600 hover:bg-blue-600 w-6 pb-1 rounded"
                        @click="deleteHero(index)">x</button>
                </li>
            </ul>
            <form @submit.prevent="addHero">
                <input type="text" name="heroName" id="" v-model="heroNameInput" ref="heroNameRef"
                    placeholder="Input New Hero Name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2">
                <button class="w-full bg-green-900 hover:bg-green-700 p-2 text-white rounded disabled:bg-gray-400"
                    type="button" :disabled="!heroNameInput" @click="addHero">Add Superhero</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const heroNameRef = ref(null)
const heroNameInput = ref('')
const dcHeros = ref([
    { name: 'Superman' },
    { name: 'Batman' },
    { name: 'Aquaman' },
    { name: 'Wonder Woman' },
    { name: 'Green Lantern' },
]);

function addHero() {
    if (heroNameInput.value == '') return
    dcHeros.value.push({
        name: heroNameInput.value
    })
    heroNameInput.value = ''
}

function deleteHero(idx) {
    dcHeros.value = dcHeros.value.filter((hero, i) => i != idx);
}

onMounted(() => {
    heroNameRef.value.focus()
})

</script>
