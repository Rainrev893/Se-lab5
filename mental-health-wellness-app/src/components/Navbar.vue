<!-- src/components/NavBar.vue -->
<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-brand">MHWA</router-link>
    <button @click="toggleMenu" class="navbar-toggle">
      <span>&#9776;</span>
    </button>
    <div :class="{ 'is-active': isMobileMenuOpen }" class="navbar-menu">
      <router-link to="/" class="navbar-item" @click="closeMenu">Home</router-link>
      <router-link to="/breathing" class="navbar-item" @click="closeMenu">Breathing</router-link>
      <router-link to="/wellness" class="navbar-item" @click="closeMenu">Wellness</router-link>
      <router-link to="/ai-support" class="navbar-item" @click="closeMenu">Ai Support</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
/* Add your CSS styling here. Use media queries to implement responsiveness,
   e.g., hiding the toggle button on desktop and showing menu links,
   while doing the opposite on mobile. */
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 10px; background-color: #333; color: white; }
.navbar-brand { color: white; text-decoration: none; font-size: 1.5rem; }
.navbar-toggle { display: none; /* Hide on desktop */ cursor: pointer; }
.navbar-menu { display: flex; }
.navbar-item { color: white; text-decoration: none; padding: 0 10px; }
.navbar-item.router-link-active { font-weight: bold; text-decoration: underline; }
/* Example media query for mobile */
@media (max-width: 768px) {
  .navbar-menu { display: none; flex-direction: column; width: 100%; }
  .navbar-menu.is-active { display: flex; }
  .navbar-toggle { display: block; }
}
</style>
