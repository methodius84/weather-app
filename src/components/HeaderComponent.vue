<script setup lang="ts">
const toggleMenu = () => {
  const checkbox = document.getElementById('check-menu')
  if (checkbox) checkbox.checked = !checkbox.checked
}
</script>

<template>
  <div class="container-wide header">
    <div class="app-name">methodius weather app</div>
    <div class="menu-wrapper">
      <nav id="nav">
        <!--      <label for="check-menu"><span>Menu</span></label>-->
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/search">Search City</router-link>
      </nav>
      <input type="checkbox" id="check-menu">
      <div class="toggle-nav" @click="toggleMenu">

        <div class="burger-line first"></div>
        <div class="burger-line second"></div>
        <div class="burger-line third"></div>
        <div class="burger-line fourth"></div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
</style>