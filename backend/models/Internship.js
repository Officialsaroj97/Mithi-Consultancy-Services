import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phone: String,
  college: String,
  city: String,
  role: String,
  resume: String,
});

export default mongoose.model("Internship", internshipSchema);
