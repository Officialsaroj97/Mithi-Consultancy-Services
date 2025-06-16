import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Signin from "./components/Auth Page/Signin";
import Signup from "./components/Auth Page/Signup";
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

const HomePage = () => (
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
    <FooterNewsletter />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="index-page">
        <Header />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Individual pages for sections to update URL */}
          <Route path="/about" element={<AboutSection />} />
          <Route path="/why-us" element={<WhyUsSection />} />
          <Route path="/clients" element={<ClientsSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FaqSection />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />

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
