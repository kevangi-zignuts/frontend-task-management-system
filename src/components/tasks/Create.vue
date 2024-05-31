<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const formData = reactive({
  name: "",
  due_date: new Date(),
  description: "",
});

const handleAddTaskForm = async () => {
    console.log("Form Submitted", formData);
}

</script>

<template>
  <div class="shadow-md pb-6">
    <div class="bg-indigo-600 p-4">
        <h1 class="text-3xl font-bold text-center text-white">Add New Task</h1>
    </div>

    <form @submit.prevent="handleAddTaskForm" class="w-full" id="addTaskForm">
        <div class="flex items-center m-6">
            <div class="w-1/5">
                <label for="name" class="font-medium"> Task Name :- </label>
            </div>
            <div class="w-4/5">
                <input type="text" v-model="formData.name" class="border-2 border-gray-200 w-full py-2 px-4" id="name" required>
            </div>
        </div>
        <div class="flex items-center m-6">
            <div class="w-1/5">
                <label for="name" class="font-medium"> Due Date :- </label>
            </div>
            <div class="w-4/5">
                <input type="date" v-model="formData.due_date" class="border-2 border-gray-200 w-full py-2 px-4"  id="dueDate" required>
            </div>
        </div>
        <div class="flex items-center m-6">
            <div class="w-1/5">
                <label for="name" class="font-medium"> Description :- </label>
            </div>
            <div class="w-4/5">
                <textarea v-model="formData.description" class="border-2 border-gray-200 w-full py-2 px-4" id="description"></textarea>
            </div>
        </div>
        <div class="m-8 flex justify-center">
            <button type="submit" class="bg-purple-700 text-white font-medium py-2 rounded-md px-6 hover:bg-purple-800 mr-6">Add</button>
            <RouterLink :to="{name: 'list'}">
                <button type="button" class="bg-emerald-700 text-white font-medium p-2 rounded-md px-6 hover:bg-emerald-800 mr-6">Back to Home</button>
            </RouterLink>
        </div>
    </form>
  </div>
</template>

<style scoped>

</style>