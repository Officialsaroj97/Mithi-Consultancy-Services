import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // React Router Link
import AOS from "aos";
import logo from "../assets/logo.png";
import "aos/dist/aos.css";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          {/* About Section */}
          <div
            className="col-lg-4 col-md-6 footer-about"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Link to="/" className="d-flex align-items-center">
              <img src={logo} alt="Logo" />
            </Link>
            <div className="footer-contact pt-3">
              <p>
                <strong>Head Office:</strong>
              </p>
              <p>
                Yash Tower, 25/101, Ashiana - Digha Rd, opp. St. Xavier’s
                College of Management & Technology,
              </p>
              <p>Rajeev Nagar, Digha Ghat, Patna, Bihar 800001</p>

              <p className="mt-3">
                <strong> Office Branch - 1:</strong>
              </p>
              <p>Dadu Colony, Jagatpura Jaipur, 302017 Rajasthan</p>

              <p className="mt-3">
                <strong>Phone:</strong>{" "}
                <span>+91 7667144317 / +91 9798875926</span>
              </p>
              <p>
                <strong>For Business Enquiries:</strong>{" "}
                <span>support@mithiconsultancyservices.com</span>
              </p>
              <p>
                <strong>For Carrier Enquiries:</strong>{" "}
                <span>hr@mithiconsultancyservices.com</span>
              </p>
            </div>
          </div>

          {/* Useful Links Section */}
          <div
            className="col-lg-3 col-md-3 footer-links"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i> <Link to="/">Home</Link>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <Link to="/about">About us</Link>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <Link to="/services">Services</Link>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <Link to="/terms">Terms of service</Link>
              </li>
            </ul>
          </div>

          {/* Career & Affiliate Section (Replaces Our Services) */}
          <div
            className="col-lg-3 col-md-3 footer-links"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4>Opportunities</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <Link to="/career">Career</Link>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <Link to="/affiliate">Affiliate</Link>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <Link to="/referral">Referral</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div
            className="col-lg-2 col-md-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h4>Follow Us</h4>
            <p>
              Stay connected with us on social media! Follow us for updates,
              news, and exclusive content. Let’s grow and stay inspired
              together.
            </p>
            <div className="social-links d-flex">
              <a href="">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div
        className="container copyright text-center mt-4"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">MITHI CONSULTANCY SERVICES</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
