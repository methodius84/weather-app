<script setup lang="ts">
import {defineProps} from "vue";
import {City} from "@/classes/City";

const props = defineProps<{
  city: City
}>()

</script>

<template>
  <div>
    <h3>{{ city.name }}</h3>
<!--    <p>Temperature: {{ weatherInfo.temperature }}</p>-->
<!--    <p>Humidity: {{ weatherInfo.humidity }}</p>-->
<!--    <p>Wind Speed: {{ weatherInfo.windSpeed }}</p>-->
  </div>
</template>

<style scoped>

</style>