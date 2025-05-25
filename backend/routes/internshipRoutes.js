import express from "express";
import multer from "multer";
import path from "path";
import { submitInternshipForm } from "../controllers/internshipController.js";

const router = express.Router();

// Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const safeName = file.originalname.replace(/\s+/g, "-").toLowerCase();
    cb(null, `${timestamp}-${safeName}`);
  },
});

// File Filter
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === ".pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed"), false);
  }
};

// Multer Middleware
const upload = multer({ storage, fileFilter });

// POST Route
router.post("/", upload.single("resume"), submitInternshipForm);

export default router;
