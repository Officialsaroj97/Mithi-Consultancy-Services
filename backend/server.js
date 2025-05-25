import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import internshipRoutes from "./routes/internshipRoutes.js"; // ✅ Add this line

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

// ✅ Serve uploaded resume files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Auth routes use express.json()
app.use("/api", express.json(), authRoutes);

// ✅ Internship form POST route (Multer handles it, so no express.json here)
app.use("/api/internships", internshipRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log("Mongo Error:", err));
