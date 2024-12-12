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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSentMessage("");

    // Simulate API call or form submission
    setTimeout(() => {
      if (email.includes("@") && email.includes(".")) {
        setSentMessage("Your subscription request has been sent. Thank you!");
        setLoading(false);
        setEmail(""); // Reset email field
      } else {
        setErrorMessage("Please enter a valid email address.");
        setLoading(false);
      }
    }, 2000);
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
                <button type="submit" className="subscribe-button">
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
