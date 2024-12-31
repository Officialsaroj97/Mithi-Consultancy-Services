import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS for animations
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
            <a href="index.html" className="d-flex align-items-center">
              {/* Replace Arsha with your logo */}
              <img
                src="../public/logo.png"
                alt="Logo"
                className="footer-logo"
              />
            </a>
            <div className="footer-contact pt-3">
              <p>JagatPura Phatak Near</p>
              <p>Dadu Nagar Colony - 302025</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email:</strong> <span>supportmcs@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Useful Links Section */}
          <div
            className="col-lg-2 col-md-3 footer-links"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i> <a href="#">Home</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i> <a href="#">About us</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i> <a href="#">Services</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Terms of service</a>
              </li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div
            className="col-lg-2 col-md-3 footer-links"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Web Design</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Web Development</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Product Management</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Marketing</a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div
            className="col-lg-4 col-md-12"
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
