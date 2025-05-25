import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
      } else {
        // Show glowing success alert
        setSuccessMessage("Signup successful! Please sign in.");

        // Clear form and errors
        setForm({ name: "", email: "", password: "" });
        setErrors({});

        // After 2.5 sec redirect to /signin
        setTimeout(() => {
          navigate("/signin");
        }, 2500);
      }
    } catch (err) {
      alert("Error connecting to server");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-5 px-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>

        {successMessage && (
          <div
            className="mb-4 p-3 text-center text-lg font-semibold rounded glowing-alert"
            role="alert"
          >
            {successMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          autoComplete="on"
          disabled={!!successMessage}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              required
              disabled={loading || !!successMessage}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              required
              disabled={loading || !!successMessage}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
                required
                disabled={loading || !!successMessage}
              />
              <span
                className="absolute right-3 top-3 text-gray-600 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !!successMessage}
            className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition ${
              loading || successMessage ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>

      <style>{`
        .glowing-alert {
          animation: glowYellowOrange 2.5s ease-in-out infinite;
          color: #facc15; /* yellow */
          text-shadow:
            0 0 8px #facc15,
            0 0 16px #facc15,
            0 0 24px #facc15,
            0 0 32px #facc15;
          background-color: #fff9db;
          border: 1px solid #facc15;
          user-select: none;
        }
        .glowing-alert:hover {
          animation-play-state: paused;
          color: #fb923c; /* orange */
          text-shadow:
            0 0 12px #fb923c,
            0 0 24px #fb923c,
            0 0 36px #fb923c,
            0 0 48px #fb923c;
          border-color: #fb923c;
          background-color: #fff4e1;
        }
        @keyframes glowYellowOrange {
          0%, 100% {
            color: #facc15;
            text-shadow:
              0 0 8px #facc15,
              0 0 16px #facc15,
              0 0 24px #facc15,
              0 0 32px #facc15;
            border-color: #facc15;
            background-color: #fff9db;
          }
          50% {
            color: #fb923c;
            text-shadow:
              0 0 12px #fb923c,
              0 0 24px #fb923c,
              0 0 36px #fb923c,
              0 0 48px #fb923c;
            border-color: #fb923c;
            background-color: #fff4e1;
          }
        }
      `}</style>
    </div>
  );
};

export default Signup;
