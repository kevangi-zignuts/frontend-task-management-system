<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="bg-green-600 p-5">
    <h1 class="text-3xl md:text-5xl font-bold text-center text-white">
      <font-awesome-icon :icon="['fas', 'list-check']" />
    </h1>
  </div>
  <RouterView />
</template>

<style scoped>

</style>
