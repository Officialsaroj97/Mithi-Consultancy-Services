import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = ({ closeForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example mock check
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("user", JSON.stringify({ role: "admin" }));
      navigate("/admin-dashboard"); // Navigate to admin dashboard
    } else if (email !== "" && password !== "") {
      localStorage.setItem("user", JSON.stringify({ role: "user" }));
      navigate("/"); // Navigate to home page
    } else {
      alert("Invalid login credentials");
    }

    closeForm(); // Optional: Close form modal or login screen
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Signin;
