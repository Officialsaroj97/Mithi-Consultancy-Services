import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Team", href: "#team" },
  { name: "Blogs", href: "#blogpage" },
  { name: "Contact", href: "#contact-section" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavigation = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 w-full z-50"
      style={{
        background: "#37517e",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex space-x-4">
            {navigation.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                onClick={(e) => handleNavigation(e, href)}
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800"
                style={{ textDecoration: "none" }}
              >
                {name}
              </a>
            ))}
            <button
              onClick={() => {
                navigate("/signin");
                setIsMobileMenuOpen(false);
              }}
              className="ml-4 px-3 py-2 border border-white text-white rounded-md text-sm hover:bg-white hover:text-gray-800"
              style={{ textDecoration: "none" }}
            >
              Log In
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-white hover:bg-blue-700"
            >
              {!isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="sm:hidden"
          id="mobile-menu"
          style={{ background: "#37517e" }}
        >
          <nav className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                onClick={(e) => handleNavigation(e, href)}
                className="block px-3 py-2 text-white rounded-md hover:bg-blue-900"
                style={{ textDecoration: "none" }}
              >
                {name}
              </a>
            ))}
            <button
              onClick={() => {
                navigate("/signin");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 border border-white text-white rounded-md hover:bg-white hover:text-gray-800"
              style={{ textDecoration: "none" }}
            >
              Log In
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
