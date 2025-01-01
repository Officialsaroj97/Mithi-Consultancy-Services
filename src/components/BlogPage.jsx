import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import blogsData from "./data/blogs.json"; // JSON file se blogs import kar rahe hain
import "./BlogPage.css";

// Dynamic imports for images
import blogImage1 from "../assets/blog1.jpg";
import blogImage2 from "../assets/blog2.jpg";
import blogImage3 from "../assets/blog4.jpg"; // and so on, for other images

const BlogPage = () => {
  // Initialize AOS (Animate On Scroll) library
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Mapping to add images dynamically to blog data
  const updatedBlogsData = blogsData.map((blog, index) => {
    let blogImage;
    switch (index) {
      case 0:
        blogImage = blogImage1;
        break;
      case 1:
        blogImage = blogImage2;
        break;
      case 2:
        blogImage = blogImage3;
        break;
      default:
        blogImage = blogImage1; // default image
        break;
    }
    return { ...blog, image: blogImage };
  });

  return (
    <div id="blogpage" className="blog-page">
      {/* Blog Header */}
      <header className="blog-header">
        <h2 data-aos="fade-up">Read Latest Blog</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Stay updated with the latest in software development, technology
          trends, and best practices.
        </p>
      </header>

      {/* List of Blogs */}
      <section className="blog-list">
        {updatedBlogsData.map((blog, index) => (
          <article
            key={blog.id}
            className="blog-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Blog Image */}
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              {/* Blog Title and Meta Information */}
              <h2>{blog.title}</h2>
              <p className="blog-meta">
                By <span>{blog.author}</span> on <span>{blog.date}</span>
              </p>
              <p>{blog.summary}</p>
              {/* Read More Link */}
              <Link to={`/blog/${blog.id}`} className="read-more">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default BlogPage;
