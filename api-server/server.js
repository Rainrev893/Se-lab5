import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import moodRoutes from "./routes/moods.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// --- PART 0.2: GLOBAL LOGGING (Optional but helpful) ---
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url}`);
  next();
});

// --- PART 4: HEALTH CHECK ENDPOINT ---
// Visit https://se-lab5-1.onrender.com/health to take your screenshot!
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "API running on Render",
    timestamp: new Date()
  });
});

app.use("/api/moods", moodRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});