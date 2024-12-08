import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css"; // Add global styles if necessary
import AboutSection from "./components/AboutSection";
import WhyUsSection from "./components/WhyUsSection";
import ClientsSection from "./components/ClientsSection";
import SkillsSection from "./components/SkillsSection";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import BlogPage from "./components/BlogPage";
import BlogDetail from "./components/BlogDetail"; // Import BlogDetail
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FooterNewsletter from "./components/FooterNewsletter";

const App = () => {
  return (
    <Router>
      <div className="index-page">
        <Header />
        <Routes>
          {/* Define routes for main sections */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
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
          {/* Add route for individual blog detail pages */}
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
