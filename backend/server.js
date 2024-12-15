const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;

// Middleware for parsing JSON data and enabling CORS
app.use(express.json()); // bodyParser.json() ko replace kiya
app.use(cors()); // Enable CORS for all origins

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/contact-form", {
    useNewUrlParser: true, // Inbuilt by mongoose from version 6 onwards
    useUnifiedTopology: true, // Inbuilt by mongoose from version 6 onwards
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Schema for Contact form
const ContactSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model("Contact", ContactSchema);

// User schema for Signup and Signin
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

// POST route for Signup
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hashing the password

    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: "User registered successfully",
      token: token, // Send JWT token after successful registration
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error registering user", error: err.message });
  }
});

// POST route for Signin
app.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Both email and password are required." });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ userId: user._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Signed in successfully",
      token: token, // Send JWT token after successful sign-in
    });
  } catch (err) {
    res.status(500).json({ message: "Error signing in", error: err.message });
  }
});

// POST route to save form data and send email (contact form)
app.post("/api/contact", async (req, res) => {
  const { username, email, message } = req.body;

  const newContact = new Contact({ username, email, message });

  try {
    // Save data to MongoDB
    await newContact.save();

    // Setup nodemailer to send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: "officialpranay108@gmail.com", // Your email
        pass: "xnxm tiqb ykab dznn", // Your app password (Make sure to keep it private!)
      },
    });

    const mailOptions = {
      from: "officialpranay108@gmail.com", // Your email
      to: "officialsaroj97@gmail.com", // Recipient email
      subject: "New Contact Form Submission",
      text: `Name: ${username}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.error("Error sending email:", err);
        return res
          .status(500)
          .json({ message: "Error sending email", error: err.message });
      }
      res
        .status(200)
        .json({ message: "Form submitted and email sent successfully!" });
    });
  } catch (error) {
    console.error("Error saving data:", error);
    res
      .status(500)
      .json({ message: "Error saving data", error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
