<template>
  <div class="home">
    <h1>Welcome to weather app</h1>
    <div class="city-list">
      <CityList/>
    </div>
  </div>
</template>

<script setup lang="ts">
// const location = navigator.geolocation.getCurrentPosition()
import CityList from "@/components/CityList.vue";
</script>

<style>
.home {
  position: relative;
  & > .city-list {
    border: 1px solid #2c3e50;
    border-radius: 5px;
  }
}
</style>
