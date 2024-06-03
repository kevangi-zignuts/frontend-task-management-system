<script setup>
/* eslint-disable */
import { onMounted } from "vue";
import { useRoute } from 'vue-router';
import useTask from "../../composable/taskApi.js"; 

const { tasks, error, getSingleTask } = useTask();
const route = useRoute();
onMounted(() => {
    getSingleTask(route.params.id)
});
console.log("tasks :- " , tasks);

</script>

<template>
  <div class="shadow-md pb-6">
    <table class="table-auto w-full">
        <thead class="bg-slate-600 text-white">
            <tr>
                <th class="py-1">ID</th>
                <th class="py-1">Task Name</th>
                <th class="py-1">Due Date</th>
                <th class="py-1">Description</th>
            </tr>
        </thead>
        <tbody class="text-center">
            <tr v-for="task in tasks" :key="task.id">
                <td class="py-2">{{task.id}}</td>
                <td class="py-2">{{task.name}}</td>
                <td class="py-2">{{task.due_date}}</td>
                <td class="py-2">{{task.description}}</td>
            </tr>
        </tbody>
    </table>
    <div class="flex justify-center">
        <RouterLink :to="{name: 'list'}">
            <button type="button" class="bg-emerald-700 text-white font-medium p-2 rounded-md px-6 hover:bg-emerald-800 mr-6">Back to Home</button>
        </RouterLink>
    </div>
</div>
</template>

<style scoped>

</style>