import PropTypes from "prop-types"; // Only keep the necessary imports
import "./Header.css";

const Header = ({ handleShowForm }) => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        {/* Logo */}
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          {/* Use an image logo */}
          <img
            src="./src/assets/img/logo.png"
            alt="Logo"
            className="logo-image"
          />
        </a>

        {/* Navigation Menu */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#blogpage">Blogs</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        {/* Get Started Button */}
        <a className="btn-getstarted" onClick={() => handleShowForm("signin")}>
          Get Started
        </a>
      </div>
    </header>
  );
};

// Prop validation for handleShowForm
Header.propTypes = {
  handleShowForm: PropTypes.func.isRequired, // Ensure handleShowForm is a function and is required
};

export default Header;
