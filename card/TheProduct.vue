<template>
<main id="app">
<div  class="product">
<div :class="'product-inner ' + product.color">
 <div class = "txt-wrap">
    <h2 class="bg-text">{{ product.bgtext }}</h2>
  </div>
    <div class="product-image-wrap">
        <img :src="product.src" class="image" />
      </div>
      <div class="product-detail">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eligendi sed cupiditate eius dolores consequatur explicabo dignissimos magnam amet eveniet!</p>
      </div>
 </div>


</div>

</main>
</template>

<script>
 export default {

    name: 'TheProduct' ,
    props: ['product']

 }
</script>

<style>
.product {
    flex: 1 1 33.333%;
    width: 100%;
    padding: 25px;
  }
.product-inner{
    position: relative;
        padding: 25px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    height: 450px;
}

.product-text-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    perspective: 1000px;
  }
  .product-text-wrap h2 {
    color: #313131;
    font-size: 128px;
    font-weight: 900;
    opacity: 0.2;
    transform-origin: center;
  }
.product-image-wrap {
    position: relative;
    z-index: 1;
    transform-origin: center;
  }
  .product-image-wrap .image {
    width: 100%;
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
    height: 250px;
  }
  .product-detail {
    background-color: #FFF;
    padding: 25px;
    margin: 0px -25px -25px;
  }
  .product-detail h2 {
    font-size: 24px;
    font-weight: 700;
    color: #676767;
    margin-bottom: 15px;
  }
  .product-detail p {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 300;
    color: #676767;
  }
</style>