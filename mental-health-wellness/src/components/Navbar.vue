<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand">MHWA</router-link>

      <button 
        class="navbar-toggle" 
        @click="toggleMenu" 
        :aria-expanded="isMobileMenuOpen"
        aria-label="menu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <div v-if="isMobileMenuOpen" class="navbar-overlay" @click="closeMenu"></div>

      <div :class="['navbar-menu', { 'is-active': isMobileMenuOpen }]">
        <router-link to="/" class="navbar-item" @click="closeMenu">Home</router-link>
        <router-link to="/breathing" class="navbar-item" @click="closeMenu">Breathing</router-link>
        <router-link to="/wellness" class="navbar-item" @click="closeMenu">Wellness</router-link>
        <router-link to="/ai-support" class="navbar-item" @click="closeMenu">AI Support</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
const toggleMenu = () => isMobileMenuOpen.value = !isMobileMenuOpen.value;
const closeMenu = () => isMobileMenuOpen.value = false;
</script>

<style scoped>
/* Layout Constants */
.navbar {
  background-color: #1a1a1a;
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.navbar-brand {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.navbar-menu {
  display: flex;
  gap: 20px;
}

.navbar-item {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.navbar-item:hover {
  color: white;
}

/* Active Link State */
.router-link-active {
  color: #42b883; /* Vue green or your brand color */
  font-weight: 600;
}

.navbar-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

/* Responsive Mobile Styles */
@media (max-width: 768px) {
  .navbar-toggle {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  /* Hamburger Bars */
  .navbar-toggle span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: white;
    transition: 0.3s;
  }

  .navbar-menu {
    position: fixed;
    top: 0;
    right: -100%; /* Start off-screen */
    flex-direction: column;
    background-color: #1a1a1a;
    width: 250px;
    height: 100vh;
    padding: 80px 40px;
    transition: right 0.3s ease-in-out;
    z-index: 1001;
    box-shadow: -5px 0 15px rgba(0,0,0,0.3);
  }

  .navbar-menu.is-active {
    right: 0; /* Slide in */
  }

  .navbar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
}
</style>