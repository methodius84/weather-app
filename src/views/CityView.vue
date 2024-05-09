<template>
  <div class="container-wide">
    <div class="city-wrapper">
<!--      @todo переделать дизайн WeatherCard -->
      <WeatherCard :forecast="data.current" v-if="data.current && !data.showLoader"/>
      <div class="load-wrapper" v-if="data.showLoader && !data.current">
        <div class="activity"></div>
      </div>
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
  data.current = await loadCity(cityId as string)
  data.showLoader = false
})

const loadCity = async (uuid: string): Promise<CityForecast>  => {
  return api.forecast(uuid)
      .then(s => s.Forecast)
}
</script>

<style scoped>

</style>