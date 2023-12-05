<template>
    <div class="fixed inset-0 w-full h-full flex justify-center items-center">
        <div class="absolute w-full h-full bg-gray-500 opacity-50" @click="$emit('close-login-modal')" />
        <div class=" bg-white z-10 rounded-md flex">
            <div class="m-1 p-4 flex-1 rounded-md border-solid border-2 border-gray-200">
                <h1 class="w-full text-center font-bold text-2xl mb-6">Login</h1>
                <form action="" class="flex flex-col">
                    <input type="email" name="" id="email" placeholder="email"
                        class="h-10 border-solid border-gray-400 border-2 my-1 rounded-md p-2 w-60">
                    <input type="password" name="" id="password" placeholder="password"
                        class="h-10 border-solid border-gray-400 border-2 my-1 rounded-md p-2 w-60">
                    <button type="submit" @click.prevent="" class="rounded-md bg-teal-600 hover:bg-teal-800 text-white p-2 mt-4">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped>
.border-shadow {
    box-shadow: inset 0 0 1px #000;
}
</style>