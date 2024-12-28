import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/SignUp";
import RegistrationForm from "./components/RegistrationForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import AboutSection from "./components/AboutSection";
import WhyUsSection from "./components/WhyUsSection";
import ClientsSection from "./components/ClientsSection";
import SkillsSection from "./components/SkillsSection";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import BlogPage from "./components/BlogPage";
import BlogDetail from "./components/BlogDetail";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FooterNewsletter from "./components/FooterNewsletter";
import AdminDashboard from "./components/AdminPanel/AdminDashboard";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("signin");

  const handleShowForm = (type) => {
    setFormType(type); // Set form type
    setShowForm(true); // Display the form
  };

  const closeForm = () => {
    console.log("Close Form Triggered"); // Debugging
    setShowForm(false); // Close the form
  };

  return (
    <Router>
      <div className="index-page">
        <Header handleShowForm={handleShowForm} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection showForm={handleShowForm} />
                <ClientsSection />
                <AboutSection />
                <WhyUsSection />
                <SkillsSection />
                <Services />
                <CallToAction />
                <Portfolio />
                <Team />
                <Testimonials />
                <FaqSection />
                <BlogPage />
                <div id="contact-section">
                  <Contact />
                </div>
                <FooterNewsletter />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              showForm && formType === "signin" ? (
                <Signin closeForm={closeForm} />
              ) : (
                <Signin />
              )
            }
          />
          <Route
            path="/signup"
            element={
              showForm && formType === "signup" ? (
                <Signup closeForm={closeForm} />
              ) : (
                <Signup />
              )
            }
          />
          <Route
            path="/registration"
            element={
              showForm && formType === "registration" ? (
                <RegistrationForm onClose={closeForm} />
              ) : (
                <RegistrationForm />
              )
            }
          />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>

        {/* Modal Form Overlay */}
        {showForm && (
          <div className="form-overlay" onClick={closeForm}>
            <div
              className="form-container"
              onClick={(e) => e.stopPropagation()}
            >
              {formType === "signin" && <Signin closeForm={closeForm} />}
              {formType === "signup" && <Signup closeForm={closeForm} />}
              {formType === "registration" && (
                <RegistrationForm onClose={closeForm} />
              )}
              <button className="close-btn" onClick={closeForm}>
                X
              </button>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </Router>
  );
};

export default App;
