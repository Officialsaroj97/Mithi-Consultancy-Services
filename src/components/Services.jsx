import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css"; // Custom styles
import services from "./data/services.json"; // Assuming a JSON file for services

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <section id="services" className="services section light-background">
      {/* Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2 className="section-title">Our Services</h2>
        <p
          className="section-description"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We provide tailored solutions to meet your needs, ensuring quality and
          excellence.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="items">
          {services.map((service) => (
            <div
              key={service.id}
              className="item"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div className="image-wrapper">
                <img
                  src={`src/assets/${service.imageSrc}`}
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
