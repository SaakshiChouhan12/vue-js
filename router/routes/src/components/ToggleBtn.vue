<template>
 <p v-if="show"> if condition </p>
 <p v-else>else condition</p>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-on:click="show=!show">toggle</button>
</template>


<script>
export default{
  
    data(){

        return{
            show:true
        }
    }
}

</script>