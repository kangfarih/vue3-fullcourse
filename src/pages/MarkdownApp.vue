<template>
    <div class="flex flex-wrap w-full">
        <h1 class="w-full text-center text-2xl my-4 font-bold">Markdown App</h1>
        <section class="flex m-auto w-10/12 h-screen">
            <article class="w-1/2 border">
                <textarea ref="textRef" class="w-full h-full p-1" v-model="text" @input="update"></textarea>
            </article>
            <article class="w-1/2 border bg-gray-100 p-1 markdown" v-html="markedText"></article>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { marked } from 'marked'
import useDebounce from '../utilities/hooks/useDebounce.js'


const debounce = useDebounce()
const textRef = ref(null)
const text = ref('')
const markedText = ref('');

function markdownParse() {
    markedText.value = marked.parse(text.value)

}

function update() {
    debounce(markdownParse, 500)
}

onMounted(()=>{
    textRef.value.focus()
})

</script>
<style lang="postcss" scoped>
.markdown :deep() {
    &h1 {
        font-size: 1.8rem;
        font-weight: 600;
    }

    &h2 {
        font-size: 1.6rem;
        font-weight: 600;
    }

    &h3 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    &h4 {
        font-size: 1.4rem;
        font-weight: 600;
    }

    &h5 {
        font-size: 1.2rem;
        font-weight: 600;
    }
}
</style>