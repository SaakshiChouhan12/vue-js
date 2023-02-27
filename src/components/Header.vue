<template>
    <ul class="flex border-b">
  <li class="-mb-px mr-1">
    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">Home</a>
  </li>
  <li class="mr-1">
    <router-link to="add" class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" >Add restaurant</router-link>
  </li>
  
  <li class="mr-1">
    <router-link to="login" @click="logout()" class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" >Logout</router-link>
  </li>
</ul>
</template>

<script lang="ts" setup >
import { useRouter, useRoute, } from 'vue-router'
const router = useRouter()

function logout(){
    console.log("called");
            localStorage.clear()
            router.push({name:'login'})
}

</script>