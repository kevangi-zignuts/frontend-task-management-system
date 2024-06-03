<script setup>
/* eslint-disable */
    import { RouterLink } from "vue-router";
    import useTask from "../../composable/taskApi.js"; 
    import { onMounted } from "vue";

    const { tasks, error, getAllTasks, dalateTask } = useTask();
    onMounted(getAllTasks);    

    const deleteTaskData = async (id) => {
        if(!window.confirm("Are you Sure ?")){
            return
        }

        await dalateTask(id);
        await getAllTasks();
    }
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

        <div v-if="error" class=" bg-red-100 border border-red-600 p-3 m-3 rounded-md text-red-700 text-lg">
            {{ error }}
            <!-- {{ error.value.messgae }} -->
        </div>

        <table v-else-if="tasks" class="table-auto w-full">
            <thead class="bg-slate-600 text-white">
                <tr>
                    <th class="py-1">No</th>
                    <th class="py-1">Task Name</th>
                    <th class="py-1">Due Date</th>
                    <th class="py-1">Action</th>
                </tr>
            </thead>
            <tbody class="text-center">
                <tr v-if="tasks.length > 0" v-for="task in tasks" :key="task.id">
                    <td class="py-2">{{ task.id }}</td>
                    <td class="py-2">{{ task.name }}</td>
                    <td class="py-2">{{ task.due_date }}</td>
                    <td class="py-2">
                        <RouterLink :to="{name: 'view', params: {id: task.id}}">
                            <font-awesome-icon class="text-blue-500 h-5 w-5" :icon="['fas', 'eye']" /> 
                        </RouterLink>
                        <RouterLink :to="{name: 'edit', params: {id: task.id}}">
                            <font-awesome-icon class="text-emerald-500 h-5 w-5 mx-5" :icon="['fas', 'pen-to-square']" />
                        </RouterLink>
                        <font-awesome-icon class="text-red-500 h-5 w-5 cursor-pointer" :icon="['fas', 'trash']" @click="deleteTaskData(task.id)" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>