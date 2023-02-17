<template>
    <div>
        <div class="s">
          Hii Here's {{ em.emittedValues }}
        </div>
        <ChildVu @change-name="changeName"/>
      </div>
</template>

<script setup>
   import ChildVu from './ChildVu.vue';
   import { reactive } from 'vue';
    
   let em = reactive({
    emittedValues: 'Sakshi'
  })

  const changeName = (emittedValues) => {
    em.emittedValues = emittedValues ?? 'Sakshi'
  }

</script>