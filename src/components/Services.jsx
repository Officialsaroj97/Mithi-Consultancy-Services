import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css"; // Custom styles
import services from "./data/services.json"; // JSON data

// Reusable ServiceItem Component
const ServiceItem = ({ imageSrc, title, description }) => (
  <div className="item" data-aos="flip-left" data-aos-duration="1000">
    <div className="image-wrapper">
      <img
        src={`src/assets/${imageSrc}`}
        alt={title}
        className="service-image"
      />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Main Services Component
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <section id="services" className="services section light-background">
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

      <div className="container">
        <div className="items">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
