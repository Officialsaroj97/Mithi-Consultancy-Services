import React, { useEffect } from "react";
import Slider from "react-slick"; // Import React Slick
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const testimonials = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      text: "They perfectly met my expectations – working with them felt like an extension of my in-house team. The value we get from them and their quality work set them apart from others.",
      author: "MARIO SPEEDWOGAN",
      date: "May 21, 2020",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      text: "Outstanding service and top-notch quality. Their team was very professional and delivered beyond expectations.",
      author: "JANE DOE",
      date: "April 14, 2021",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      text: "Absolutely loved working with them! They provided amazing solutions that helped our business grow.",
      author: "JOHN SMITH",
      date: "December 10, 2022",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      text: "Absolutely loved working with them! They provided amazing solutions that helped our business grow.",
      author: "JOHN SMITH",
      date: "December 10, 2022",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        {/* Title Section */}
        <h2 className="testimonials-title" data-aos="fade-up">
          Words From Clients
        </h2>
        <p
          className="testimonials-subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hear What Our Clients Are Saying About Working With Our Team.
        </p>

        {/* Testimonial Slider */}
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-slide">
              <div className="client-image-wrapper">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="client-image"
                />
              </div>
              <div className="testimonial-details">
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-date">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
