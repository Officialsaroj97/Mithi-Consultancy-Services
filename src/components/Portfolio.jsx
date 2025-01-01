import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";

// Images import
import proapp1Img from "../assets/proapp1.png";
import proweb1Img from "../assets/proweb1.png";
import proweb2Img from "../assets/proweb2.png";
import proweb3Img from "../assets/proweb3.png";

// Portfolio items list
const portfolioItems = [
  {
    id: 1,
    category: "filter-app",
    imgSrc: proapp1Img,
    title: "Movieslex",
    description:
      "Cross Platform App You Can Use Anywhere For Movies Streaming & Entertainment",
    gallery: "portfolio-gallery-app",
    detailsLink: "portfolio-details.html",
  },
  {
    id: 2,
    category: "filter-app",
    imgSrc: proapp1Img,
    title: "Movieslex",
    description:
      "Cross Platform App You Can Use Anywhere For Movies Streaming & Entertainment",
    gallery: "portfolio-gallery-app",
    detailsLink: "portfolio-details.html",
  },
  {
    id: 3,
    category: "filter-app",
    imgSrc: proapp1Img,
    title: "Movieslex",
    description:
      "Cross Platform App You Can Use Anywhere For Movies Streaming & Entertainment",
    gallery: "portfolio-gallery-app",
    detailsLink: "portfolio-details.html",
  },
  {
    id: 13,
    category: "filter-branding",
    imgSrc: proweb1Img,
    title: "Movieslex",
    description:
      "User Friendly Movies Website You Can Use Anywhere For Movies Streaming & Entertainment.",
    gallery: "portfolio-gallery-web",
    detailsLink: "portfolio-details.html",
  },
  {
    id: 14,
    category: "filter-branding",
    imgSrc: proweb2Img,
    title: "Mithi Restaurant",
    description:
      "Enjoy the Taste of Authentic Mithila Bihar Cuisine at Mithi Restaurant Anywhere. Just a Click Away",
    gallery: "portfolio-gallery-web",
    detailsLink: "portfolio-details.html",
  },
  {
    id: 15,
    category: "filter-branding",
    imgSrc: proweb3Img,
    title: "Regins Mortgage",
    description: "Regins Mortgage is a leading Mortgage Company in Bihar",
    gallery: "portfolio-gallery-web",
    detailsLink: "portfolio-details.html",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("*");

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: false });
  }, []);

  const handleFilterChange = (filterCategory) => {
    setFilter(filterCategory);
  };

  const filteredItems =
    filter === "*"
      ? portfolioItems.slice(0, 9)
      : portfolioItems.filter((item) => item.category === filter).slice(0, 3);

  return (
    <section id="portfolio" className="portfolio section2">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Portfolio</h2>
        <p>
          Explore our innovative projects designed to elevate your brand and
          drive growth. Quality, creativity, and customer satisfaction are at
          the heart of everything we do.
        </p>
      </div>

      <div className="container">
        <div className="isotope-layout">
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li
              className={filter === "*" ? "filter-active" : ""}
              onClick={() => handleFilterChange("*")}
            >
              All
            </li>
            <li
              className={filter === "filter-app" ? "filter-active" : ""}
              onClick={() => handleFilterChange("filter-app")}
            >
              App
            </li>
            <li
              className={filter === "filter-branding" ? "filter-active" : ""}
              onClick={() => handleFilterChange("filter-branding")}
            >
              Web
            </li>
          </ul>

          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}
                data-aos="zoom-in"
                data-aos-delay={`${100 * index}`}
              >
                <div className="portfolio-card">
                  <img
                    src={item.imgSrc}
                    className="img-fluid portfolio-img"
                    alt={item.title}
                  />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a
                      href={item.imgSrc}
                      title={item.title}
                      data-gallery={item.gallery}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href={item.detailsLink}
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
