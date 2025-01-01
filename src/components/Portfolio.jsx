import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Portfolio.css";

const portfolioItems = [
  {
    id: 1,
    category: "filter-app",
    imgSrc: "../assets/app-1.jpg",
    title: "App 1",
    description: "Lorem ipsum, dolor sit",
    gallery: "portfolio-gallery-app",
    detailsLink: "portfolio-details.html",
  },
  {
    id: 2,
    category: "filter-app",
    imgSrc: "./src/assets/img/portfolio/app-1.jpg",
    title: "App 2",
    description: "Lorem ipsum, dolor sit",
    gallery: "portfolio-gallery-app",
    detailsLink: "portfolio-details.html",
  },
  {
    id: 3,
    category: "filter-app",
    imgSrc: "./src/assets/img/portfolio/app-1.jpg",
    title: "App 3",
    description: "Lorem ipsum, dolor sit",
    gallery: "portfolio-gallery-app",
    detailsLink: "portfolio-details.html",
  },
  {
    id: 13,
    category: "filter-branding",
    imgSrc: "./src/assets/img/portfolio/branding-1.jpg",
    title: "Web 1",
    description: "Lorem ipsum, dolor sit",
    gallery: "portfolio-gallery-web",
    detailsLink: "portfolio-details.html",
  },
  {
    id: 14,
    category: "filter-branding",
    imgSrc: "./src/assets/img/portfolio/branding-1.jpg",
    title: "Web 2",
    description: "Lorem ipsum, dolor sit",
    gallery: "portfolio-gallery-web",
    detailsLink: "portfolio-details.html",
  },
  {
    id: 15,
    category: "filter-branding",
    imgSrc: "./src/assets/img/portfolio/branding-1.jpg",
    title: "Web 3",
    description: "Lorem ipsum, dolor sit",
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
      ? portfolioItems.slice(0, 9) // Display only 9 items for "All"
      : portfolioItems.filter((item) => item.category === filter).slice(0, 3); // Limit 3 items per category

  return (
    <section id="portfolio" className="portfolio section2">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
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
                <img src={item.imgSrc} className="img-fluid" alt={item.title} />
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
