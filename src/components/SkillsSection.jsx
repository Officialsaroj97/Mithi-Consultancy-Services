import React, { useEffect } from "react";
import skills from "./data/skills.json"; // Correct Path
import AOS from "aos";
import "aos/dist/aos.css";
import "./SkillsSection.css";

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="skills-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="skill-card p-4 bg-white shadow-lg rounded-lg"
          data-aos="fade-up"
        >
          <img
            src={skill.imageSrc}
            alt={skill.title}
            className="skill-image w-20 h-20 mx-auto mb-4"
          />
          <h3 className="skill-title text-center font-bold text-lg">
            {skill.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
