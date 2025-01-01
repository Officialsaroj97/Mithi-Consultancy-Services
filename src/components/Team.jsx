import { useEffect } from "react"; // Removed unused React import
import AOS from "aos";
import "aos/dist/aos.css";
import "./Team.css"; // Import the CSS for the Team section

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  const teamMembers = [
    {
      name: "Er. Ashutosh Jha",
      role: "Senior MERN Stack Developer",
      description:
        "Expert in building scalable web applications using React, Node.js, MongoDB, and Express, delivering high-performance solutions.",
      image: "../assets/Ashutosh.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Er. Saroj Yadav",
      role: "MERN Stack Developer",
      description:
        "Skilled in developing dynamic web applications with MERN technologies, focused on creating seamless digital experiences.",
      image: "../assets/Saroj.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Pranay Kumar",
      role: "SEO Analyst",
      description:
        "Specializes in optimizing websites for higher search rankings and driving organic traffic through data-driven SEO strategies.",
      image: "../assets/Pranay.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Er. Raushani Kumari",
      role: "Social Media & Marketing Specialist",
      description:
        "Crafts creative social media campaigns to enhance brand visibility and engagement, driving growth across digital platforms.",
      image: "../assets/Raushani.png",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section id="team" className="team section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2 className="team-title">Team</h2>
        <p className="team-description">
          Meet the driving force behind our success—a passionate team of experts
          dedicated to delivering innovation, excellence, and impactful
          solutions.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {teamMembers.map((member, index) => (
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              key={index}
            >
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <img
                    src={member.image}
                    className="img-fluid"
                    alt={member.name}
                  />
                </div>
                <div className="member-info">
                  <h4 className="member-name">{member.name}</h4>
                  <span className="member-role">{member.role}</span>
                  <p className="member-description">{member.description}</p>
                  <div className="social">
                    <a href={member.social.twitter}>
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href={member.social.facebook}>
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href={member.social.instagram}>
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href={member.social.linkedin}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
