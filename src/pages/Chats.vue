<template>
    <div class="w-full flex flex-col">
        <form @submit.prevent="sendMessage" class="m-auto w-72">
            <div class="m-1 h-96 overflow-y-scroll p-1 ">
                <div v-for="chat in state.chats" :class="currentUser == chat.userId ? 'text-right' : ''" class="m-3">
                    <span :class="currentUser == chat.userId ? 'bg-cyan-400 ' : 'bg-yellow-200 '"
                        class="p-1 pr-2 pl-2 rounded-lg">
                        {{ chat.message }}
                    </span>
                </div>
            </div>
            <input type="text" name="chat" id="" class="border-2 p-2 mr-2" placeholder="Type message"
                v-model="inputMessage">
            <input type="button" value="Send" class="p-2 border-2 rounded-md bg-cyan-400" @click.prevent="sendMessage">
        </form>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref as refVue } from 'vue'
import { getDatabase, ref, push, update, child, onValue } from 'firebase/database'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const currentUser = refVue('');
const inputMessage = refVue('')
const state = reactive({
    chats: {}
})

onMounted(() => {
    const db = getDatabase();
    const collection = ref(db, 'chats');
    onValue(collection, (res) => {
        state.chats = res.val()
    })
    onAuthStateChanged(auth, (user) => {
        currentUser.value = user.uid
    })
})


function writeChatsData(userId, message) {
    const db = getDatabase();
    const newPostKey = push(child(ref(db), 'posts')).key;
    const updates = {};
    updates['/chats/' + newPostKey] = {
        userId, message
    };

    return update(ref(db), updates);
}

function sendMessage() {
    if (inputMessage.value == '') return
    onAuthStateChanged(auth, (user) => {
        if (user) {
            writeChatsData(user.uid, inputMessage.value)
            inputMessage.value = ''
        } else { }
    })
}
</script>

<style scoped></style>