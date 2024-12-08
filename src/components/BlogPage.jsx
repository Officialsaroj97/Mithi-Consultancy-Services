import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BlogPage.css";

const BlogPage = () => {
  // Initialize AOS (Animate On Scroll) library
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // List of blogs to display
  const blogs = [
    {
      id: 1,
      title: "The Future of Software Development",
      date: "November 15, 2024",
      author: "John Doe",
      summary:
        "Explore emerging trends like AI-driven development, low-code platforms, and the role of edge computing in software.",
      image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Why Cybersecurity is Crucial in Modern Software",
      date: "November 20, 2024",
      author: "Jane Smith",
      summary:
        "Discover best practices for protecting your software against vulnerabilities in the digital age.",
      image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Maximizing Efficiency with Agile Development",
      date: "November 25, 2024",
      author: "Sarah Lee",
      summary:
        "Learn how Agile practices enhance collaboration, adaptability, and project success.",
      image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    },
  ];

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
        {blogs.map((blog, index) => (
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
