import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SkillsSection.css";

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const skills = [
    {
      id: 1,
      title: "MERN Stack",
      imageSrc: "../src/assets/mern.png",
    },
    {
      id: 2,
      title: "Frontend Development",
      imageSrc: "../src/assets/frontend.png",
    },
    {
      id: 3,
      title: "Backend Development",
      imageSrc: "../src/assets/backend.png",
    },
    {
      id: 4,
      title: "Database Management",
      imageSrc: "../src/assets/database.png",
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
