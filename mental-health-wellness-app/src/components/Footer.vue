<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3 class="footer-brand">MHWA</h3>
        <p class="footer-tagline">
          Empowering mental health and wellness through technology.
        </p>
      </div>

      <div class="footer-section">
        <h4>Resources</h4>
        <nav class="footer-nav">
          <router-link to="/about">About Us</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/wellness">Wellness Tips</router-link>
        </nav>
      </div>

      <div class="footer-section">
        <h4>Legal</h4>
        <nav class="footer-nav">
          <router-link to="/terms">Terms of Service</router-link>
          <router-link to="/privacy">Privacy Policy</router-link>
        </nav>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} MHWA. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.app-footer {
  background-color: #1a1a1a; /* Dark background for modern look */
  color: #f4f4f4;
  padding: 60px 20px 20px;
  border-top: 1px solid #333;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; /* Larger first column */
  gap: 40px;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #42b883; /* Vue Green / Brand Color */
}

.footer-section h4 {
  font-size: 1.1rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-tagline {
  line-height: 1.6;
  color: #aaa;
  max-width: 300px;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-nav a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.2s;
  font-size: 0.95rem;
}

.footer-nav a:hover {
  color: white;
  text-decoration: underline;
}

.footer-bottom {
  max-width: 1200px;
  margin: 40px auto 0;
  padding-top: 20px;
  border-top: 1px solid #333;
  text-align: center;
  color: #777;
  font-size: 0.85rem;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .footer-tagline {
    margin: 0 auto;
  }
}
</style>