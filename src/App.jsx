import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Signin from "./components/Auth Page/Signin";
import Signup from "./components/Auth Page/SignUp";
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
import BlogDetailPage from "./components/BlogDetailPage";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FooterNewsletter from "./components/FooterNewsletter";

const App = () => {
  return (
    <BrowserRouter>
      <div className="index-page">
        <Header />

        <Routes>
          {/* Home Page */}
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
                <div id="contact-section">
                  <Contact />
                </div>
                <FooterNewsletter />
              </>
            }
          />

          {/* Auth & Form Pages */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/registration" element={<RegistrationForm />} />

          {/* Blog Detail Page */}
          <Route path="/blog/:id" element={<BlogDetailPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
