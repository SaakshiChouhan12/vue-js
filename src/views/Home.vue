<template> 
<Header/>
  
   <table border:any="1" class="center">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Contact</th>
        <th>Actions</th>
      </tr>
      <tr v-for="rest in restaurants" :key="rest.id">
        <td>{{ rest.id }}</td>
        <td>{{ rest.name }}</td>
        <td>{{ rest.address }}</td>
        <td>{{ rest.contact }}</td>
        <td><button><router-link :to="'/update/' + rest.id">Update</router-link></button></td> 
       <td> <button @click="deleterest(rest.id)">Delete</button></td>
      </tr>
    </table>
</template>
<script lang="ts" setup>
import axios from 'axios';
import { defineComponent } from 'vue';
import { ref,onMounted } from 'vue';
import { useRouter, useRoute, } from 'vue-router'
import Header from '@/components/Header.vue'



const restaurants = ref([]as any);
const router = useRouter()
  onMounted(() => {
    loaddata()
   
})

async function deleterest(id:any) {
      console.log(id);
      let result = await axios.delete("http://localhost:3000/restaurant/" + id)
      if (result.status == 200) {
       
       loaddata()
      }
    }
 async function loaddata(){
    let user= localStorage.getItem('user-info');
    if(!user){
        router.push({name:'main'})
    }

    let result =await axios.get("http://localhost:3000/restaurant");
      console.log(result);
      restaurants.value=result.data
 }
</script>
<style>
td {
  width: 160px;
  height: 40px;
  text-align: center;
  font-size: 20px;
}
td button{
  margin-left: 15px;
}
.center{
  text-align: center;
  margin: auto;
}
td a{
  text-decoration: none;
  color: black;
  cursor: default;
}
</style>
