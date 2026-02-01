import "@/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Header Component
const Header = () => {
  return (
    <header className="header" data-testid="main-header">
      <div className="header-container">
        <div className="logo" data-testid="logo">
          <span className="logo-text">TravelStatic</span>
        </div>
        <nav className="nav" data-testid="main-nav">
          <Link to="/" className="nav-link" data-testid="nav-home">Home</Link>
          <Link to="/city" className="nav-link" data-testid="nav-city">Destinations</Link>
          <Link to="/about" className="nav-link" data-testid="nav-about">About</Link>
          <Link to="/contact" className="nav-link" data-testid="nav-contact">Contact</Link>
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
          <h3 className="footer-heading">TravelStatic</h3>
          <p className="footer-text">Your perfect travel companion</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Help Center</a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-text">contact@travelstatic.com</p>
          <p className="footer-text">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 TravelStatic. All rights reserved.</p>
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
      <section className="hero" data-testid="hero-section">
        <div className="hero-content">
          <h1 className="hero-title" data-testid="hero-title">Discover Your Next Adventure</h1>
          <p className="hero-subtitle">Explore amazing destinations around the world</p>
          
          {/* Search Bar */}
          <div className="search-container" data-testid="search-container">
            <input 
              type="text" 
              placeholder="Where do you want to go?" 
              className="search-input"
              data-testid="search-input"
            />
            <button className="search-button" data-testid="search-button">Search</button>
          </div>
        </div>
      </section>

      {/* Traveller Count Options */}
      <section className="options-section" data-testid="traveller-section">
        <div className="container">
          <h2 className="section-title">Number of Travellers</h2>
          <div className="option-buttons">
            <button className="option-btn" data-testid="traveller-1">1 Person</button>
            <button className="option-btn" data-testid="traveller-2">2 People</button>
            <button className="option-btn" data-testid="traveller-3">3-5 People</button>
            <button className="option-btn" data-testid="traveller-4">6+ People</button>
          </div>
        </div>
      </section>

      {/* Budget Options */}
      <section className="options-section gray-bg" data-testid="budget-section">
        <div className="container">
          <h2 className="section-title">Select Your Budget</h2>
          <div className="budget-options">
            <div className="budget-card" data-testid="budget-low">
              <div className="budget-symbol">₹</div>
              <p className="budget-label">Budget-Friendly</p>
            </div>
            <div className="budget-card" data-testid="budget-medium">
              <div className="budget-symbol">₹₹</div>
              <p className="budget-label">Moderate</p>
            </div>
            <div className="budget-card" data-testid="budget-high">
              <div className="budget-symbol">₹₹₹</div>
              <p className="budget-label">Luxury</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Type Options */}
      <section className="options-section" data-testid="trip-type-section">
        <div className="container">
          <h2 className="section-title">Trip Type</h2>
          <div className="checkbox-group">
            <label className="checkbox-label" data-testid="trip-solo">
              <input type="checkbox" className="checkbox-input" />
              <span>Solo Travel</span>
            </label>
            <label className="checkbox-label" data-testid="trip-family">
              <input type="checkbox" className="checkbox-input" />
              <span>Family Trip</span>
            </label>
            <label className="checkbox-label" data-testid="trip-adventure">
              <input type="checkbox" className="checkbox-input" />
              <span>Adventure</span>
            </label>
            <label className="checkbox-label" data-testid="trip-relaxation">
              <input type="checkbox" className="checkbox-input" />
              <span>Relaxation</span>
            </label>
            <label className="checkbox-label" data-testid="trip-cultural">
              <input type="checkbox" className="checkbox-input" />
              <span>Cultural</span>
            </label>
            <label className="checkbox-label" data-testid="trip-business">
              <input type="checkbox" className="checkbox-input" />
              <span>Business</span>
            </label>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="options-section gray-bg" data-testid="destinations-section">
        <div className="container">
          <h2 className="section-title">Popular Destinations</h2>
          <div className="destination-grid">
            <div className="destination-card" data-testid="destination-paris">
              <div className="destination-image"></div>
              <h3 className="destination-name">Paris, France</h3>
              <p className="destination-description">The City of Light awaits with iconic landmarks</p>
            </div>
            <div className="destination-card" data-testid="destination-tokyo">
              <div className="destination-image"></div>
              <h3 className="destination-name">Tokyo, Japan</h3>
              <p className="destination-description">Modern metropolis meets ancient tradition</p>
            </div>
            <div className="destination-card" data-testid="destination-bali">
              <div className="destination-image"></div>
              <h3 className="destination-name">Bali, Indonesia</h3>
              <p className="destination-description">Tropical paradise with stunning beaches</p>
            </div>
            <div className="destination-card" data-testid="destination-newyork">
              <div className="destination-image"></div>
              <h3 className="destination-name">New York, USA</h3>
              <p className="destination-description">The city that never sleeps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="options-section" data-testid="map-section">
        <div className="container">
          <h2 className="section-title">Explore Map</h2>
          <div className="map-placeholder" data-testid="map-placeholder">
            <p className="map-text">Map will appear here</p>
          </div>
        </div>
      </section>

      {/* Stay Options */}
      <section className="options-section gray-bg" data-testid="stay-section">
        <div className="container">
          <h2 className="section-title">Stay Options</h2>
          <div className="stay-grid">
            <div className="stay-card" data-testid="stay-hotel">
              <div className="stay-icon">🏨</div>
              <h3 className="stay-name">Luxury Hotel</h3>
              <p className="stay-description">5-star accommodations with premium amenities</p>
              <p className="stay-price">From $200/night</p>
            </div>
            <div className="stay-card" data-testid="stay-apartment">
              <div className="stay-icon">🏠</div>
              <h3 className="stay-name">Apartment</h3>
              <p className="stay-description">Comfortable home-away-from-home experience</p>
              <p className="stay-price">From $100/night</p>
            </div>
            <div className="stay-card" data-testid="stay-hostel">
              <div className="stay-icon">🛏️</div>
              <h3 className="stay-name">Hostel</h3>
              <p className="stay-description">Budget-friendly shared accommodations</p>
              <p className="stay-price">From $30/night</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="options-section" data-testid="itinerary-section">
        <div className="container">
          <h2 className="section-title">Sample Itinerary</h2>
          <div className="itinerary-list">
            <div className="itinerary-item" data-testid="itinerary-day1">
              <div className="itinerary-day">Day 1</div>
              <div className="itinerary-content">
                <h3 className="itinerary-title">Arrival and City Exploration</h3>
                <p className="itinerary-description">Check into your hotel, explore the city center, visit local markets, and enjoy dinner at a traditional restaurant.</p>
              </div>
            </div>
            <div className="itinerary-item" data-testid="itinerary-day2">
              <div className="itinerary-day">Day 2</div>
              <div className="itinerary-content">
                <h3 className="itinerary-title">Historical Landmarks Tour</h3>
                <p className="itinerary-description">Visit famous monuments, museums, and cultural sites. Take guided tours and learn about local history.</p>
              </div>
            </div>
            <div className="itinerary-item" data-testid="itinerary-day3">
              <div className="itinerary-day">Day 3</div>
              <div className="itinerary-content">
                <h3 className="itinerary-title">Adventure and Leisure</h3>
                <p className="itinerary-description">Enjoy outdoor activities, shopping, and relaxation. Departure preparations in the evening.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// City Page
const CityPage = () => {
  return (
    <div data-testid="city-page">
      <Header />
      
      <div className="city-hero" data-testid="city-hero">
        <h1 className="city-title" data-testid="city-title">Paris, France</h1>
        <p className="city-subtitle">The City of Light</p>
      </div>

      <section className="city-section">
        <div className="container">
          <h2 className="section-title">About Paris</h2>
          <p className="city-description" data-testid="city-description">
            Paris, the capital of France, is a major European city and a global center for art, fashion, gastronomy, and culture. 
            Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel 
            Tower and the 12th-century Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques 
            along the Rue du Faubourg Saint-Honoré.
          </p>
        </div>
      </section>

      <section className="city-section gray-bg">
        <div className="container">
          <h2 className="section-title">Places to Visit</h2>
          <div className="places-list" data-testid="places-list">
            <div className="place-item" data-testid="place-1">
              <h3 className="place-name">Eiffel Tower</h3>
              <p className="place-description">Iconic iron lattice tower and symbol of Paris</p>
            </div>
            <div className="place-item" data-testid="place-2">
              <h3 className="place-name">Louvre Museum</h3>
              <p className="place-description">World's largest art museum and historic monument</p>
            </div>
            <div className="place-item" data-testid="place-3">
              <h3 className="place-name">Notre-Dame Cathedral</h3>
              <p className="place-description">Medieval Catholic cathedral with Gothic architecture</p>
            </div>
            <div className="place-item" data-testid="place-4">
              <h3 className="place-name">Arc de Triomphe</h3>
              <p className="place-description">Monumental arch honoring those who fought for France</p>
            </div>
            <div className="place-item" data-testid="place-5">
              <h3 className="place-name">Champs-Élysées</h3>
              <p className="place-description">Famous avenue lined with shops and cafes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="city-section">
        <div className="container">
          <h2 className="section-title">Map View</h2>
          <div className="map-placeholder" data-testid="city-map">
            <p className="map-text">Map will appear here</p>
          </div>
        </div>
      </section>

      <section className="city-section gray-bg">
        <div className="container">
          <h2 className="section-title">Where to Stay</h2>
          <div className="stay-list" data-testid="stay-list">
            <div className="stay-card">
              <h3 className="stay-name">Le Grand Hotel</h3>
              <p className="stay-description">Luxury 5-star hotel near the Louvre</p>
              <p className="stay-price">From €300/night</p>
            </div>
            <div className="stay-card">
              <h3 className="stay-name">Parisian Apartments</h3>
              <p className="stay-description">Charming apartments in the Marais district</p>
              <p className="stay-price">From €150/night</p>
            </div>
            <div className="stay-card">
              <h3 className="stay-name">Budget Hostel Paris</h3>
              <p className="stay-description">Affordable hostel near Montmartre</p>
              <p className="stay-price">From €40/night</p>
            </div>
          </div>
        </div>
      </section>

      <section className="city-section">
        <div className="container">
          <h2 className="section-title">3-Day Itinerary</h2>
          <div className="itinerary-text" data-testid="city-itinerary">
            <p><strong>Day 1:</strong> Arrive in Paris, check into hotel, visit the Eiffel Tower, evening Seine river cruise.</p>
            <p><strong>Day 2:</strong> Louvre Museum tour, lunch at a Parisian cafe, explore Notre-Dame and Latin Quarter.</p>
            <p><strong>Day 3:</strong> Montmartre and Sacré-Cœur, shopping on Champs-Élysées, farewell dinner in Le Marais.</p>
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
      
      <div className="page-hero" data-testid="about-hero">
        <h1 className="page-title">About TravelStatic</h1>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="about-text" data-testid="mission-text">
              At TravelStatic, we believe that travel should be accessible, enjoyable, and memorable for everyone. 
              Our mission is to provide travelers with comprehensive information and resources to plan their perfect journey.
            </p>
          </div>

          <div className="about-content">
            <h2 className="section-title">What We Offer</h2>
            <p className="about-text" data-testid="offers-text">
              We provide detailed destination guides, accommodation options, budget planning tools, and sample itineraries 
              to help you make the most of your travel experience. Whether you're a solo backpacker or planning a family 
              vacation, we have something for everyone.
            </p>
          </div>

          <div className="about-content">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card" data-testid="value-1">
                <h3 className="value-title">Authenticity</h3>
                <p className="value-text">Real experiences from real travelers</p>
              </div>
              <div className="value-card" data-testid="value-2">
                <h3 className="value-title">Accessibility</h3>
                <p className="value-text">Travel options for every budget</p>
              </div>
              <div className="value-card" data-testid="value-3">
                <h3 className="value-title">Inspiration</h3>
                <p className="value-text">Discover new destinations</p>
              </div>
              <div className="value-card" data-testid="value-4">
                <h3 className="value-title">Community</h3>
                <p className="value-text">Connect with fellow travelers</p>
              </div>
            </div>
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
      
      <div className="page-hero" data-testid="contact-hero">
        <h1 className="page-title">Contact Us</h1>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="section-title">Get in Touch</h2>
              <p className="contact-text" data-testid="contact-intro">
                Have questions or feedback? We'd love to hear from you. Fill out the form or reach us using the contact information below.
              </p>
              
              <div className="contact-details" data-testid="contact-details">
                <div className="contact-item">
                  <h3 className="contact-label">Email</h3>
                  <p className="contact-value">contact@travelstatic.com</p>
                </div>
                <div className="contact-item">
                  <h3 className="contact-label">Phone</h3>
                  <p className="contact-value">+1 (555) 123-4567</p>
                </div>
                <div className="contact-item">
                  <h3 className="contact-label">Address</h3>
                  <p className="contact-value">123 Travel Street, Adventure City, TC 12345</p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2 className="section-title">Send a Message</h2>
              <form className="contact-form" data-testid="contact-form">
                <div className="form-group">
                  <label className="form-label" data-testid="name-label">Name</label>
                  <input type="text" className="form-input" placeholder="Your name" data-testid="name-input" />
                </div>
                
                <div className="form-group">
                  <label className="form-label" data-testid="email-label">Email</label>
                  <input type="email" className="form-input" placeholder="your@email.com" data-testid="email-input" />
                </div>
                
                <div className="form-group">
                  <label className="form-label" data-testid="subject-label">Subject</label>
                  <input type="text" className="form-input" placeholder="What is this about?" data-testid="subject-input" />
                </div>
                
                <div className="form-group">
                  <label className="form-label" data-testid="message-label">Message</label>
                  <textarea className="form-textarea" rows="5" placeholder="Your message..." data-testid="message-input"></textarea>
                </div>
                
                <button type="button" className="form-submit" data-testid="submit-button">Send Message</button>
              </form>
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
          <Route path="/city" element={<CityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
