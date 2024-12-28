// server.js (backend code)
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors()); // Allow cross-origin requests (if needed)

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "officialpranay108@gmail.com", // Your email address
    pass: "gppk xjah inoq jgis", // Your email password
  },
});

// Subscription route to handle subscription email
app.post("/subscribe", (req, res) => {
  const { email } = req.body; // Receiving email from front end

  if (!email || !email.includes("@") || !email.includes(".")) {
    return res
      .status(400)
      .json({ message: "Please enter a valid email address." });
  }

  // Email content setup
  const mailOptions = {
    from: "officialsaroj97@gmail.com",
    to: email,
    subject: "Subscription Successful",
    text: `Thank you for subscribing to our newsletter!`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res
        .status(500)
        .json({ message: "Failed to send the email.", error });
    }
    res
      .status(200)
      .json({ message: "Your subscription request has been sent. Thank you!" });
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
