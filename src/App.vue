<template>
  <div id="weather-app">
    <HeaderComponent/>
    <RouterView v-slot="{ Component }">
      <OpacityTransition>
        <Component :is="Component"/>
      </OpacityTransition>
    </RouterView>
  </div>
</template>

<style>
#weather-app {
  text-align: center;
}
</style>
<script setup lang="ts">
import OpacityTransition from "@/components/transitions/OpacityTransition.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>