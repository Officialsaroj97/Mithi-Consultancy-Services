import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react"; // React import ko remove kar diya
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
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

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
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
                <HeroSection
                  showForm={showForm}
                  handleCloseForm={handleCloseForm}
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
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
