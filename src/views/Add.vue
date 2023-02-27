<template>
    <p>add</p>
   
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
                    v-on:click="addrestaurant()">Add New Restaurant</button>
                
              
            </div>


        </div>
    </form>
</template>
<script setup lang="ts">
import { ref,reactive } from "vue";
import axios from "axios";
import { useRouter, useRoute, } from 'vue-router'
const router = useRouter()
  const restaurnt = reactive ({
                name: '',
                address: '',
                contact: ''
        })


      async  function addrestaurant(){
            console.log("called");
            console.log(restaurnt.name);

            let result = await axios.post("http://localhost:3000/restaurant",
        {
            
            name: restaurnt.name, 
            address: restaurnt.address, 
            contact: restaurnt.contact

        });
        
        console.log(result);
        if(result.status==201){
            router.push({name:'Home'})
        }
        }


</script>