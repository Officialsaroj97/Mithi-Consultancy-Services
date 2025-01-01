import { useEffect } from "react";
import skills from "./data/skills.json";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SkillsSection.css";

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="skills" className="skills section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2 className="section-title" data-aos="fade-up">
          Our Expertise
        </h2>
        <p
          className="section-description"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We are experts in various technologies and software solutions.
          Here&#39;s a glimpse of what we specialize in:
        </p>

        <div className="items">
          {skills.map((data) => (
            <div
              className="item"
              key={data.id} // Use unique id as key
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img
                src={data.imageSrc} // Directly use the path here
                alt={data.title}
                className="skill-image"
              />
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
