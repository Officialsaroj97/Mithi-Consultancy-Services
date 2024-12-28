import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import "./FooterNewsletter.css";

const FooterNewsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sentMessage, setSentMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSentMessage("");

    // Make a POST request to backend to handle subscription
    try {
      const response = await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Send email to backend
      });

      const data = await response.json();

      if (response.ok) {
        setSentMessage(data.message);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }

    setLoading(false);
    setEmail(""); // Reset email field
  };

  return (
    <div className="footer-newsletter" data-aos="fade-up">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <h2 data-aos="fade-right">Join Our Newsletter</h2>
            <p data-aos="fade-left">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="newsletter-form">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="btn-1">
                  {loading ? "Loading..." : "Subscribe"}
                </button>
              </div>
              {errorMessage && (
                <div className="error-message" data-aos="fade-up">
                  {errorMessage}
                </div>
              )}
              {sentMessage && (
                <div className="sent-message" data-aos="fade-up">
                  {sentMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNewsletter;
