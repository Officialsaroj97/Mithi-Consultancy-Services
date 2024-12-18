import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/SignUp";
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
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FooterNewsletter from "./components/FooterNewsletter";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("signin");

  // Toggle form display and set form type (signin/signup)
  const handleShowForm = (type) => {
    setFormType(type);
    setShowForm(true);
  };

  // Close form handler
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <Router>
      <div className="index-page">
        <Header handleShowForm={handleShowForm} />
        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection
                  showForm={(type) => {
                    setShowForm(true);
                    setFormType(type);
                  }}
                />
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
                <ContactSection />
                <FooterNewsletter />
              </>
            }
          />
          {/* Auth Pages */}
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
          {/* Blog Detail */}
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
