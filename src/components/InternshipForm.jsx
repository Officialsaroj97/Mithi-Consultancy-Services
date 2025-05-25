import React, { useState } from "react";

const InternshipForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    college: "",
    city: "",
    role: "",
    resume: null,
  });

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Java Developer",
    ".NET Developer",
    "SEO Specialist",
    "Digital Marketing",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="college"
              placeholder="College Name"
              value={formData.college}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Right side: Info & Illustration */}
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
      </div>
    </div>
  );
};

export default InternshipForm;
