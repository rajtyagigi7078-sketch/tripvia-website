import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => (
  <div className="page-container" data-testid="contact-page">
    <Header />
    <div className="page-hero">
      <h1 className="page-title">Contact Us</h1>
    </div>
    <section className="page-section">
      <div className="container">
        <div className="content-box">
          <p className="content-text">For suggestions or queries, please contact us.</p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>hello@tripvia.com</p>
            </div>
            <div className="contact-item">
              <h3>Response Time</h3>
              <p>We typically respond within 24-48 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ContactPage;
