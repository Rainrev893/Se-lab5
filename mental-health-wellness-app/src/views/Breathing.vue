<template>
  <div class="page-wrapper">
    <Navbar />

    <main class="breathing-page">
      <div class="breathing-container">
        <header class="instruction-header">
          <h1>Box Breathing</h1>
          <p class="status-text">{{ currentPhase }}</p>
        </header>

        <div class="pacer-container">
          <div :class="['visual-circle', animationClass]"></div>
          <div class="timer-display">{{ counter }}s</div>
        </div>

        <div class="controls">
          <button v-if="!isActive" @click="startBreathing" class="btn btn-primary">Start Session</button>
          <button v-else @click="stopBreathing" class="btn btn-outline">Stop</button>
        </div>

        <div class="benefits-card">
          <h3>How it works</h3>
          <p>Inhale for 4, Hold for 4, Exhale for 4, Hold for 4. Repeat to lower cortisol levels and find focus.</p>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

const isActive = ref(false);
const counter = ref(4);
const currentPhase = ref('Ready to start?');
const animationClass = ref('');
let timer = null;

const phases = [
  { text: 'Inhale...', class: 'inhale' },
  { text: 'Hold', class: 'hold-in' },
  { text: 'Exhale...', class: 'exhale' },
  { text: 'Hold', class: 'hold-out' }
];

const startBreathing = () => {
  isActive.value = true;
  let phaseIndex = 0;
  
  const runCycle = () => {
    const phase = phases[phaseIndex];
    currentPhase.value = phase.text;
    animationClass.value = phase.class;
    counter.value = 4;

    timer = setInterval(() => {
      counter.value--;
      if (counter.value === 0) {
        clearInterval(timer);
        phaseIndex = (phaseIndex + 1) % phases.length;
        runCycle();
      }
    }, 1000);
  };

  runCycle();
};

const stopBreathing = () => {
  isActive.value = false;
  currentPhase.value = 'Session Ended';
  animationClass.value = '';
  counter.value = 4;
  clearInterval(timer);
};

onUnmounted(() => clearInterval(timer));
</script>

<style scoped>
/* Ensures the page takes full height and pushes footer down */
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.breathing-page {
  flex: 1; /* This pushes the footer to the bottom */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: radial-gradient(circle, #f0fdf4 0%, #ffffff 100%);
}

.breathing-container {
  text-align: center;
  max-width: 500px;
  width: 100%;
}

/* ... keep the rest of your existing styles for pacer and buttons ... */

.instruction-header h1 {
  font-size: 2.5rem;
  color: #166534;
  margin-bottom: 0.5rem;
}

.status-text {
  font-size: 1.5rem;
  color: #42b883;
  height: 2rem;
  font-weight: 500;
}

.pacer-container {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-circle {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #42b883;
  border-radius: 50%;
  opacity: 0.6;
  transition: all 4s linear;
}

.visual-circle.inhale { transform: scale(2.5); background-color: #4ade80; }
.visual-circle.hold-in { transform: scale(2.5); background-color: #22c55e; }
.visual-circle.exhale { transform: scale(1); background-color: #86efac; }
.visual-circle.hold-out { transform: scale(1); }

.timer-display {
  font-size: 2rem;
  font-weight: bold;
  color: #166534;
  z-index: 10;
}

.btn {
  padding: 12px 32px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: 0.2s;
}

.btn-primary { background: #42b883; color: white; }
.btn-primary:hover { background: #36a273; }
.btn-outline { background: transparent; border: 2px solid #ccc; }

.benefits-card {
  margin-top: 50px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}
</style>