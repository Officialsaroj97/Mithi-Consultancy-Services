import React, { useState } from "react";
import axios from "axios";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/blogs", { title, content });
      alert("Blog added successfully!");
      // Optionally navigate back or show success message
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div>
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Blog Content"
          required
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
