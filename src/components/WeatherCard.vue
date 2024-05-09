<script setup lang="ts">
import {defineProps} from "vue";
import {CityForecast} from "@/classes/CityForecast";

const props = defineProps<{
  forecast: CityForecast
}>()
</script>

<template>
  <div class="card-wrapper">
    <div class="weather-title">Today's overview</div>
    <div class="weather-header">
      <div class="temperature">
        Temperature: {{forecast.temperature}} &#x2103;
        <span class="feels-like">Feels like: {{forecast.feels_like}} &#x2103;</span>
      </div>
<!--  todo добавить иконку погоды-->
      <div class="weather-description">
        {{forecast.weather}}
        <span class="detailed">{{forecast.weather_description}}</span>
      </div>
    </div>

    <div class="weather-body">
      <span class="humidity">Humidity: {{forecast.humidity}}%</span>
      <span class="pressure">Pressure: {{forecast.pressure}}</span>
      <span class="cloudiness">Cloudiness: {{forecast.cloudiness}}%</span>
      <span class="wind-speed">Wind speed: {{forecast.wind_speed}}</span>
      <span class="visibility">Visibility: {{forecast.visibility}} m</span>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "../assets/css/variables"
.card-wrapper
  border-radius: 5px
  position: relative
  height: auto
  width: 100%
  padding: 5px
  border: 1px solid $primary-background

  & > .weather-title
    border-radius: 4px
    text-align: center
    position: relative
    border: 1px solid $primary-background
    background-color: $card-background
    color: $text-secondary
    padding: 5px
    font-weight: bolder
    margin: 5px


  .weather-header
    font-size: 1em
    display: flex
    justify-content: space-between
    padding: 5px
    & > .temperature
      align-items: flex-end
      display: flex
      flex-direction: column
      font-weight: bold
      & > .feels-like
        font-size: 0.9em
        font-weight: normal
        font-style: italic



    & > .weather-description
      display: flex
      align-items: center
      flex-direction: column
      font-weight: bolder
      & > .detailed
        font-size: 0.9em
        font-weight: normal
        font-style: italic

  .weather-body
    padding: 1em
    margin-top: 5em
    display: flex
    align-items: center
    justify-content: center
    flex-flow: row wrap
    font-style: oblique
    font-weight: normal
    & > span
      padding: .5em
      margin: .5em
      border: 1px solid $primary-background
      border-radius: 4px



</style>