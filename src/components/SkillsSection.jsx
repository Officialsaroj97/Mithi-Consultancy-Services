import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SkillsSection.css";

// Import images from src/assets
import mernImage from "../assets/mern.png";
import appImage from "../assets/app.png";
import digitalImage from "../assets/digital.png";
import profileImage from "../assets/profile.png";

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const skills = [
    {
      id: 1,
      title: "MERN Stack",
      imageSrc: mernImage, // Imported image
    },
    {
      id: 2,
      title: "Frontend Development",
      imageSrc: appImage, // Imported image
    },
    {
      id: 3,
      title: "Backend Development",
      imageSrc: digitalImage, // Imported image
    },
    {
      id: 4,
      title: "Database Management",
      imageSrc: profileImage, // Imported image
    },
  ];

  return (
    <section id="expertise" className="skills-section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2 className="section-title">Our Expertise</h2>
        <p
          className="section-description"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We specialize in cutting-edge technologies and provide expertise in
          various domains to deliver exceptional solutions tailored to your
          needs.
        </p>
      </div>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card" data-aos="fade-up">
            <img
              src={skill.imageSrc}
              alt={skill.title}
              className="skill-image"
            />
            <h3 className="skill-title">{skill.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
