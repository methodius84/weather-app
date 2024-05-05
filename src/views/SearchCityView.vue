<script setup lang="ts">

import SearchIcon from "@/components/icons/SearchIcon.vue";
import {reactive, watch} from "vue";
import { City } from "@/classes/City";
import api from "@/api";

const data = reactive({
  cities: {
    type: Array as City[] | null,
    default: {}
  },
  searchQuery: '',
  timer: 0
})
watch(() => data.searchQuery, nv => {
  clearTimeout(data.timer)
  data.timer = setTimeout(() => {
    const citiesaaa = api.search(nv)
        .then(citiesObj => citiesObj.Cities)
        .catch(e => console.error('Error loading cities:', e))
  }, 500)
})



</script>

<template>
  <div class="container">
    <div class="search-title">
      <h1>Search for the city</h1>
    </div>
    <div class="search">

      <div class="search__input">
        <input id="input-text" name="input-text" spellcheck="false" type="text" v-model="data.searchQuery">
        <span class="placeholder">Type city name</span>
      </div>
      <SearchIcon/>
    </div>
    <div class="cities"></div>
  </div>
</template>

<style scoped>

</style>