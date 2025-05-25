import Internship from "../models/Internship.js";

export const submitInternshipForm = async (req, res) => {
  try {
    console.log("Form Data:", req.body);
    console.log("Uploaded File:", req.file); // Debug line

    const { fullname, email, phone, college, city, role } = req.body;
    const resumePath = req.file?.path || null;

    const internship = new Internship({
      fullname,
      email,
      phone,
      college,
      city,
      role,
      resume: resumePath,
    });

    const savedInternship = await internship.save();

    res.status(201).json({
      message: "Internship form submitted successfully.",
      data: savedInternship,
    });
  } catch (error) {
    console.error("Error submitting internship form:", error);
    res.status(500).json({
      message: "Server error. Please try again later.",
      error: error.message,
    });
  }
};
