<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<!-- AppLayout.vue -->
<template>
    <Navbar/>
  <div class="app-layout-container">
    <header class="app-header">
      <!-- Default content for the header slot if none provided by parent -->
      <slot name="header">
        <h1>Mental Health Wellness App</h1>
      </slot>
    </header>

    <div class="content-wrapper">
      <aside class="app-sidebar">
        <!-- Placeholder for sidebar content -->
        <slot name="sidebar">
          <p>Default Sidebar Content</p>
        </slot>
      </aside>

      <main class="app-main">
        <!-- Main content placeholder (default slot) -->
        <slot>
          <h2>Welcome</h2>
          <p>This is the Wellness Page.</p>
        </slot>
      </main>
    </div>

    
  </div>
  <Footer/>
</template>

<style scoped>
/* Basic Flexbox styling for flexibility */
.app-layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
}

.content-wrapper {
  display: flex;
  flex: 1; /* Allows content area to grow and fill available space */
}

.app-header, .app-footer {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

.app-sidebar {
  background-color: #f4f4f4;
  padding: 1rem;
  flex-basis: 200px; /* Fixed width sidebar, adjust as needed */
}

.app-main {
  padding: 1rem;
  flex: 1; /* Allows main content to take up remaining space */
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
  .app-sidebar {
    flex-basis: auto; /* Full width sidebar on small screens */
  }
}
</style>
