<template>
    <div >
        <div class=" py-28 px-8">
           
                <div class="note block float-left mt-0 ml-0 mr-8 mb-8 p-4 relative cursor-move"
                    v-for="(note, index) in notes" :key="index">
                    <a class="button remove flex items-center justify-center h-8 absolute text-white w-8"
                        @click="removeNote(index)">x</a>
                    <div class="note_cnt text-xl">
                        <textarea class="cnt bg-transparent p-1 resize-y w-full outline-none"
                            placeholder="Enter note description here" v-model="note.description"></textarea>
                    </div>
                </div>
           
        </div>
        <button
            class="floating__btn cursor-pointer flex text-6xl items-center justify-center h-16 m-4 fixed right-0 bottom-0 text-white w-16"
            @click="addNote()">
            +
        </button>
    </div>
</template>
<script lang="ts" setup>
import { Note } from "../types/notes";
import { ref } from 'vue';

const notes = ref([
    {
        description: "",
        createdAt: new Date(),
    },
] as Array<Note>);



const addNote = (): void => {
    notes.value.push({
        description: "",
        createdAt: new Date(),
    });
};

const removeNote = (index: number): void => {
    notes.value.splice(index, 1);
};

</script>
<style>
.note {
  width: 280px;
  min-height: 300px;
  box-shadow: 5px 5px 10px -2px rgba(33, 33, 33, 0.3);
  transform: skew(-1deg, 1deg);
  transition: transform 0.15s;
  z-index: 1;
}
.note textarea.cnt {
  min-height: 200px;
  outline: none;
  border: none;
}
.button.remove {
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #e01c12;
  border-color: #b30000;
  font-weight: bolder;
  font-family: Helvetica, Arial, sans-serif;
}
.floating__btn {
  background-color: #ff53f1 !important;
  border-radius: 50%;
  border: none !important;
  box-shadow: 0 0 4px rgb(0 0 0 / 14%), 0 4px 8px rgb(0 0 0 / 28%);
  z-index: 998;
  outline: none;
}

</style>
