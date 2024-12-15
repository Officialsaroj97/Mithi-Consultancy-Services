import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactSection.css";

const ContactSection = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // To show success or error message
  const [errors, setErrors] = useState({}); // To track error messages

  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = {};

    // Validate username
    if (username.length > 20) {
      formIsValid = false;
      newErrors.username = "Username must be 20 characters or less.";
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      formIsValid = false;
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);

    if (formIsValid) {
      const contactData = { username, email, message };

      fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data Sent in Progress:", data);
          setStatus("Thank You for Contacting Us!");
          setUsername("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Error sending data:", error);
          setStatus("There was an error sending your message.");
        });
    }
  };

  return (
    <div id="contact-section" className="container1">
      <div className="card" data-aos="fade-up">
        <h1>Contact Us</h1>

        {/* Status Message */}
        {status && <p className="status-message">{status}</p>}

        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            maxLength="20" // Limits username to 20 characters
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            data-aos="fade-right"
          />
          {errors.username && <p className="error">{errors.username}</p>}

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
          {errors.email && <p className="error">{errors.email}</p>}

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

          <button type="submit" data-aos="zoom-in">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
