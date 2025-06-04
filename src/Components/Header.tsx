import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile screen size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Close menu when clicking the backdrop
  useEffect(() => {
    const handleBackdropClick = (e: any) => {
      // Check if the click is on the backdrop (body.menu-open::after)
      if (
        isMenuOpen &&
        e.target.tagName.toLowerCase() !== "a" &&
        !e.target.closest(".nav-menu") &&
        !e.target.closest(".hamburger")
      ) {
        setIsMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleBackdropClick);
    }

    return () => {
      document.removeEventListener("click", handleBackdropClick);
    };
  }, [isMenuOpen]);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  // Toggle menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body class for backdrop
    if (!isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  return (
    <header>
      <div className="container">
        <nav className="nav-container">
          {/* Hamburger Icon */}
          {isMobile && (
            <div
              className={`hamburger ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          )}

          {/* Navigation Menu */}
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#inicio" onClick={handleLinkClick}>
                Início
              </a>
            </li>
            {/* <li>
              <a href="#nossa-historia" onClick={handleLinkClick}>
                Nossa História
              </a>
            </li> */}
            <li>
              <a href="#detalhes" onClick={handleLinkClick}>
                Detalhes
              </a>
            </li>
            <li>
              <a href="#confirmacao" onClick={handleLinkClick}>
                Confirmação
              </a>
            </li>
            <li>
              <a href="#presentes" onClick={handleLinkClick}>
                Lista de Presentes
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
