<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} My Website. All rights reserved.</p>
      <nav class="footer-links">
        <a href="/about">About Us</a> |
        <a href="/contact">Contact</a> |
        <a href="/terms">Terms of Service</a> |
        <a href="/privacy">Privacy Policy</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<style scoped>
.app-footer {
  background-color: #ffffff;
  border-top: 1px solid #ddd;
  padding: 20px 0;
  text-align: center;
  margin-top: auto; /* Pushes the footer to the bottom if content is short */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-links a {
  margin: 0 10px;
  color: #ffffff;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
