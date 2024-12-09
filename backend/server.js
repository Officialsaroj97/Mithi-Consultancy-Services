const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS middleware

const app = express();
const PORT = 5000;

// Middleware for parsing JSON data and enabling CORS
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all origins

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/contact-form", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // Updated connection options
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Schema for Contact form
const ContactSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model("Contact", ContactSchema);

// POST route to save form data and send email
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
        pass: "xnxm tiqb ykab dznn", // Your app password
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
