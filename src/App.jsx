import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import BlogPage from "./components/BlogPage"; // BlogPage imported
import BlogDetail from "./components/BlogDetailPage"; // BlogDetail imported
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FooterNewsletter from "./components/FooterNewsletter";
import BlogDetailPage from "./components/BlogDetailPage";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("signin");

  const handleShowForm = (type) => {
    setFormType(type); // Set form type
    setShowForm(true); // Display the form
  };

  const closeForm = () => {
    setShowForm(false); // Close the form
  };

  return (
    <BrowserRouter
      basename="/" // Use for deploy paths if needed
      future={{
        v7_startTransition: true, // For optimized state updates
        v7_relativeSplatPath: true, // Updated relative path resolution for splats
      }}
    >
      <div className="index-page">
        <Header handleShowForm={handleShowForm} />

        <Routes>
          {/* Main route for the home page */}
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
          {/* Signin, Signup and Registration Routes */}
          <Route path="/signin" element={<Signin closeForm={closeForm} />} />
          <Route path="/signup" element={<Signup closeForm={closeForm} />} />
          <Route
            path="/registration"
            element={<RegistrationForm onClose={closeForm} />}
          />
          {/* Blog detail page route */}
          <Route path="/blog/:id" element={<BlogDetailPage />} />{" "}
          {/* Dynamic blog route */}
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
    </BrowserRouter>
  );
};

export default App;
