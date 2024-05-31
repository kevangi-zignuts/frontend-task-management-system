<script setup>
    import { RouterLink } from "vue-router";
</script>

<template>
    <div>
        <div class="bg-orange-600 p-4 grid grid-cols-9">
            <div class="col-span-6 md:col-span-8">
                <h1 class="text-3xl font-bold text-center mt-3 text-white">Task List</h1>
            </div>
            <div class="text-right">
                <RouterLink :to="{name: 'create'}">
                    <button class="text-white text-md bg-green-700 hover:bg-green-800 font-medium rounded-lg p-2 px-6"><font-awesome-icon :icon="['fas', 'plus']" /> Add Task</button>
                </RouterLink>                
            </div>
        </div>

        <table class="table-auto w-full">
            <thead class="bg-slate-600 text-white">
                <tr>
                    <th class="py-1">No</th>
                    <th class="py-1">Task Name</th>
                    <th class="py-1">Due Date</th>
                    <th class="py-1">Action</th>
                </tr>
            </thead>
            <tbody class="text-center">
                <tr>
                    <td class="py-2">1</td>
                    <td class="py-2">Task1</td>
                    <td class="py-2">24/06/2024</td>
                    <td class="py-2">
                        <font-awesome-icon class="text-blue-500 h-5 w-5" :icon="['fas', 'eye']" /> 
                        <font-awesome-icon class="text-emerald-500 h-5 w-5 mx-5" :icon="['fas', 'pen-to-square']" />
                        <font-awesome-icon class="text-red-500 h-5 w-5" :icon="['fas', 'trash']" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>