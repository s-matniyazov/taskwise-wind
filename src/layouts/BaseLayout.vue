<template>
  <Navbar/>

  <Sidebar/>

  <div class="pt-4 pb-2 px-2 sm:ml-64 sm:mt-12">
    <router-view/>
  </div>
</template>

<script setup>
import Navbar from "@/components/base/Navbar.vue";
import Sidebar from "@/components/base/Sidebar.vue";

</script>

<style scoped>

</style>