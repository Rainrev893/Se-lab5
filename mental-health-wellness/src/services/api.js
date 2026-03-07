import axios from 'axios';

export default axios.create({
  baseURL: 'https://lab-6-oajw.onrender.com/api',
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,  
});