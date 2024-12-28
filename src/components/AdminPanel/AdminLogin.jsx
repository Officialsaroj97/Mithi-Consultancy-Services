// AdminLogin.jsx
import { useState } from "react";

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Here, you should verify admin credentials via backend (API request)
    if (email === "admin@example.com" && password === "admin123") {
      onLogin(); // Call the function that sets loggedIn state to true
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
