import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => (
  <div className="page-container" data-testid="about-page">
    <Header />
    <div className="page-hero">
      <h1 className="page-title">About Us</h1>
    </div>
    <section className="page-section">
      <div className="container">
        <div className="content-box">
          <p className="content-text-large">
            This platform helps travelers discover places through community-shared experiences.
            We believe in authentic travel recommendations from real people.
          </p>
          <div className="about-features">
            <div className="about-feature">
              <h3>Community Driven</h3>
              <p>Real recommendations from real travelers who've been there.</p>
            </div>
            <div className="about-feature">
              <h3>Budget Friendly</h3>
              <p>Find options that match your budget - from backpacking to luxury.</p>
            </div>
            <div className="about-feature">
              <h3>Comprehensive</h3>
              <p>From places to visit, food to try, and stays to book - all in one place.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default AboutPage;
