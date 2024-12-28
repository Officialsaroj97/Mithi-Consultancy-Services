import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RegistrationForm.css";

const RegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    collegeName: "",
    courseName: "",
    age: "",
    mobileNo: "",
    emailId: "",
    homeCity: "",
    collegeCity: "",
    branch: "",
    percentage: "",
    semester: "",
    year: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
      } else if (field === "emailId" && !/\S+@\S+\.\S+/.test(formData[field])) {
        newErrors[field] = "Invalid email address";
      } else if (field === "mobileNo" && !/^\d{10}$/.test(formData[field])) {
        newErrors[field] = "Invalid mobile number";
      }
    });
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted Successfully", formData);
      onClose();
    }
  };

  return (
    <div className="form-overlay" data-aos="fade-in">
      <div className="form-container" data-aos="zoom-in">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          {[
            "Student Name",
            "Father Name",
            "College Name",
            "Course Name",
            "Age",
            "Mobile No",
            "Email Id",
            "Home City",
            "College City",
            "Branch",
            "Percentage",
            "Semester",
            "Year",
            "DOB",
          ].map((field, idx) => (
            <div className="form-group" key={idx}>
              <label htmlFor={field}>
                {field.replace(/([A-Z])/g, " $1")}
                <span className="required">*</span>
              </label>
              <input
                type={field === "dob" ? "date" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              />
              {errors[field] && <span className="error">{errors[field]}</span>}
            </div>
          ))}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
