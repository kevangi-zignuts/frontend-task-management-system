<script setup>
import { ref } from 'vue';

const dueDate = ref('2024-06-24');
const handleUpdateTaskForm = async () => {
    console.log("Updated");
}
</script>

<template>
<div class="shadow-md pb-6">
    <div class="bg-indigo-600 p-4">
        <h1 class="text-3xl font-bold text-center text-white">Edit Task</h1>
    </div>

    <form @submit.prevent="handleUpdateTaskForm" class="w-full" id="addTaskForm">
        <div class="flex items-center m-6">
            <div class="w-1/5">
                <label for="name" class="font-medium"> Task Name :- </label>
            </div>
            <div class="w-4/5">
                <input type="text" value="Task1" class="border-2 border-gray-200 w-full py-2 px-4" id="name" required>
            </div>
        </div>
        <div class="flex items-center m-6">
            <div class="w-1/5">
                <label for="name" class="font-medium"> Due Date :- </label>
            </div>
            <div class="w-4/5">
                <input type="date" v-model="dueDate" class="border-2 border-gray-200 w-full py-2 px-4" id="dueDate" required>
            </div>
        </div>
        <div class="flex items-center m-6">
            <div class="w-1/5">
                <label for="name" class="font-medium"> Description :- </label>
            </div>
            <div class="w-4/5">
                <textarea class="border-2 border-gray-200 w-full py-2 px-4" id="description">This is a description of Task1</textarea>
            </div>
        </div>
        <div class="m-8 flex justify-center">
            <button type="submit" class="bg-purple-700 text-white font-medium py-2 rounded-md px-6 hover:bg-purple-800 mr-6">Update</button>
            <RouterLink :to="{name: 'list'}">
                <button type="button" class="bg-emerald-700 text-white font-medium p-2 rounded-md px-6 hover:bg-emerald-800 mr-6">Back to Home</button>
            </RouterLink>
        </div>
    </form>
</div>
</template>

<style scoped>

</style>
