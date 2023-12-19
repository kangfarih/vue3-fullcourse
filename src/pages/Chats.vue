<template>
    <div>
        <p v-for="chat in state.chats">{{ chat.message }}</p>
    </div>
    <form action="">
        <input type="text" name="chat" id="" class="border-2 p-2 mr-2" placeholder="Type message" v-model="inputMessage">
        <input type="button" value="Send" class="p-2 border-2 rounded-md bg-cyan-400" click.prevent="sendMessage">
    </form>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { getDatabase, ref as refDb, get, child, onValue } from 'firebase/database'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
const inputMessage = ref('')
const state = reactive({
    chats: {}
})

onMounted(() => {
    const db = getDatabase();
    const collection = refDb(db, 'chats');
    onValue(collection, (res) => {
        console.log(res.val());
        state.chats = res.val()
    })
})


function writeUserData(userId, message) {
    const db = getDatabase();
    console.log(userId, message);
    set(ref(db, 'chats/' + userId), {
        message
    });
}

function sendMessage() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.uid);
            writeUserData(user.uid, inputMessage.value)
            inputMessage.value = ''
        } else { }
    })
}
</script>

<style scoped></style>