<!-- src/views/SupportPage.vue -->
<template>
  <div class="support-container">
    <h1>Support Center</h1>
    <p>Welcome to our support page. How can we help you today?</p>
    
    <!-- Add content like FAQs, contact forms, or links to documentation -->
    <div class="support-options">
      <div class="option-card">
        <h2>FAQs</h2>
        <p>Find answers to common questions.</p>
        <!-- You might link to a specific FAQ component or page here -->
      </div>
      <div class="option-card">
        <h2>Contact Us</h2>
        <p>Submit a ticket or chat with an agent.</p>
        <!-- This could be a form component -->
      </div>
    </div>
  </div>
</template>

<script setup>
// You can add logic here if needed, using the Composition API with script setup
</script>

<style scoped>
.support-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
.support-options {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.option-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  width: 45%;
  text-align: center;
}
</style>
