<script setup lang="ts">
import {onMounted, ref} from "vue";
import api from "@/api";
import {City} from "@/classes/City";
import CityComponent from "@/components/CityComponent.vue";

const cities = ref<City[]>([])

onMounted(loadCities)

async function loadCities() {
  try {
    cities.value = await api.cities()
        .then(citiesObj => citiesObj.Cities)
        .catch(e => console.error('Error loading cities:', e))
  } catch (e) {
    console.log('Error fetching cities: ', e)
  }
}
</script>

<template>
  <div class="city-wrapper" v-for="city in cities" :key="city.uuid">
    <CityComponent :city="city"/>
  </div>
</template>

<style scoped>
.city-wrapper {
  display: flex;
  position: relative;
  justify-content: start;
  flex-direction: column;
  padding: 5px;
}
</style>