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
    <div className="skills-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <div key={skill.id} className="skill-card" data-aos="fade-up">
          <img src={skill.imageSrc} alt={skill.title} className="skill-image" />
          <h3 className="skill-title">{skill.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
