<template>
  <div class="page-wrapper">
    <Navbar />

    <main class="chat-main">
      <div class="chat-container">
        <header class="chat-intro">
          <div class="bot-avatar">🤖</div>
          <h1>AI Support</h1>
          <p class="disclaimer">
            I'm here to listen and provide wellness resources. 
            <strong>If you are in a crisis, please contact emergency services.</strong>
          </p>
        </header>

        <div class="chat-window-wrapper">
          <div class="message-list" ref="chatWindow">
            <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.role]">
              <div class="bubble">
                {{ msg.text }}
              </div>
            </div>
          </div>

          <form @submit.prevent="handleSend" class="input-area">
            <input 
              v-model="userInput" 
              type="text" 
              placeholder="Tell me how you're feeling..." 
              aria-label="Chat input"
            />
            <button type="submit" :disabled="!userInput.trim()">
              Send
            </button>
          </form>
        </div>
        
        <div class="chat-suggestions">
          <span>Try asking:</span>
          <button @click="suggest('I feel anxious')">"I feel anxious"</button>
          <button @click="suggest('Tips for better sleep')">"Sleep tips"</button>
          <button @click="suggest('How to meditate')">"How to meditate"</button>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const userInput = ref('')
const chatWindow = ref(null)
const messages = ref([
  { role: 'bot', text: 'Hello! How can I support your wellness journey today?' }
])

const handleSend = () => {
  if (!userInput.value.trim()) return

  // Add User Message
  messages.value.push({ role: 'user', text: userInput.value })
  
  const tempInput = userInput.value
  userInput.value = ''
  scrollToBottom()

  // Simulate Bot Response
  setTimeout(() => {
    messages.value.push({ 
      role: 'bot', 
      text: `Thank you for sharing that. Let's talk more about "${tempInput}".` 
    })
    scrollToBottom()
  }, 800)
}

const suggest = (text) => {
  userInput.value = text
  handleSend()
}

const scrollToBottom = async () => {
  await nextTick()
  if (chatWindow.value) {
    chatWindow.value.scrollTop = chatWindow.value.scrollHeight
  }
}
</script>

<style scoped>
/* Previous Styles kept for page-wrapper, chat-main, etc. */
.page-wrapper { display: flex; flex-direction: column; min-height: 100vh; background-color: #f8fafc; }
.chat-main { flex: 1; display: flex; justify-content: center; padding: 20px; }
.chat-container { width: 100%; max-width: 700px; display: flex; flex-direction: column; }
.chat-intro { text-align: center; margin-bottom: 20px; }
.bot-avatar { font-size: 3rem; }
.disclaimer { font-size: 0.8rem; color: #64748b; margin-top: 10px; }

/* New Chat Window Styles */
.chat-window-wrapper {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  height: 500px; /* Fixed height for scrollable area */
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.message-list {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.message { display: flex; width: 100%; }
.message.user { justify-content: flex-end; }
.message.bot { justify-content: flex-start; }

.bubble {
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 0.95rem;
  line-height: 1.4;
}

.user .bubble {
  background-color: #42b883;
  color: white;
  border-bottom-right-radius: 4px;
}

.bot .bubble {
  background-color: #f1f5f9;
  color: #1e293b;
  border-bottom-left-radius: 4px;
}

/* Input Area Styles */
.input-area {
  display: flex;
  padding: 15px;
  background: #ffffff;
  border-top: 1px solid #e2e8f0;
  gap: 10px;
}

input {
  flex: 1;
  padding: 12px 15px;
  border-radius: 25px;
  border: 1px solid #cbd5e1;
  outline: none;
  transition: border-color 0.2s;
}

input:focus { border-color: #42b883; }

button[type="submit"] {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0 20px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
}

button[type="submit"]:disabled {
  background-color: #cbd5e1;
  cursor: not-allowed;
}

.chat-suggestions { margin-top: 20px; display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; }
.chat-suggestions button { background: white; border: 1px solid #e2e8f0; padding: 6px 14px; border-radius: 20px; cursor: pointer; font-size: 0.8rem; }
</style>