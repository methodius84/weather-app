<template>
  <div class="container-wide">
    <div class="title-wrapper">
      <h1>
        Welcome to the weather app<br>
        Stay ahead of the weather
      </h1>
      <div class="button-group">
        <button>Get started</button>
        <button class="about">Learn More &#8594;</button>
      </div>
    </div>
    <div class="features">
      <div class="feature-title">
        <h2>Key features of My Weather App</h2>
      </div>
      <div class="feature-container">
        <FeatureCard :title="data.features.first.title" :text="data.features.first.text"/>
        <FeatureCard :title="data.features.second.title" :text="data.features.second.text"/>
        <FeatureCard :title="data.features.third.title" :text="data.features.third.text"/>
        <FeatureCard :title="data.features.fourth.title" :text="data.features.fourth.text"/>
      </div>
    </div>
<!--    <div class="city-list">-->
<!--      <CityList/>-->
<!--    </div>-->
  </div>
</template>

<script setup lang="ts">
// const location = navigator.geolocation.getCurrentPosition()
// import CityList from "@/components/CityList.vue";
import FeatureCard from "@/components/FeatureCard.vue";

const data = {
  features: {
    first: {
      title: 'Current Weather',
      text: "Get real-time weather information for your current location"
    },
    second: {
      title: 'Three day forecast',
      text: "Plan ahead with a detailed forecast for the next three days"
    },
    third: {
      title: 'City Search',
      text: "Easily search and view weather information for any city worldwide"
    },
    fourth: {
      title: 'Customizable Settings',
      text: "Personalize your weather app experience with customizable settings"
    },
  }
}
</script>

<style lang="sass">
</style>
