// server.js (Node.js)
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware setup
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests only from React frontend URL
  })
);
app.use(express.json());

// Example signin route
app.post("/api/signin", (req, res) => {
  const { email, password } = req.body;
  // Handle user login, authenticate here
  if (email && password) {
    res.json({ token: "your-auth-token" });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

// Contact route
app.post("/api/contact", (req, res) => {
  const { username, email, message } = req.body;

  // Validate contact form data
  if (username && email && message) {
    // Process form data (e.g., store in database or send email)
    console.log("Contact Form Submitted: ", { username, email, message });
    res.json({ message: "Message received. We will get back to you shortly!" });
  } else {
    res.status(400).json({ message: "Please fill in all fields." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
