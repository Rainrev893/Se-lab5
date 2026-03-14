<template>
  <div class="container">
    <h2>Mood Check-in (Lab 7)</h2>
    
    <div class="form-group">
      <input v-model="name" placeholder="Your name" :disabled="loading" />
      <textarea v-model="mood" placeholder="How are you feeling today?" :disabled="loading"></textarea>
      
      <button @click="submitMood" :disabled="loading || !name || !mood">
        <span v-if="loading">💬 Processing...</span>
        <span v-else>Submit</span>
      </button>
    </div>

    <p v-if="error" class="error-msg">⚠️ {{ error }}</p>
    <div v-if="aiMessage" class="ai-box">
      <strong>AI Advisor:</strong> {{ aiMessage }}
    </div>

    <hr />
    <h3>Mood History</h3>
    <button @click="fetchHistory" class="refresh-btn">🔄 Refresh History</button>
    
    <table v-if="history.length > 0" class="history-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Mood</th>
          <th>AI Response</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in history" :key="entry.id">
          <td>{{ entry.user_name }}</td>
          <td>{{ entry.mood }}</td>
          <td>{{ entry.ai_response }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No history found.</p>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      name: '',
      mood: '',
      aiMessage: '',
      loading: false,  
      error: null,    
      history: []      
    };
  },
  mounted() {
    this.fetchHistory(); 
  },
  methods: {
    async submitMood() {
      // --- PART 0.1: LOGGING ---
      console.log("User clicked submit button");
      console.log("Mood value entered:", this.mood);

      // --- BUG #1: Undefined Variable ---
      // UNCOMMENT the line below ONLY when you are ready to take the Bug #1 screenshot
      console.log("User mood value:", moodValue); 

      this.loading = true;
      this.error = null;

      try {
        const res = await api.post('/api/moods', {
          user_name: this.name,
          mood: this.mood
        });
        
        // --- PART 0.1: LOGGING ---
        console.log("API response status:", res.status);

        this.aiMessage = res.data.ai_response;
        this.mood = ''; 
        this.fetchHistory();
      } catch (err) {
        this.error = "Failed to connect to server.";
        if (err.response) {
            console.log("API response status:", err.response.status);
        }
      } finally {
        this.loading = false;
      }
    },
    async fetchHistory() {
      try {
        const res = await api.get('/api/moods');
        this.history = res.data;
      } catch (err) {
        console.error("Could not fetch history");
      }
    }
  }
};
</script>

<style scoped>
.container { max-width: 600px; margin: auto; font-family: sans-serif; color: white; padding: 20px;}
.form-group { display: flex; flex-direction: column; gap: 10px; }
.ai-box { background: #1a1a1a; padding: 15px; border-left: 5px solid #2196f3; margin-top: 10px; }
.error-msg { color: #ff4444; font-weight: bold; }
.history-table { width: 100%; border-collapse: collapse; margin-top: 10px; color: white;}
.history-table th, .history-table td { border: 1px solid #444; padding: 8px; text-align: left; }
.refresh-btn { margin-bottom: 10px; cursor: pointer; background: #2196f3; color: white; border: none; padding: 5px 10px;}
button:disabled { opacity: 0.5; cursor: not-allowed; }
</style>