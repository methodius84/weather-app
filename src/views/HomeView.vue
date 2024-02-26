<template>
  <div class="home">
    <h1>Welcome to weather app</h1>
    <ul v-if="cities">
      <li v-for="city in cities" :key="city.id">
        {{ city.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// const location = navigator.geolocation.getCurrentPosition()

import {onMounted, ref} from "vue";
import api from "@/api";
import {City} from "@/classes/City";

let cities = ref<City[]>([])

onMounted(async () => {
  try {
    cities.value = await loadCities().then(citiesObj => citiesObj.Cities).catch(e => console.error('Error loading cities:', e))
  } catch (e) {
    console.log('Error fetching cities: ', e)
  }
})

async function loadCities() {
  return await api.cities();
}
</script>
