<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
  <TheHeader/>
  <div class="container-fluid">
   <router-view> </router-view>
   </div>
</template>

<script>
import TheHeader from './components/include/TheHeader.vue'
//  import ToggleBtn from './components/ToggleBtn.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  }

}
</script>


