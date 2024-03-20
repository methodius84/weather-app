<script setup lang="ts">
import {defineProps, ref} from "vue";
import {City} from "@/classes/City";
import api from "@/api";
import {CityForecast} from "@/classes/CityForecast";

const props = defineProps<{
  city: City
}>()

let data = ref<CityForecast | null>(null)

let cityDataToggle = false
const getData = async (uuid: string) => {
  const forecast = await api.forecast(uuid)
      .then(s => s.Forecast)
  return forecast ?? null
}

async function toggleCity(uuid: string) {
  data.value = await getData(uuid)
  if (data.value) {
    cityDataToggle = true
  }
}
</script>

<template>
  <div class="card-wrapper">
    <div class="city-name">
      <h3>{{ city.name }}</h3>
      <button @click="toggleCity(city.uuid)">Показать</button>
    </div>
    <div class="city-data" v-if="cityDataToggle">
      <p>{{data}}</p>
    </div>
<!--    <p>Temperature: {{ weatherInfo.temperature }}</p>-->
<!--    <p>Humidity: {{ weatherInfo.humidity }}</p>-->
<!--    <p>Wind Speed: {{ weatherInfo.windSpeed }}</p>-->
  </div>
</template>

<style scoped>
.card-wrapper {
  & > .city-name {
    position: relative;
    flex-direction: row;
    display: flex;
  }
}
</style>