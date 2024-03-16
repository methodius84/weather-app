<script setup lang="ts">
import {onMounted, ref} from "vue";
import api from "@/api";
import {City} from "@/classes/City";
import WeatherCard from "@/components/WeatherCard.vue";

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

const toggleCity = (uuid: string) => {
  console.log(uuid)
}
</script>

<template>
  <div class="city-wrapper" v-if="cities">
    <div v-for="city in cities" :key="city.uuid">
      <button @click="toggleCity(city.uuid)">Показать</button>
      <WeatherCard :city="city"/>
    </div>
  </div>
</template>

<style scoped>

</style>