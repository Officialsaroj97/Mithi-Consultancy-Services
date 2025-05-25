import React, { useState } from "react";

const InternshipForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    college: "",
    city: "",
    role: "",
    resume: null,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "PHP Developer",
    "Java Developer",
    ".NET Developer",
    "AI/ML Engineer",
    "Android Developer",
    "iOS Developer",
    "Flutter Developer",
    "React Native Developer",
    "Python Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "Digital Marketing",
    "SEO Specialist",
    "Content Writer",
    "SOP Analyst",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const data = new FormData();
    data.append("fullname", formData.fullname);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("college", formData.college);
    data.append("city", formData.city);
    data.append("role", formData.role);
    data.append("resume", formData.resume);

    try {
      const response = await fetch("http://localhost:5000/api/internships", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      console.log("✅ Response:", result);

      if (response.ok) {
        setSuccessMessage("Internship form submitted successfully!");
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          college: "",
          city: "",
          role: "",
          resume: null,
        });
        // Optional: Close modal after short delay
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setErrorMessage("Error: " + (result.message || "Submission failed"));
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-start justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mt-24 mx-auto flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
        {/* Left side: Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center"
          encType="multipart/form-data"
        >
          {/* Success message with glowing effect */}
          {successMessage && (
            <div
              className="mb-4 p-3 text-center font-semibold rounded glowing-alert"
              role="alert"
            >
              {successMessage}
            </div>
          )}

          {/* Error message */}
          {errorMessage && (
            <div className="mb-4 p-3 text-center font-semibold rounded bg-red-100 text-red-700 border border-red-400">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2"
              disabled={loading}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2"
              disabled={loading}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              className="border border-gray-300 rounded px-3 py-2"
              disabled={loading}
            />

            <input
              type="text"
              name="college"
              placeholder="College Name"
              value={formData.college}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2"
              disabled={loading}
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2"
              disabled={loading}
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 bg-white text-black"
              disabled={loading}
            >
              <option value="" disabled>
                Select Internship Role
              </option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>

            <div className="col-span-1 sm:col-span-2">
              <label className="block mb-1 font-medium">
                Upload Resume (PDF)
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
                disabled={loading}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {/* Right side: Illustration */}
        <div className="w-full md:w-1/2 bg-blue-100 p-4 md:p-8 flex flex-col justify-center items-center rounded-b-lg md:rounded-r-lg md:rounded-bl-none mt-6 md:mt-0">
          <h3 className="text-xl font-semibold mb-4 text-black text-center md:text-left">
            Why Join Us?
          </h3>
          <p className="mb-4 text-center md:text-left text-black">
            Gain hands-on experience with modern technologies and work on real
            projects to boost your career!
          </p>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
            alt="Internship Illustration"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>

        {/* Glowing alert CSS */}
        <style>{`
        .glowing-alert {
          animation: glowYellowOrange 2.5s ease-in-out infinite;
          color: #facc15;
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
          color: #fb923c;
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
    </div>
  );
};

export default InternshipForm;
