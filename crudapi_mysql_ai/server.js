import express from 'express';
const app = express();

// Example: Root route
app.get('/', (req, res) => {
  res.send('🧠 Mental Health API is running!');
});

// Your other routes
import moodsRouter from './routes/moods.js';
app.use('/moods', moodsRouter);


app.get('/', (req, res) => {
  res.send('🧠 Mental Health API is running!');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
