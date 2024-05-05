<script setup lang="ts">
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";
import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import {reactive} from "vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";

const data = reactive({
  links: {
    x: "https://x.com/Footballer_MU",
    instagram: "https://instagram.com/footballer_pats",
    linkedin: "https://linkedin.com/in/kirill-kobunov",
    telegram: "https://t.me/methodius84"
  }
})
</script>

<template>
  <div class="container-wide footer">
    <div class="footer__menu">
      <h1>Weather App</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <a href="https://boosty.to/methodius" target="_blank">Blog</a>
      </nav>
    </div>
    <div class="footer__separator"></div>
    <div class="footer__container">
      <span class="footer__container__text">&copy; 2024 Kobunov Kirill, All Rights Reserved</span>
      <div class="footer__container__icons">
        <a :href="data.links.x" target="_blank"><TwitterIcon :color="'#080A45'"/></a>
        <a :href="data.links.linkedin" target="_blank"><LinkedInIcon :color="'#080A45'"/></a>
        <a :href="data.links.instagram" target="_blank"><InstagramIcon :color="'#080A45'"/></a>
        <a :href="data.links.telegram" target="_blank"><TelegramIcon :color="'#080A45'"/></a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>