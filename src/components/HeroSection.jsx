import { useEffect, useRef } from "react"; // Removed React import
import PropTypes from "prop-types";
import "glightbox/dist/css/glightbox.min.css";
import GLightbox from "glightbox";
import "./HeroSection.css";
import heroImage from "../assets/img/hero-img.png";
import Typed from "typed.js";

const HeroSection = ({ showForm }) => {
  const typedRef = useRef(null);

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

    GLightbox({
      selector: ".glightbox",
    });

    return () => {
      typed.destroy();
    };
  }, []);

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
              <a
                href="#about"
                className="btn-get-started"
                onClick={() => showForm("signin")}
              >
                Get Internship
              </a>
              <a
                href="video link"
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

// PropTypes validation
HeroSection.propTypes = {
  showForm: PropTypes.func.isRequired,
};

export default HeroSection;
