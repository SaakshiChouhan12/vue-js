<template>
<main id="app">
<section class="products">
<TheProduct
 v-for="product in products"
        :key="product.color"
        :product="product"

/>
</section>
</main>
</template>

<script>

import TheProduct from './components/TheProduct.vue' 

export default {
  name: 'App',
  components: {
     TheProduct
  },
   data () {
    return {
      products: [
        {
          
          color: 'green',
          bgtext: 'Boat',
          src: require('./assets/boat-watch.png')
        },
        {
          
          color: 'blue',
          bgtext: 'Sonata',
          src: require('./assets/sonata-wtach.png')
        },
        {
         
          color: 'pink',
          bgtext: 'Timex',
          src: require('./assets/timex-watch.png')
        }
      ]
    }
  }
}




</script>

<style>

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
.products {
    display: flex;
    max-width: 1280px;
    padding: 25px;
    margin: 0 auto;
  }
  main {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #EEE;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
