

<template>
 <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Login</h1>
                <input type="text" v-model="namee" class="block border border-grey-light w-full p-3 rounded mb-4"
                    placeholder="Full Name" />

                

                <input type="password" v-model="passwordd" class="block border border-grey-light w-full p-3 rounded mb-4"
                    placeholder="Password" />

                    <button type="submit"
                    class="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                    v-on:click="login()">Login</button>
                
              <p>
                <router-link to="/" >Signup</router-link>
              </p>
            </div>


        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { useRouter, useRoute, } from 'vue-router'

import { ref,onMounted } from 'vue';
const namee = ref('')
const passwordd = ref('')
const router = useRouter()
async function login(){
    console.warn(namee.value)  
    let result = await axios.get("http://localhost:3000/users?name="+namee.value+"&password="+passwordd.value
       );
       console.warn(result);
       if(result.status==200 && result.data.length>0){
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                router.push({name:'Home'})
            }
}
onMounted(() => {
    let user= localStorage.getItem('user-info');
    if(user){
        router.push({name:'Home'})
    }
})
</script>