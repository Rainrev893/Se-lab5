<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<!-- AppLayout.vue -->
<template>
  <Navbar />
  
  <div class="home-container">
    <header class="hero-section">
      <div class="hero-content">
        <h1>Breathe. Reflect. <span class="highlight">Heal.</span></h1>
        <p>Your digital sanctuary for mental wellness and AI-guided support.</p>
        <div class="hero-actions">
          <router-link to="/breathing" class="btn btn-primary">Start Breathing</router-link>
          <router-link to="/wellness" class="btn btn-primary">Read Wellness Tips</router-link>
          <router-link to="/ai-support" class="btn btn-secondary">Talk to AI</router-link>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-blob"></div>
      </div>
    </header>

    <section class="features-grid">
      <div class="feature-card">
        <div class="icon">🧘</div>
        <h3>Guided Breathing</h3>
        <p>Find your center with interactive exercises designed to reduce anxiety.</p>
      </div>
      <div class="feature-card">
        <div class="icon">🤖</div>
        <h3>AI Support</h3>
        <p>24/7 empathetic listening and mental health resources at your fingertips.</p>
      </div>
      <div class="feature-card">
        <div class="icon">🌿</div>
        <h3>Wellness Tracking</h3>
        <p>Monitor your progress and build healthy habits over time.</p>
      </div>
    </section>
  </div>

  <Footer />
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;
  gap: 40px;
}

.hero-content h1 {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 20px;
  color: #2c3e50;
}

.highlight {
  color: #42b883;
}

.hero-content p {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 30px;
  max-width: 500px;
}

/* Buttons */
.hero-actions {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background-color: #42b883;
  color: white;
}

.btn-secondary {
  border: 2px solid #42b883;
  color: #42b883;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 60px 0;
}

.feature-card {
  padding: 40px;
  background: #f9f9f9;
  border-radius: 16px;
  text-align: center;
  transition: box-shadow 0.3s;
}

.feature-card:hover {
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.feature-card .icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

/* Mobile Adjustments */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 40px 0;
  }
  .hero-content h1 { font-size: 2.5rem; }
  .hero-actions { justify-content: center; }
}
</style>