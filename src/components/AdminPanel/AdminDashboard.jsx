import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  // Fetching blogs list from backend
  useEffect(() => {
    axios
      .get("/api/blogs")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Manage Blogs</h3>
      <button onClick={() => navigate("/add-blog")}>
        {" "}
        {/* Navigate to 'add-blog' page */}
        Add New Blog
      </button>
      <div>
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id}>
              <h4>{blog.title}</h4>
              <p>{blog.content}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
