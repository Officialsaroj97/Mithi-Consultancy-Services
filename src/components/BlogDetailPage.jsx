import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To fetch the dynamic blog ID from URL
import blogsData from "./data/blogs.json"; // Static blogs data import
import "./BlogDetailPage.css";

const BlogDetailPage = () => {
  const { id } = useParams(); // Get the dynamic id from the URL
  const [blog, setBlog] = useState(null); // Store single blog data

  useEffect(() => {
    // Find the specific blog based on the id from URL
    const foundBlog = blogsData.find((blog) => blog.id === parseInt(id));
    setBlog(foundBlog);
  }, [id]);

  // If blog is not found or is loading, show loading state
  if (!blog) {
    return <p>Blog not found or loading...</p>;
  }

  // Image path dynamically resolved
  const imageUrl = `${blog.image}`; // Make sure the images are under the public folder

  return (
    <div className="blog-detail-page">
      <article className="blog-detail">
        {/* Display the blog image dynamically */}
        <img src={imageUrl} alt={blog.title} className="blog-image" />
        <h1>{blog.title}</h1>
        <p className="blog-meta">
          By <span>{blog.author}</span> on <span>{blog.date}</span>
        </p>

        <div className="blog-content">
          <h2>Introduction</h2>
          <p>{blog.summary}</p>

          <h2>Full Content</h2>
          <p>{blog.content}</p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;
