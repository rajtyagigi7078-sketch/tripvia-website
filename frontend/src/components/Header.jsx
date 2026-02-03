import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header" data-testid="main-header">
        <div className="header-container">
          <Link to="/" className="logo" data-testid="logo">
            <span className="logo-text">TRIPVIA</span>
          </Link>
          
          <nav className="desktop-nav" data-testid="main-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/trip-planner" className="nav-link">Complete Trip Plan</Link>
            <Link to="/add-place" className="nav-link">Add a Place</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          <button className="hamburger-btn" onClick={() => setMenuOpen(true)} data-testid="hamburger-menu">
            <span className="hamburger-icon">☰</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`} data-testid="mobile-drawer">
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-close" onClick={() => setMenuOpen(false)}>✕</span>
        </div>
        <nav className="mobile-drawer-nav">
          <Link to="/" className="mobile-drawer-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/trip-planner" className="mobile-drawer-link" onClick={() => setMenuOpen(false)}>Complete Trip Plan</Link>
          <Link to="/add-place" className="mobile-drawer-link" onClick={() => setMenuOpen(false)}>Add a Place</Link>
          <Link to="/about" className="mobile-drawer-link" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="mobile-drawer-link" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
      {menuOpen && <div className="mobile-drawer-overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
};

export default Header;
