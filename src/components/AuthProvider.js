import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext"; // AuthContext ko import kiya
import PropTypes from "prop-types"; // PropTypes ko import kiya

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating user authentication check
    const token = localStorage.getItem("authToken");

    if (token) {
      fetch("http://localhost:5000/api/verifyToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.valid) {
            setUser(data.user); // User ko set kar rahe hain
          } else {
            localStorage.removeItem("authToken");
          }
        })
        .catch(() => {
          localStorage.removeItem("authToken");
        })
        .finally(() => {
          setLoading(false); // Loading state ko false karna
        });
    } else {
      setLoading(false); // Agar token nahi hai toh loading false karna
    }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("authToken", token); // Token ko localStorage mein save karna
    setUser(userData); // User ko set karna
  };

  const logout = () => {
    localStorage.removeItem("authToken"); // Token ko remove karna
    setUser(null); // User ko null set karna
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // children prop ko required banaya
};
