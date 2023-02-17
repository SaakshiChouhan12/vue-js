<template>
 <div class="app">
 <p> {{form}} </p>
    <form @submit.prevent="handleSubmit" class="checkout-form">
      <h1>Checkout Form</h1>
      <div class="address__field">
        <label for="firstName">First name</label>
        <input type="text" id="firstName" v-model="form.firstName" required />
      </div>
      <div class="address__field">
        <label for="lastName">Last name</label>
        <input type="text" id="lastName" v-model="form.lastName" required />
      </div>
      <div class="address__field">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
       <div class="address__field">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
                                                       
</template>

 <script setup>
 import { reactive } from "vue";
  
const form = reactive({
      firstName: "",
      lastName: "",
      email: ""
});

 function handleSubmit() {
      alert("form submited");
    }


</script>

<style>
.address__field {
  padding-bottom: 10px;
  width: 250px;
  text-align: left;
}
.checkout-form {
  margin: 5px auto;
  padding: 10px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  margin-top: 30px;
  padding: 10px;
  width: 250px;
  color: #f8edcf;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: 0;
  background: #434141;
}
input {
  padding: 10px;
  width: 230px;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: 0;
  background: #f8edcf;
}
</style>