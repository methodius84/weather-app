<script setup lang="ts">
import {defineProps, ref} from "vue";
import {City} from "@/classes/City";
import {CityForecast} from "@/classes/CityForecast";
import api from "@/api";
import WeatherCard from "@/components/WeatherCard.vue";

const props = defineProps<{
  city: City
}>()

let data = ref<CityForecast | null>(null)

const cityDataToggle = ref<boolean>(false)
const buttonText = ref<string>('Show')
const getData = async (uuid: string) => {
  const forecast = await api.forecast(uuid)
      .then(s => s.Forecast)
  return forecast ?? null
}

async function toggleCity(uuid: string) {
  if (!cityDataToggle.value) {
    data.value = await getData(uuid)

    cityDataToggle.value = true

    buttonText.value = 'Hide'
    return
  }
  cityDataToggle.value = false
  buttonText.value = 'Show'
}
</script>

<template>
<div class="city-wrapper">
  <div class="city-data">
    <p>{{ city.name }}</p>
    <button class="weather-button" @click="toggleCity(city.uuid)">{{buttonText}}</button>
  </div>
  <WeatherCard v-if="cityDataToggle" :forecast="data"/>
</div>
</template>

<style scoped>
.city-wrapper {
  position: relative;
  & > .city-data {
    position: relative;
    flex-direction: row;
    display: flex;

    & > .weather-button {
      border: none;
      margin: 15px;
      justify-content: center;
      background: #2c3e50;
      display: inline-block;
      padding: 5px 10px 5px 10px;
      text-decoration: none;
      color: #42b983;
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 1000;
      border-radius: 10px;
      transition-duration: 0.5s;
    }
    & > .weather-button:hover {
      letter-spacing: 0.2rem;
    }
  }
}
@media only screen and (max-width: 1080px) {
  .city-wrapper {
    padding: 2rem 1rem;
  }
}
</style>