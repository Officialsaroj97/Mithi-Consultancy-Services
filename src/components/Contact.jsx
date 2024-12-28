import React, { useState, useRef } from "react";
import "./ContactSection.css";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(""); // For showing success message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null); // To reset the form

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (formData.name.length > 20) {
      formErrors.name = "Name can't be longer than 20 characters.";
      valid = false;
    } else {
      formErrors.name = "";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
      valid = false;
    } else {
      formErrors.email = "";
    }

    const messageWords = formData.message
      .split(/\s+/)
      .filter((word) => word.length > 0);
    if (messageWords.length > 200) {
      formErrors.message = "Message can't be longer than 200 words.";
      valid = false;
    } else {
      formErrors.message = "";
    }

    setErrors(formErrors);
    return valid;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validate the form
    if (!validateForm()) return;

    const form = event.target;
    const formDataObj = new FormData(form);
    formDataObj.append("access_key", "df8e5b09-ecce-42de-a8c9-72a92dfa99f3");

    const jsonObject = Object.fromEntries(formDataObj);
    const json = JSON.stringify(jsonObject);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      formRef.current.reset();
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit} ref={formRef}>
        <h2>Contact</h2>

        {/* Success Message */}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}

        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter Your Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            className="field"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="input-box">
          <label>Message</label>
          <textarea
            name="message"
            className="field-message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <div className="input-box">
          <button type="submit" className="btn-1">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
