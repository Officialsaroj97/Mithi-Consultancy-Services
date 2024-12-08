import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactSection.css";

const ContactSection = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const contactData = {
      username,
      email,
      message,
    };

    // Sending the contact data to the backend (as POST request)
    fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data sent successfully:", data);
        // Reset the form fields after successful submission
        setUsername("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <div className="container1">
      <div className="card" data-aos="fade-up">
        <h1>Contact Us</h1>
        <form onSubmit={handleFormSubmit}>
          {/* Username Field */}
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            data-aos="fade-right"
          />

          {/* Email Field */}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-aos="fade-left"
          />

          {/* Message Field */}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            autoComplete="off"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            data-aos="fade-up"
          ></textarea>

          {/* Submit Button */}
          <button type="submit" data-aos="zoom-in">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
