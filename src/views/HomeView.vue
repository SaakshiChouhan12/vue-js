<template>
    
  <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                <input type="text" v-model="name" class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="fullname" placeholder="Full Name" />

                <input type="text" v-model="email" class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email" placeholder="Email" />

                <input type="password" v-model="password" class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password" placeholder="Password" />


                <button type="submit"
                    class="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                    v-on:click="Submit()">Sign Up</button>
              <p>
                <router-link to="/login" >Login</router-link>
              </p>
            </div>


        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute, } from 'vue-router'
import { ref,onMounted } from 'vue';
import axios from 'axios'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()
    const route = useRoute()

 async function Submit() {
    console.warn(name.value)        
    let result = await axios.post("http://localhost:3000/users",
        {
            
            email: email.value, 
            name: name.value, 
            password: password.value
        })
    console.warn(result);
    if (result.status == 201) {
        alert("done");
    }
    localStorage.setItem("user-info",JSON.stringify(result.data))
   
    router.push({name:'Home'})
}

//  function onMounted(){
//     let user= localStorage.getItem('user-info');
//     if(user){
//         router.push({name:'Home'})
//     }
//  }
 onMounted(() => {
    let user= localStorage.getItem('user-info');
    if(user){
        router.push({name:'Home'})
    }
 
// localStorage.removeItem('notes')
})
</script>
