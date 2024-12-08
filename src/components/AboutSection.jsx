import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutSection.css"; // Import the CSS file

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Animation will happen only once
    });
  }, []);

  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About Us</h2>
      </div>

      <div className="container">
        <div className="row gy-4">
          {/* Content Section */}
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>
              At <strong>Mithi Consultancy Services</strong>, we are passionate
              about delivering exceptional results while maintaining a focus on
              innovation and quality.
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  Dedicated to delivering exceptional services and innovative
                  solutions.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  Striving for excellence in every project we undertake.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  Ensuring customer satisfaction through commitment and
                  expertise.
                </span>
              </li>
            </ul>
          </div>

          {/* Image or Additional Content Section */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>
              At <strong>Mithi Consultancy Services</strong>, our team of
              innovative thinkers, skilled developers, and strategic planners is
              dedicated to crafting software solutions that solve real-world
              challenges and empower businesses to thrive in the modern
              landscape.
            </p>
            <a href="#" className="read-more" aria-label="Read more about us">
              <span>Read More</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
