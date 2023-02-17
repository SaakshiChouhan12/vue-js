

<script setup>
  import { defineEmits } from 'vue'
   import {reactive} from 'vue';

const emit = defineEmits(['change-name']);


const sName = reactive({
  value: null
})

const emitFunction = function() {
    emit('change-name', sName.value)
}
</script>

<template>

    <div>
        <div class="season">
          <h3>Change name</h3>
          <input v-model="sName.value" />
          <button @click="emitFunction">Change</button>
        </div>
      </div>
   
   
   </template>