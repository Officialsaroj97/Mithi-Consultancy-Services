import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

// Importing all images
import websiteImg from "../assets/website.png";
import softwareImg from "../assets/software.webp";
import appImg from "../assets/app.png";
import digitalImg from "../assets/digital.png";
import graphicImg from "../assets/graphic.png";
import profileImg from "../assets/profile.png";
import crmImg from "../assets/crm.png";
import aiImg from "../assets/ai.png";

// Updated services data
const services = [
  {
    id: 1,
    imageSrc: websiteImg,
    title: "Website Development",
    description:
      "We build dynamic, responsive, and visually stunning websites that drive engagement, enhance user experience, and boost your online presence.",
  },
  {
    id: 2,
    imageSrc: softwareImg,
    title: "Software Development",
    description:
      "Custom software solutions tailored to streamline your processes, improve productivity, and align with your unique business goals.",
  },
  {
    id: 3,
    imageSrc: appImg,
    title: "App Development",
    description:
      "Transform ideas into feature-rich, user-friendly mobile apps that connect you to customers, improve accessibility, and deliver seamless experiences.",
  },
  {
    id: 4,
    imageSrc: digitalImg,
    title: "Digital Marketing",
    description:
      "Reach your audience with data-driven digital strategies that increase brand awareness, generate leads, and drive conversions effectively.",
  },
  {
    id: 5,
    imageSrc: graphicImg,
    title: "Graphics Designing",
    description:
      "Bring your brand to life with creative and impactful designs that captivate your audience and convey your message effectively.",
  },
  {
    id: 6,
    imageSrc: profileImg,
    title: "SOP Development",
    description:
      "Enhance operational efficiency with well-structured SOPs that ensure clarity, consistency, and compliance in your business processes.",
  },
  {
    id: 7,
    imageSrc: crmImg,
    title: "CRM Development",
    description:
      "Streamline customer interactions and improve retention with tailored CRM solutions that empower your sales and support teams.",
  },
  {
    id: 8,
    imageSrc: aiImg,
    title: "Artificial Intelligence",
    description:
      "Leverage cutting-edge AI technologies to automate processes, gain actionable insights, and make data-driven decisions effortlessly.",
  },
];

// Reusable ServiceItem Component
const ServiceItem = ({ imageSrc, title, description }) => (
  <div className="item" data-aos="flip-left" data-aos-duration="1000">
    <div className="image-wrapper">
      <img src={imageSrc} alt={title} className="service-image" />
    </div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
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
