<template>
  <div class="home">
    <h1>Welcome to weather app</h1>
    <CityList/>
  </div>
</template>

<script setup lang="ts">
// const location = navigator.geolocation.getCurrentPosition()
import CityList from "@/components/CityList.vue";
</script>

<style>
.home {
  position: relative;
}
</style>
