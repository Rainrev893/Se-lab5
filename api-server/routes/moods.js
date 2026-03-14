import express from "express";
import { db } from "../db.js";
// Note: If you have an aiService, keep it. If not, I've added a fallback.
import { getAIResponse } from "../services/aiService.js"; 

const router = express.Router();

router.post("/", async (req, res) => {
  // --- PART 0.2: LOGGING ---
  console.log("POST /api/moods request received");
  console.log("Request body:", req.body);

  const { full_name, mood_text } = req.body; 

  try {
    // 1. Check if user exists
    let [userRows] = await db.query("SELECT id FROM users WHERE full_name = ?", [full_name]);
    let userId;

    if (userRows.length === 0) {
      const [newUser] = await db.query("INSERT INTO users (full_name) VALUES (?)", [full_name]);
      userId = newUser.insertId;
    } else {
      userId = userRows[0].id;
    }

    // 2. Insert the mood
    // --- BUG #3 HINT: Temporarily change 'mood_entries' to 'mood_logs' for screenshot ---
    const [moodResult] = await db.query(
      "INSERT INTO mood_entries (user_id, mood_text) VALUES (?, ?)",
      [userId, mood_text]
    );

    // 3. Get AI Response and save it
    const aiMessage = await getAIResponse(mood_text);
    
    // --- PART 3: SECURITY (Using ? for parameterized queries) ---
    const [aiResult] = await db.query(
      "INSERT INTO ai_responses (mood_entry_id, ai_message) VALUES (?, ?)",
      [moodResult.insertId, aiMessage]
    );

    // --- PART 0.2: LOGGING ---
    console.log("Database insert result:", aiResult);

    // 4. Send back the response
    res.json({ message: "Mood saved", ai_message: aiMessage });
  } catch (error) {
    // --- LOGGING FOR DEBUGGING ---
    console.error("ERROR IN POST /moods:", error.message);
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT m.id, u.full_name, m.mood_text, a.ai_message
      FROM users u
      JOIN mood_entries m ON u.id = m.user_id
      JOIN ai_responses a ON m.id = a.mood_entry_id
    `);
    res.json(rows);
  } catch (error) {
    console.error("ERROR IN GET /moods:", error.message);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM ai_responses WHERE mood_entry_id = ?", [id]);
    const [result] = await db.query("DELETE FROM mood_entries WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.json({ message: "Entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;