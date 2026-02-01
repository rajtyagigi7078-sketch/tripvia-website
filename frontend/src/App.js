import "@/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Header Component with Hamburger Menu
const Header = () => {
  return (
    <header className="header" data-testid="main-header">
      <div className="header-container">
        <Link to="/" className="logo" data-testid="logo">
          <span className="logo-text">TravelCommunity</span>
        </Link>
        
        {/* Desktop & Tablet Navigation */}
        <nav className="nav desktop-nav" data-testid="main-nav">
          <Link to="/" className="nav-link" data-testid="nav-home">Home</Link>
          <Link to="/city-template" className="nav-link" data-testid="nav-destinations">Destinations</Link>
          <Link to="/add-place" className="nav-link" data-testid="nav-add-place">Add a Place</Link>
          <Link to="/how-it-works" className="nav-link" data-testid="nav-how-it-works">How It Works</Link>
          <Link to="/about" className="nav-link" data-testid="nav-about">About</Link>
          <Link to="/contact" className="nav-link" data-testid="nav-contact">Contact</Link>
        </nav>

        {/* Language Selector - Desktop Only */}
        <div className="language-selector desktop-only" data-testid="language-selector">
          <select className="language-select" data-testid="language-select">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="mobile-menu-trigger">
          <button className="hamburger-btn" data-testid="hamburger-menu">
            <span className="hamburger-icon">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (Hidden by default - styled to look like TripAdvisor) */}
      <div className="mobile-menu-overlay" data-testid="mobile-menu">
        <div className="mobile-menu-header">
          <span className="mobile-menu-close">✕</span>
        </div>
        <nav className="mobile-menu-nav">
          <a href="#" className="mobile-menu-link mobile-menu-primary">Sign in</a>
          <a href="#" className="mobile-menu-link mobile-menu-primary">Write a review</a>
          <a href="#" className="mobile-menu-link mobile-menu-primary">Post photos</a>
          <Link to="/add-place" className="mobile-menu-link mobile-menu-primary">Add a place</Link>
          <a href="#" className="mobile-menu-link mobile-menu-primary">Travel stories</a>
          
          <div className="mobile-menu-divider"></div>
          
          <Link to="/city-template" className="mobile-menu-link">Hotels</Link>
          <Link to="/city-template" className="mobile-menu-link">Things to Do</Link>
          <Link to="/city-template" className="mobile-menu-link">Restaurants / Food</Link>
          <Link to="/city-template" className="mobile-menu-link">Budget Stays</Link>
          
          <div className="mobile-menu-divider"></div>
          
          <a href="#" className="mobile-menu-link">Download App</a>
          <a href="#" className="mobile-menu-link">Language / Region</a>
        </nav>
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer" data-testid="main-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">TravelCommunity</h3>
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
        <p>© 2025 TravelCommunity. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Homepage
const Home = () => {
  return (
    <div data-testid="homepage">
      <Header />
      
      {/* Hero Section */}
      <section className="home-hero" data-testid="hero-section">
        <div className="home-hero-content">
          <h1 className="home-hero-title" data-testid="hero-title">
            Plan Your Trip – One City at a Time
          </h1>
          <p className="home-hero-subtitle">
            Discover places, food spots, budget stays shared by real travelers
          </p>
          
          {/* Search Bar */}
          <div className="home-search-container" data-testid="search-container">
            <input 
              type="text" 
              placeholder="Search destinations, hotels, restaurants..." 
              className="home-search-input"
              data-testid="search-input"
            />
            <button className="home-search-button" data-testid="search-button">Search</button>
          </div>
        </div>
      </section>

      {/* Category Row - TripAdvisor Style */}
      <section className="category-section" data-testid="category-section">
        <div className="container">
          <div className="category-row" data-testid="category-row">
            <Link to="/city-template" className="category-card" data-testid="category-hotels">
              <div className="category-icon">🏨</div>
              <span className="category-name">Hotels</span>
            </Link>
            <Link to="/city-template" className="category-card" data-testid="category-things">
              <div className="category-icon">🎯</div>
              <span className="category-name">Things to Do</span>
            </Link>
            <Link to="/city-template" className="category-card" data-testid="category-food">
              <div className="category-icon">🍽️</div>
              <span className="category-name">Food & Cafes</span>
            </Link>
            <Link to="/city-template" className="category-card" data-testid="category-stays">
              <div className="category-icon">🏠</div>
              <span className="category-name">Budget Stays</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Iconic Places Slideshow */}
      <section className="iconic-section" data-testid="iconic-section">
        <div className="container">
          <h2 className="section-title">Iconic Places You Must Visit</h2>
          <div className="iconic-carousel" data-testid="iconic-carousel">
            <div className="iconic-card" data-testid="iconic-1">
              <div className="iconic-image"></div>
              <h3 className="iconic-name">Taj Mahal</h3>
              <p className="iconic-tagline">Symbol of eternal love</p>
            </div>
            <div className="iconic-card" data-testid="iconic-2">
              <div className="iconic-image"></div>
              <h3 className="iconic-name">Golden Temple</h3>
              <p className="iconic-tagline">Spiritual sanctuary</p>
            </div>
            <div className="iconic-card" data-testid="iconic-3">
              <div className="iconic-image"></div>
              <h3 className="iconic-name">Gateway of India</h3>
              <p className="iconic-tagline">Historic monument</p>
            </div>
            <div className="iconic-card" data-testid="iconic-4">
              <div className="iconic-image"></div>
              <h3 className="iconic-name">Hawa Mahal</h3>
              <p className="iconic-tagline">Palace of winds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cities - Horizontal Scroll */}
      <section className="home-section" data-testid="popular-cities-section">
        <div className="container">
          <h2 className="section-title">Popular Cities</h2>
          <div className="horizontal-scroll" data-testid="cities-scroll">
            <Link to="/city-template" className="scroll-card city-card" data-testid="city-rishikesh">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Rishikesh</h3>
                <p className="scroll-card-description">Yoga capital & spiritual destination</p>
              </div>
            </Link>
            
            <Link to="/city-template" className="scroll-card city-card" data-testid="city-goa">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Goa</h3>
                <p className="scroll-card-description">Beaches & nightlife</p>
              </div>
            </Link>
            
            <Link to="/city-template" className="scroll-card city-card" data-testid="city-manali">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Manali</h3>
                <p className="scroll-card-description">Mountain adventures</p>
              </div>
            </Link>
            
            <Link to="/city-template" className="scroll-card city-card" data-testid="city-jaipur">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Jaipur</h3>
                <p className="scroll-card-description">Pink city heritage</p>
              </div>
            </Link>

            <Link to="/city-template" className="scroll-card city-card" data-testid="city-udaipur">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Udaipur</h3>
                <p className="scroll-card-description">City of lakes</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="home-section home-community-section" data-testid="community-section">
        <div className="container">
          <div className="community-content">
            <h2 className="community-title">Know a place others should visit?</h2>
            <p className="community-description">
              Help fellow travelers discover amazing places
            </p>
            <Link to="/add-place">
              <button className="community-button" data-testid="add-place-cta">Add a Place</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// City Template Page with Horizontal Scrolls
const CityTemplatePage = () => {
  return (
    <div data-testid="city-template-page">
      <Header />
      
      {/* City Hero Section */}
      <div className="city-template-hero" data-testid="city-template-hero">
        <div className="city-template-image-placeholder">
          <span className="placeholder-text">City Image Here</span>
        </div>
        <div className="city-template-overlay">
          <h1 className="city-template-title">City Name Here</h1>
          <p className="city-template-subtitle">Your complete travel guide</p>
        </div>
      </div>

      {/* About the City */}
      <section className="template-section">
        <div className="container">
          <h2 className="section-title">About This City</h2>
          <div className="template-content-box">
            <p className="template-placeholder-text">
              [Placeholder paragraph about the city. This will be replaced with actual city information.]
            </p>
          </div>
        </div>
      </section>

      {/* Places to Visit - Horizontal Scroll */}
      <section className="template-section gray-bg">
        <div className="container">
          <h2 className="section-title">Places to Visit</h2>
          <div className="horizontal-scroll" data-testid="places-scroll">
            <Link to="/place-detail" className="scroll-card" data-testid="place-card-1">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Place Name 1</h3>
                <p className="scroll-card-description">Short description</p>
                <span className="budget-tag budget-free">Free</span>
              </div>
            </Link>
            
            <Link to="/place-detail" className="scroll-card" data-testid="place-card-2">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Place Name 2</h3>
                <p className="scroll-card-description">Short description</p>
                <span className="budget-tag budget-cheap">Cheap</span>
              </div>
            </Link>
            
            <Link to="/place-detail" className="scroll-card" data-testid="place-card-3">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Place Name 3</h3>
                <p className="scroll-card-description">Short description</p>
                <span className="budget-tag budget-moderate">Moderate</span>
              </div>
            </Link>

            <Link to="/place-detail" className="scroll-card" data-testid="place-card-4">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Place Name 4</h3>
                <p className="scroll-card-description">Short description</p>
                <span className="budget-tag budget-cheap">Cheap</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Food & Cafes - Horizontal Scroll */}
      <section className="template-section">
        <div className="container">
          <h2 className="section-title">Food & Cafes</h2>
          <div className="horizontal-scroll" data-testid="food-scroll">
            <div className="scroll-card" data-testid="food-1">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Food Place 1</h3>
                <p className="scroll-card-description">Description of food</p>
              </div>
            </div>
            <div className="scroll-card" data-testid="food-2">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Food Place 2</h3>
                <p className="scroll-card-description">Description of food</p>
              </div>
            </div>
            <div className="scroll-card" data-testid="food-3">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Food Place 3</h3>
                <p className="scroll-card-description">Description of food</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Stays - Horizontal Scroll */}
      <section className="template-section gray-bg">
        <div className="container">
          <h2 className="section-title">Budget-Friendly Stays</h2>
          <div className="horizontal-scroll" data-testid="stays-scroll">
            <div className="scroll-card" data-testid="stay-1">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Stay Name 1</h3>
                <p className="scroll-card-budget">₹500 - ₹1000/night</p>
              </div>
            </div>
            <div className="scroll-card" data-testid="stay-2">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Stay Name 2</h3>
                <p className="scroll-card-budget">₹1000 - ₹2000/night</p>
              </div>
            </div>
            <div className="scroll-card" data-testid="stay-3">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Stay Name 3</h3>
                <p className="scroll-card-budget">₹2000 - ₹3000/night</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels - Horizontal Scroll */}
      <section className="template-section">
        <div className="container">
          <h2 className="section-title">Where to Stay</h2>
          <div className="horizontal-scroll" data-testid="hotels-scroll">
            <div className="scroll-card" data-testid="hotel-1">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Budget Hotel</h3>
                <span className="hotel-type">Budget</span>
                <p className="scroll-card-budget">₹800 - ₹1500/night</p>
              </div>
            </div>
            <div className="scroll-card" data-testid="hotel-2">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Standard Hotel</h3>
                <span className="hotel-type">Standard</span>
                <p className="scroll-card-budget">₹2000 - ₹3500/night</p>
              </div>
            </div>
            <div className="scroll-card" data-testid="hotel-3">
              <div className="scroll-card-image"></div>
              <div className="scroll-card-content">
                <h3 className="scroll-card-name">Luxury Hotel</h3>
                <span className="hotel-type">Luxury</span>
                <p className="scroll-card-budget">₹5000+/night</p>
              </div>
            </div>
          </div>
          <div className="partner-note">
            <p>Hotel bookings will be handled by trusted third-party partners.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="template-section template-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Know a place in this city?</h2>
            <p className="cta-description">Help other travelers discover hidden gems</p>
            <Link to="/add-place">
              <button className="cta-button">Add a Place</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Place Detail Template Page
const PlaceDetailPage = () => {
  return (
    <div data-testid="place-detail-page">
      <Header />
      
      <div className="place-detail-hero">
        <h1 className="place-detail-title">Place Name</h1>
      </div>

      <section className="place-detail-section">
        <div className="container">
          <div className="place-detail-content">
            <h2 className="section-title">About This Place</h2>
            <p className="place-detail-description">
              [Short description of the place will be added here.]
            </p>
            <span className="budget-tag budget-free">Free</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Add a Place Page
const AddPlacePage = () => {
  return (
    <div data-testid="add-place-page">
      <Header />
      
      <div className="page-hero">
        <h1 className="page-title">Add a Place</h1>
        <p className="page-subtitle">Share a place you visited</p>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="add-place-form-container">
            <form className="add-place-form">
              
              <div className="form-section">
                <h3 className="form-section-title">What are you adding?</h3>
                <div className="radio-group">
                  <label className="radio-label">
                    <input type="radio" name="place-type" className="radio-input" />
                    <span className="radio-text">Place to Visit</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="place-type" className="radio-input" />
                    <span className="radio-text">Food / Cafe</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="place-type" className="radio-input" />
                    <span className="radio-text">Budget Stay</span>
                  </label>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Select City</h3>
                <select className="form-select">
                  <option value="">Choose a city...</option>
                  <option value="rishikesh">Rishikesh</option>
                  <option value="goa">Goa</option>
                  <option value="manali">Manali</option>
                </select>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Place Name</h3>
                <input type="text" className="form-input" placeholder="Enter place name" />
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Description</h3>
                <textarea className="form-textarea" rows="4" placeholder="Tell us about this place..."></textarea>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Budget Type</h3>
                <div className="radio-group radio-group-horizontal">
                  <label className="radio-label">
                    <input type="radio" name="budget-type" className="radio-input" />
                    <span className="radio-text">Free</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="budget-type" className="radio-input" />
                    <span className="radio-text">Cheap</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="budget-type" className="radio-input" />
                    <span className="radio-text">Moderate</span>
                  </label>
                </div>
              </div>

              <div className="form-section">
                <button type="button" className="form-submit">Submit for Review</button>
              </div>

              <div className="thank-you-message">
                <p className="thank-you-text">Thanks for contributing! We will review and add it soon.</p>
              </div>

            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// How It Works Page
const HowItWorksPage = () => {
  return (
    <div data-testid="how-it-works-page">
      <Header />
      
      <div className="page-hero">
        <h1 className="page-title">How It Works</h1>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="how-it-works-detailed">
            <div className="how-step">
              <div className="how-step-number">1</div>
              <div className="how-step-content">
                <h2 className="how-step-title">Choose a city</h2>
                <p className="how-step-description">
                  Browse destinations and select the city you want to explore.
                </p>
              </div>
            </div>

            <div className="how-step">
              <div className="how-step-number">2</div>
              <div className="how-step-content">
                <h2 className="how-step-title">Explore places, food, and stays</h2>
                <p className="how-step-description">
                  Discover recommendations shared by real travelers.
                </p>
              </div>
            </div>

            <div className="how-step">
              <div className="how-step-number">3</div>
              <div className="how-step-content">
                <h2 className="how-step-title">Share your experience</h2>
                <p className="how-step-description">
                  Add places to help other travelers discover amazing experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// About Page
const AboutPage = () => {
  return (
    <div data-testid="about-page">
      <Header />
      
      <div className="page-hero">
        <h1 className="page-title">About Us</h1>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="about-content-detailed">
            <p className="about-text-large">
              This platform helps travelers discover places through community-shared experiences.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  return (
    <div data-testid="contact-page">
      <Header />
      
      <div className="page-hero">
        <h1 className="page-title">Contact Us</h1>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="contact-content-simple">
            <p className="contact-text-simple">
              For suggestions or queries, please contact us.
            </p>
            <div className="contact-details-simple">
              <div className="contact-item-simple">
                <h3 className="contact-label-simple">Email</h3>
                <p className="contact-value-simple">hello@travelcommunity.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city-template" element={<CityTemplatePage />} />
          <Route path="/place-detail" element={<PlaceDetailPage />} />
          <Route path="/add-place" element={<AddPlacePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
