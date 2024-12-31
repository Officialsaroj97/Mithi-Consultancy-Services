import { useParams } from "react-router-dom";
import blogsData from "./data/blogs.json"; // Blog data ko import kar rahe hain
import "./BlogDetailPage.css";

const BlogDetailPage = () => {
  const { id } = useParams(); // URL se id fetch kar rahe hain
  const blog = blogsData.find((b) => b.id === parseInt(id)); // Data ko find kar rahe hain

  // Agar blog data nahi mila
  if (!blog) {
    return <p>Blog not found!</p>;
  }

  // Image path dynamically resolve karna
  const imageUrl = `/assets/blog/${blog.image}`; // Assuming assets are in public folder

  return (
    <div className="blog-detail-page">
      <article className="blog-detail">
        <a href="/" className="logo d-flex align-items-center me-auto"></a>
        {/* Display Blog Image */}
        <img
          src="../src/assets/blog/Blog1.jpg" // Dynamic image path using the JSON data
          alt={blog.title}
          className="blog-image"
        />
        <h1>{blog.title}</h1>
        <p className="blog-meta">
          By <span>{blog.author}</span> on <span>{blog.date}</span>
        </p>

        <div className="blog-content">
          <h2>Introduction</h2>
          <p>{blog.summary}</p>

          <h2>Blog Full Content</h2>
          <p>
            {/* Detailed content goes here */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            risus quis arcu auctor cursus.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;
