<template>
  <div id="weather-app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <RouterView v-slot="{ Component }">
      <OpacityTransition>
        <Component :is="Component"/>
      </OpacityTransition>
    </RouterView>
  </div>
</template>

<style>
#weather-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup lang="ts">
import OpacityTransition from "@/components/transitions/OpacityTransition.vue";
</script>