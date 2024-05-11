<template>
  <div class="container-wide">
    <div class="city-wrapper">
      <div class="load-wrapper" v-if="data.showLoader">
        <div class="activity"></div>
      </div>
      <WeatherCard :forecast="data.current" v-else-if="data.current !== null"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive} from "vue";
import { City } from "@/classes/City";
import {useRoute} from "vue-router";
import api from "@/api";
import {CityForecast} from "@/classes/CityForecast";
import WeatherCard from "@/components/WeatherCard.vue";

const route = useRoute()

const data = reactive({
  city: null as City | null,
  current: null as CityForecast | null,
  showLoader: false as boolean
})
onMounted(async () => {
  data.showLoader = true
  const cityId = route.params.uuid
  const currentWeather = await loadCity(cityId as string)
  data.showLoader = false
  data.current = currentWeather
})

const loadCity = async (uuid: string): Promise<CityForecast>  => {
  return api.forecast(uuid)
      .then(s => s.Forecast)
}
</script>

<style scoped>

</style>