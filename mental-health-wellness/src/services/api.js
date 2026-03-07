// mental-health-wellness/src/services/api.js
import axios from 'axios';

export default axios.create({
  baseURL: 'https://lab-6-oajw.onrender.com', // Remove the /api here
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,  
});