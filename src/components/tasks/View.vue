<script setup>

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
            <tr>
                <td class="py-2">1</td>
                <td class="py-2">Task1</td>
                <td class="py-2">24/06/2024</td>
                <td class="py-2">This is a description of Task1</td>
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