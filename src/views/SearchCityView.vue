<template>
  <div class="container">
    <div class="search-title">
      <h1>Search for the city</h1>
    </div>
    <div class="search">

      <div class="search__input">
        <input id="input-text" name="input-text" spellcheck="false" type="text" v-model="data.searchQuery" required>
        <span class="placeholder">Type city name</span>
      </div>
      <SearchIcon/>
    </div>
    <div class="cities-wrapper">
      <div class="cities-results" v-if="data.cities !== null">
        <div class="city-row" v-for="city in data.cities" :key="city.uuid" @click="showCity(city.uuid)">
          > {{city.name}}
        </div>
      </div>
      <div class="load-wrapper" v-show="data.showLoader">
        <div class="activity"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import SearchIcon from "@/components/icons/SearchIcon.vue";
import {reactive, watch} from "vue";
import api from "@/api";
import router from "@/router";

const data = reactive({
  cities: null,
  showLoader: false,
  searchQuery: '',
  timer: 0
})
watch(() => data.searchQuery, nv => {
  clearTimeout(data.timer)
  data.timer = setTimeout(async () => {
    if (nv !== '') {
      data.showLoader = true
      const cities = await api.search(nv)
          .then(citiesObj => citiesObj.Cities)
          .catch(e => console.error('Error loading cities:', e))
      if (cities instanceof Array) data.cities = cities
      setTimeout(() => {
        data.showLoader = false
      }, 2000)

    } else {
      data.cities = []
      data.showLoader = false
    }
  }, 500)
})

const showCity = (uuid: string) => {
  router.push({
    name: 'city',
    params: {
      uuid: uuid,
    }
  })
}
</script>

<style scoped>

</style>