import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

console.log("DB CONFIG:", {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME
});

export const db = mysql.createPool({
  host: process.env.DB_HOST,      // New Aiven Host
  port: process.env.DB_PORT,      // Usually 26897
  user: process.env.DB_USER,      // avnadmin
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,  // defaultdb
  ssl: {
    rejectUnauthorized: false // Change this to false for Render
  }
});