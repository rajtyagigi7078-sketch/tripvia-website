import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">TRIPVIA</h3>
          <p className="footer-text">
            This platform helps travelers discover places through community-shared experiences.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <div className="footer-links">
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms & Disclaimer</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 TRIPVIA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
