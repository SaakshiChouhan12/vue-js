<template>
  <div>
    <h1 class="text-center text-3xl font-bold dark:text-white ">Users</h1>
     <ul v-if="hasUsers" >
         
            <li class="text-2xl  px-5 underline" v-for="user in UsersNm" :key="user.id">
             <router-link to="/ComputeProp/Sakshi"> {{ user.name }} </router-link>
               </li>
         </ul>
  </div>
  <div>
  <router-view> </router-view>
  </div>
</template>
                                                    
<script>
export default {
  name: 'UsersNm',
   data: function () {
    return {
      UsersNm: [
       {name:"Sakshi",id:1},
       {name:"Shruti", id:2},
       {name:"Sam", id:3}

      ]
    };
   },
   computed: {
     hasUsers: function() {
         return this.UsersNm.length > 0;
     }
   }
}

</script>

<style>

.text{
    text-align: left
}
</style>