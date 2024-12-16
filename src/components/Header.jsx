import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.css";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const handleContactClick = (e) => {
    e.preventDefault(); // Default behavior ko prevent karo
    const contactSection = document.getElementById("contact-section"); // Correct DOM element find karo
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
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
              <a href="#contact" onClick={handleContactClick}>
                Contact
              </a>
            </li>
            <li>{isAuthenticated && <p>{user.name}</p>}</li>
            {isAuthenticated ? (
              <li>
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button onClick={() => loginWithRedirect()}>Log In</button>
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
