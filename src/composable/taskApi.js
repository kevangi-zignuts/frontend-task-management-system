/* eslint-disable */
import { ref, isRef } from 'vue'
import axios from 'axios'

export default function useTask() {
    const url = "http://127.0.0.1:8000/api/"
    const tasks = ref([])
    const error = ref(null)

    // Get All Task Data
    const getAllTasks = async () => {
        tasks.value = []
        error.value = null

        try {
            const response = await axios(url)
            tasks.value = response.data
        } catch (e) {
            error.value = e
        }
    }

    // Get Single Task Data
    const getSingleTask = async (id) => {
        tasks.value = []
        error.value = null

        try {
            const response = await axios("http://127.0.0.1:8000/api/view/" + id)
            tasks.value = response.data
        } catch (e) {
            error.value = e
        }
    }

    // Add Task Data
    const createTask = async (formData) => {
        tasks.value = []
        error.value = null

        try {
            const config = {
                method: 'POST',
                url: "http://127.0.0.1:8000/api/store",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(formData)
            }
            const response = await axios(config)
            tasks.value = response.data
        } catch (e) {
            error.value = e
        }
    }

    // update Task Data
    const updateTask = async (id, data) => {
        tasks.value = []
        error.value = null

        try {
            const config = {
                method: 'POST',
                url: "http://127.0.0.1:8000/api/update/" + id,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data)
            }
            const response = await axios(config)
        } catch (e) {
            error.value = e

        }
    }

    // Delete Task Data
    const dalateTask = async (id) => {
        tasks.value = []
        error.value = null

        try {
            const response = await axios("http://127.0.0.1:8000/api/delete/" + id)
            tasks.value = response.data
        } catch (e) {
            error.value = e
        }
    }

    return { tasks, error, getAllTasks, getSingleTask, createTask, updateTask, dalateTask }
}