import React, { useEffect } from "react";
import "glightbox/dist/css/glightbox.min.css";
import GLightbox from "glightbox";
import "./HeroSection.css";
import heroImage from "../assets/img/hero-img.png";

const HeroSection = () => {
  useEffect(() => {
    // Initialize GLightbox
    GLightbox({
      selector: ".glightbox",
    });
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
            data-aos="zoom-out"
          >
            <h1>Empowering Your Business with Innovative Software Solutions</h1>
            <p>
              We are a team of talented developers and designers creating
              innovative software and websites using modern technologies like
              MERN Stack.
            </p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started">
                Get Started
              </a>
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src={heroImage} className="img-fluid animated" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
