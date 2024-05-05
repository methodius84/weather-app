<script setup lang="ts">
const toggleMenu = () => {
  const checkbox = document.getElementById('check-menu')
  if (checkbox) checkbox.checked = !checkbox.checked
}
const clickEvent = () => {
  const checkbox = document.getElementById('check-menu')
  if (checkbox) checkbox.checked = false
}
</script>

<template>
  <div class="container-wide header">
    <div class="app-name">methodius weather</div>
    <div class="menu-wrapper">
      <input type="checkbox" id="check-menu">
      <nav id="nav">
        <router-link @click="clickEvent" to="/">Home</router-link>
        <router-link @click="clickEvent" to="/about">About</router-link>
        <router-link @click="clickEvent" to="/search">Search City</router-link>
      </nav>
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