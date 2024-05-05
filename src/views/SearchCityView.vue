<script setup lang="ts">

import SearchIcon from "@/components/icons/SearchIcon.vue";
</script>

<template>
  <div class="container">
    <div class="search-title">
      <h1>Search for the city</h1>
    </div>
    <div class="search">

      <div class="search__input">
        <input type="text" name="input-text" id="input-text" required spellcheck="false">
        <span class="placeholder">Type city name</span>
      </div>
      <SearchIcon/>
    </div>
  </div>
</template>

<style scoped>

</style>