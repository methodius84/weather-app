<template>
  <div class="container-wide">
    <div class="title-wrapper">
      <h1>
        Welcome to the weather app<br>
        Stay ahead of the weather
      </h1>
      <div class="button-group">
        <button @click="getStarted">Get started</button>
        <button @click="learnMore" class="about">Learn More &#8594;</button>
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
    <div class="pricing">
      <div class="pricing__header">
        <span>pricing</span>
        <h2>Choose Your Plan</h2>
      </div>
      <div class="pricing__container">
        <div class="pricing__card free">
          <div class="pricing__card__header">
            <span class="pricing__card__header__title">free</span>
            <span class="pricing__card__header__description">Access current weather and three-day forecast for your city</span>
          </div>
          <div class="pricing__card__price">
            <span>$</span>
            <span>0</span>
          </div>
          <div class="pricing__card__features">
            <div class="pricing__card__features__feature-container">
              <span>&#10004;</span>
              <span>Current weather information</span>
            </div>
            <div class="pricing__card__features__feature-container">
              <span>&#10004;</span>
              <span>Three-day forecast</span>
            </div>
            <div class="pricing__card__features__feature-container">
              <span>&#10004;</span>
              <span>Search for cities to get weather</span>
            </div>
          </div>
          <button class="button-outline">Continue with Free</button>
        </div>
        <div class="pricing__card basic">
          <div class="pricing__card__header">
            <span class="pricing__card__header__title">basic</span>
            <span class="pricing__card__header__description">Enhanced features for weather enthusiasts</span>
          </div>
          <div class="pricing__card__price">
            <span>$</span>
            <span>2</span>
          </div>
          <div class="pricing__card__features">
            <div class="pricing__card__features__feature-container">
              <span>&#10004;</span>
              <span>All features of FREE plan</span>
            </div>
            <div class="pricing__card__features__feature-container">
              <span>&#10004;</span>
              <span>3-hour forecast update</span>
            </div>
            <div class="pricing__card__features__feature-container">
              <span>&#10004;</span>
              <span>Save favorite cities</span>
            </div>
            <div class="pricing__card__features__feature-container">
              <span>&#10004;</span>
              <span>Ad free experience</span>
            </div>
          </div>
          <button>Try the Basic plan</button>
        </div>
        <div class="pricing__card pro">
          <div class="pricing__card__header">
            <span class="pricing__card__header__title">pro</span>
            <span class="pricing__card__header__description">Premium weather experience with advanced tools</span>
          </div>
          <div class="pricing__card__price">
            <span>$</span>
            <span>5</span>
          </div>
          <div class="pricing__card__features">
            <div class="pricing__card__features__feature-container">
              <span>&#10004;</span>
              <span>All features of BASIC plan</span>
            </div>
            <div class="pricing__card__features__feature-container">
              <span>&#10004;</span>
              <span>Extended forecast</span>
            </div>
            <div class="pricing__card__features__feature-container">
              <span>&#10004;</span>
              <span>Telegram alerts for favorite cities</span>
            </div>
            <div class="pricing__card__features__feature-container">
              <span>&#10004;</span>
              <span>Priority customer support</span>
            </div>
          </div>
          <button>Try the Pro plan</button>
        </div>
      </div>
    </div>
    <div class="banner">
      <h1 class="banner__text">Welcome to Your Weather Companion</h1>
      <router-link to="/about" class="banner__more">Learn More</router-link>
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
import router from "@/router";
import {onBeforeUnmount} from "vue";

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

const getStarted = () => {
  router.push({
    name: 'search',
  })
}

const learnMore = () => {
  router.push({
    name: 'about',
  })
}
</script>

<style lang="sass">
</style>
