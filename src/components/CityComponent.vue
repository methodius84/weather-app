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
const buttonText = ref<string>('Показать')
const getData = async (uuid: string) => {
  const forecast = await api.forecast(uuid)
      .then(s => s.Forecast)
  return forecast ?? null
}

async function toggleCity(uuid: string) {
  if (!cityDataToggle.value) {
    data.value = await getData(uuid)

    cityDataToggle.value = true

    buttonText.value = 'Скрыть'
    return
  }
  cityDataToggle.value = false
  buttonText.value = 'Показать'
}
</script>

<template>
<div class="city-wrapper">
  <div class="city-data">
    <h3>{{ city.name }}</h3>
    <button class="weather-button" @click="toggleCity(city.uuid)">{{buttonText}}</button>
  </div>
  <WeatherCard v-if="cityDataToggle" :forecast="data"/>
</div>
</template>

<style scoped>
.city-wrapper {
  flex-direction: row;
  & > .city-data {
    position: relative;
    flex-direction: row;
    display: flex;

    & > .weather-button {
      margin: 0 10px 10px 10px;
    }
  }
}
</style>