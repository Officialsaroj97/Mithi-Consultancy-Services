import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "glightbox/dist/css/glightbox.min.css";
import GLightbox from "glightbox";
import "./HeroSection.css";
import heroImage from "../assets/hero-img.png";
import Typed from "typed.js";
import InternshipForm from "./InternshipForm";

const HeroSection = () => {
  const typedRef = useRef(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const options = {
      strings: [
        "Innovative Software Solutions",
        "Multi Functional Websites",
        "User-Friendly Apps",
        "Digital Marketing Strategies",
        "Creative Designs",
        "Customer-Centric Approach",
        "Grow your business",
        "Get a Free Consultation",
      ],
      typeSpeed: 200,
      backSpeed: 200,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    const lightbox = GLightbox({
      selector: ".glightbox",
      autoplayVideos: true, // Important: video auto-play
    });

    return () => {
      typed.destroy();
      lightbox.destroy();
    };
  }, []);

  // Handle form submission
  const handleFormSubmit = (data) => {
    console.log("Internship form data:", data);
    alert(`Thanks ${data.fullname} for applying!`);
    setShowForm(false);
    // Yahan aap API call kar sakte hain ya data save kar sakte hain
  };

  return (
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
            data-aos="zoom-out"
          >
            <h1>
              Empowering Your Business with <span ref={typedRef}></span>{" "}
            </h1>
            <p>
              We are a team of talented developers and designers creating
              innovative software and websites using modern technologies like
              MERN Stack.
            </p>
            <div className="d-flex">
              <button
                className="btn-get-started"
                onClick={() => setShowForm(true)}
              >
                Get Internship
              </button>
              <a
                href="https://www.youtube.com/watch?v=ysz5S6PUM-U" // example video link
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

      {/* Internship Form Modal */}
      {showForm && (
        <InternshipForm
          onClose={() => setShowForm(false)}
          onSubmit={handleFormSubmit}
        />
      )}
    </section>
  );
};

export default HeroSection;
