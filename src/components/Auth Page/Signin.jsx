import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signin failed");
      } else {
        if (data.token) localStorage.setItem("token", data.token);

        const userName = data.user?.name || "User";
        setWelcomeMessage(
          `Welcome ${userName}, you are successfully logged in!`
        );

        setTimeout(() => {
          navigate("/");
        }, 2500);
      }
    } catch (err) {
      alert("Error connecting to server");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-28 px-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign In
        </h2>

        {welcomeMessage && (
          <div
            className="mb-4 p-3 text-center text-lg font-semibold rounded glowing-alert"
            role="alert"
          >
            {welcomeMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="on">
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
                  : "focus:ring-yellow-400"
              }`}
              required
              disabled={loading || welcomeMessage}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-yellow-400"
              }`}
              required
              disabled={loading || welcomeMessage}
            />
            <span
              className="absolute right-3 top-[39px] cursor-pointer text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || welcomeMessage}
            className={`w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-orange-400 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {!welcomeMessage && (
          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-yellow-500 hover:underline">
              Sign up
            </Link>
          </p>
        )}
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

export default Signin;
