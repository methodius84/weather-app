<script setup lang="ts">
import {defineProps, onMounted, ref} from "vue";
import {CityForecast} from "@/classes/CityForecast";

const props = defineProps<{
  forecast: CityForecast
}>()

onMounted(() => {
  console.log(props.forecast)
})
</script>

<template>
  <div class="card-wrapper">
    <div class="weather-title">Now</div>
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

<style scoped>
.card-wrapper {
  border-radius: 5px;
  position: relative;
  height: auto;
  width: 400px;
  padding: 5px;
  border: 1px solid #2c3e50;
  color: #2c3e50;
  background-color: antiquewhite;

  & > .weather-title {
    border-radius: 4px;
    text-align: center;
    position: relative;
    border: 1px solid #2c3e50;
    background-color: #2c3e50;
    color: white;
    padding: 3px;
    font-weight: bolder;
    margin: 5px;
  }

  .weather-header {
    font-size: 1em;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    & > .temperature {
      align-items: flex-end;
      display: flex;
      flex-direction: column;
      font-weight: bold;
      & > .feels-like {
        font-size: 0.9em;
        font-weight: normal;
        font-style: italic;
      }
    }

    & > .weather-description {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-weight: bolder;
      & > .detailed {
        font-size: 0.9em;
        font-weight: normal;
        font-style: italic;
      }
    }
  }

  .weather-body {
    display: flex;
    flex-flow: row wrap;
    font-style: oblique;
    font-weight: normal;
    & > span {
      padding: 5px;
      margin: 3px;
      border: 1px solid #2c3e50;
      border-radius: 4px;
    }
  }
}
</style>