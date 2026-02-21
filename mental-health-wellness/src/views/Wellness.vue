<template>
  <div class="page-wrapper">
    <Navbar />

    <main class="wellness-content">
      <section class="wellness-hero">
        <h1>Wellness Library</h1>
        <p>Explore resources to help you maintain balance and mental clarity.</p>
        
        <div class="filter-bar">
          <button v-for="cat in categories" :key="cat" 
                  :class="['filter-btn', { active: activeCategory === cat }]"
                  @click="activeCategory = cat">
            {{ cat }}
          </button>
        </div>
      </section>

      <section class="resource-grid">
        <div v-for="item in filteredResources" :key="item.title" class="resource-card">
          <div class="card-icon">{{ item.icon }}</div>
          <div class="card-body">
            <span class="category-tag">{{ item.category }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <button class="read-more">Learn More →</button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const activeCategory = ref('All');
const categories = ['All', 'Mind', 'Body', 'Sleep', 'Nutrition'];

const resources = ref([
  { title: 'Digital Detox', category: 'Mind', icon: '📱', description: 'How to reduce screen time and improve your focus.' },
  { title: 'Morning Stretching', category: 'Body', icon: '🧘', description: '5-minute routines to wake up your muscles.' },
  { title: 'Deep Sleep Hygiene', category: 'Sleep', icon: '🌙', description: 'Creating the perfect environment for rest.' },
  { title: 'Mindful Eating', category: 'Nutrition', icon: '🥗', description: 'Connecting with your food for better health.' },
  { title: 'Journaling Prompts', category: 'Mind', icon: '✍️', description: 'Daily questions to help process your emotions.' },
  { title: 'The Power of Walking', category: 'Body', icon: '👟', description: 'Why a 20-minute walk is vital for mental health.' },
]);

const filteredResources = computed(() => {
  if (activeCategory.value === 'All') return resources.value;
  return resources.value.filter(r => r.category === activeCategory.value);
});
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.wellness-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.wellness-hero {
  text-align: center;
  margin-bottom: 50px;
}

.wellness-hero h1 {
  font-size: 2.8rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

/* Category Filter Styles */
.filter-bar {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn.active {
  background: #42b883;
  color: white;
  border-color: #42b883;
}

/* Resource Grid */
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
}

.resource-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
}

.resource-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  font-size: 3rem;
  padding: 30px;
  background: #f9fdfb;
  text-align: center;
}

.card-body {
  padding: 20px;
}

.category-tag {
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #42b883;
  letter-spacing: 1px;
}

.card-body h3 {
  margin: 10px 0;
  color: #333;
}

.card-body p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.read-more {
  background: none;
  border: none;
  color: #42b883;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}

@media (max-width: 768px) {
  .wellness-hero h1 { font-size: 2rem; }
}
</style>