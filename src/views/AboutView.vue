<template>
  <div class="create-todo">
    <form id="new-todo-form" @submit.prevent="addNote">
      <input type="text" name="content" id="content" autocomplete="off" placeholder="e.g. hello world" v-model="input_content" />
      <input type="submit" value="Add todo" />
    </form>
    <section class="todo-list">
      <div v-for="note in notes"  :key="note.description">
        <div class="todo-content">
          <input type="text" v-model="note.description" />
        </div>
        <div class="actions">
          <button class="delete" @click="removeTodo(note)">Delete</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { Note } from "../types/notes";
import { ref,onMounted, watch  } from 'vue';

const input_content = ref('')

const notes = ref([
  {
    description: "",
    createdAt: new Date(),
  },
] as Array<Note>);


watch(notes, (newVal: any) => {
  localStorage.setItem('notes', JSON.stringify(newVal))
}, {
  deep: true
})


const addNote = (): void => {
  if (input_content.value.trim() === '' ) {
		return
	}
  notes.value.push({
    description: input_content.value,
    createdAt: new Date(),
  });
};

const removeTodo = (note:any) => {
	notes.value = notes.value.filter((t) => t !== note)
}

onMounted(() => {

 
  localStorage.removeItem('notes')
})

</script>
<style></style>
