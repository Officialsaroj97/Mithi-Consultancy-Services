import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        {/* Logo */}
        <a href="/" className="logo d-flex align-items-center me-auto">
          <img
            src="./src/assets/img/logo.png"
            alt="Logo"
            className="logo-image"
          />
        </a>

        {/* Hamburger Toggle Button */}
        <button
          className={`mobile-nav-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <nav
          id="navmenu"
          className={`navmenu ${isMobileMenuOpen ? "active" : ""}`}
        >
          <ul>
            <li>
              <a href="#hero" className="active" onClick={toggleMobileMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMobileMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={toggleMobileMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={toggleMobileMenu}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#team" onClick={toggleMobileMenu}>
                Team
              </a>
            </li>
            <li>
              <a href="#blogpage" onClick={toggleMobileMenu}>
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  handleContactClick(e);
                  toggleMobileMenu();
                }}
              >
                Contact
              </a>
            </li>
            {isAuthenticated && <li>{user.name}</li>}
            {isAuthenticated ? (
              <li>
                <button
                  onClick={() => {
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    });
                    toggleMobileMenu();
                  }}
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => {
                    loginWithRedirect();
                    toggleMobileMenu();
                  }}
                >
                  Log In
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleShowForm: PropTypes.func.isRequired,
};

export default Header;
