import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactSection.css";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required";
      formIsValid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      formIsValid = false;
    }
    if (!message.trim()) {
      newErrors.message = "Message is required";
      formIsValid = false;
    }
    setErrors(newErrors);

    if (formIsValid) {
      const contactData = { username, email, message };

      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/contact`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactData),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Message Sent:", data);
          setStatus("Thank you for contacting us!");
          setUsername("");
          setEmail("");
          setMessage("");
        } else {
          const errorData = await response.json();
          setStatus(errorData.message || "Error sending your message.");
          console.error("Error Response:", errorData);
        }
      } catch (error) {
        console.error("Error:", error);
        setStatus("There was an error sending your message.");
      }
    }
  };

  return (
    <div data-aos="fade-up" className="contact-section">
      <form onSubmit={handleFormSubmit}>
        <h2>Contact Us</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p className="error">{errors.username}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <p className="error">{errors.message}</p>}
        <button type="submit">Send</button>
        <p className="status">{status}</p>
      </form>
    </div>
  );
};

export default Contact;
