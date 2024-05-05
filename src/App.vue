<template>
  <div id="weather-app">
    <HeaderComponent/>
    <RouterView v-slot="{ Component }">
      <OpacityTransition>
        <Component :is="Component"/>
      </OpacityTransition>
    </RouterView>
    <FooterComponent/>
  </div>
</template>

<style>
</style>
<script setup lang="ts">
import OpacityTransition from "@/components/transitions/OpacityTransition.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {RouterView} from "vue-router";
</script>