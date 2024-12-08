import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaClipboardList, FaCogs, FaFileAlt, FaRocket } from "react-icons/fa"; // Importing Icons
import "./WhyUsSection.css";

const WhyUsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animation only once
    });
  }, []);

  const features = [
    {
      icon: <FaClipboardList />,
      title: "Interactive Design",
      animation: "fade-up",
    },
    { icon: <FaCogs />, title: "Software Development", animation: "fade-down" },
    { icon: <FaFileAlt />, title: "Quality Testing", animation: "fade-up" },
    {
      icon: <FaRocket />,
      title: "Unlimited Revisions",
      animation: "fade-down",
    },
  ];

  return (
    <section className="why-us-section">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title" data-aos="fade-down">
          Why Choose Us
        </h2>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
              data-aos={feature.animation}
              data-aos-delay={index * 100} // Add delay for staggered effect
            >
              <div className="feature-icon">{feature.icon}</div>
              <p className="feature-title">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
