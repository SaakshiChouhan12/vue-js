<template>
    <p>update</p>
    <form class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                
                <input type="text" v-model="restaurnt.name" class="block border border-grey-light w-full p-3 rounded mb-4"
                    placeholder="Enter Restaurant Name" />

                <input type="text" v-model="restaurnt.address" class="block border border-grey-light w-full p-3 rounded mb-4"
                    placeholder="Enter Address" />
                    
                    <input type="text" v-model="restaurnt.contact" class="block border border-grey-light w-full p-3 rounded mb-4"
                    placeholder="Enter Contact" />

                    <button type="button"
                    class="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                    v-on:click="updaterestaurant()">Update Restaurant</button>
                
              
            </div>


        </div>
    </form>
</template>
<script setup lang="ts" >

import { ref,reactive,onMounted } from "vue";
import axios from "axios";
import { useRouter, useRoute, } from 'vue-router'
const route = useRoute()
const router = useRouter()
  const restaurnt = reactive ({
                name: '',
                address: '',
                contact: ''
        })

 async function updaterestaurant(){
 console.log(route.params.id)
 let result = await axios.put('http://localhost:3000/restaurant/'+route.params.id, {
                name: restaurnt.name,
                address:restaurnt.address,
                contact: restaurnt.contact
            });
   
            console.log("put",result);
            if(result.status==200){
                router.push({name:"Home"})
            }
           
 }
 onMounted(() => {
    load()
   
})
 async function load(){
    let result = await axios.get(`http://localhost:3000/restaurant?id=${route.params.id}`)
        restaurnt.name = result.data[0].name
        restaurnt.address = result.data[0].address
        restaurnt.contact = result.data[0].contact
}


</script>
