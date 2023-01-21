<template>

<h1> pass data to child component from main-MyHome </h1>
<TheChild  name="Vue Js" :user="user" :getData= "getData"  />
</template>



<script>
import TheChild from './TheChild.vue'
 export default{
 name: 'MyHome',
  components:{
     TheChild
  },
  data(){
 return{

     user:{
        name: 'Saakshi',
        email: 'Saakshichouhan21@gmail.com'
     }
   }
 },
 methods: {
   getData() {
   console.warn("function is called")
   alert("hello")
   }

 }


 }
</script>


