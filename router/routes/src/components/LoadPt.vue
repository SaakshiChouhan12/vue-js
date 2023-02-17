<template>

  
  <div class="loader-wrapper" v-if="showLoader">
    <TheLoader />
  </div>
  <div v-else>
   <p class="text-center text-3xl font-bold dark:text-white ">hii</p>
</div>
</template>

<script>
import TheLoader from "./TheLoader";
export default{
  name: "App",
  data() {
    return {
      showLoader: true,
    };
  },
  components: {
    TheLoader,
  },
  mounted() {
    this.hideLoader()
  },
  methods: {
    hideLoader() {
      
      setTimeout(() => {
        this.showLoader = false
      }, 2000)
    }
  }
}
</script>


