import express from 'express';
import cors from 'cors';
import moodsRouter from '/routes/moods.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('🧠 Mental Health API is running!');
});

// ✅ FIXED: match your frontend route
app.use('/api/moods', moodsRouter);

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});