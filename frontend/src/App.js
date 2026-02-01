import "@/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Header Component with Language Selector
const Header = () => {
  return (
    <header className="header" data-testid="main-header">
      <div className="header-container">
        <Link to="/" className="logo" data-testid="logo">
          <span className="logo-text">TravelCommunity</span>
        </Link>
        <nav className="nav" data-testid="main-nav">
          <Link to="/" className="nav-link" data-testid="nav-home">Home</Link>
          <Link to="/city-template" className="nav-link" data-testid="nav-destinations">Destinations</Link>
          <Link to="/add-place" className="nav-link" data-testid="nav-add-place">Add a Place</Link>
          <Link to="/how-it-works" className="nav-link" data-testid="nav-how-it-works">How It Works</Link>
          <Link to="/about" className="nav-link" data-testid="nav-about">About</Link>
          <Link to="/contact" className="nav-link" data-testid="nav-contact">Contact</Link>
        </nav>
        <div className="language-selector" data-testid="language-selector">
          <label className="language-label">Language</label>
          <select className="language-select" data-testid="language-select">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
          <span className="language-note">More languages coming soon</span>
        </div>
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
          <p className="footer-text">Built with community contributions and real travel experiences.</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms & Conditions</a>
            <a href="#" className="footer-link">Disclaimer</a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Important Notice</h3>
          <p className="footer-text footer-disclaimer">
            Hotel and travel bookings are handled by third-party partners. 
            This website does not process payments or reservations.
          </p>
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
            Discover places, food spots, budget stays, and travel options shared by real travelers.
          </p>
          
          {/* Search Bar */}
          <div className="home-search-container" data-testid="search-container">
            <input 
              type="text" 
              placeholder="Search or choose a city" 
              className="home-search-input"
              data-testid="search-input"
            />
            <button className="home-search-button" data-testid="search-button">Search</button>
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="home-section" data-testid="popular-cities-section">
        <div className="container">
          <h2 className="section-title">Popular Cities</h2>
          <div className="cities-grid">
            <div className="city-card" data-testid="city-rishikesh">
              <div className="city-card-image"></div>
              <div className="city-card-content">
                <h3 className="city-card-name">Rishikesh</h3>
                <p className="city-card-description">Yoga capital and spiritual destination</p>
                <Link to="/city-template">
                  <button className="city-card-button">Explore City Guide</button>
                </Link>
              </div>
            </div>
            
            <div className="city-card" data-testid="city-goa">
              <div className="city-card-image"></div>
              <div className="city-card-content">
                <h3 className="city-card-name">Goa</h3>
                <p className="city-card-description">Beaches, nightlife, and Portuguese heritage</p>
                <Link to="/city-template">
                  <button className="city-card-button">Explore City Guide</button>
                </Link>
              </div>
            </div>
            
            <div className="city-card" data-testid="city-manali">
              <div className="city-card-image"></div>
              <div className="city-card-content">
                <h3 className="city-card-name">Manali</h3>
                <p className="city-card-description">Mountain adventures and scenic valleys</p>
                <Link to="/city-template">
                  <button className="city-card-button">Explore City Guide</button>
                </Link>
              </div>
            </div>
            
            <div className="city-card" data-testid="city-jaipur">
              <div className="city-card-image"></div>
              <div className="city-card-content">
                <h3 className="city-card-name">Jaipur</h3>
                <p className="city-card-description">Pink city with royal heritage</p>
                <Link to="/city-template">
                  <button className="city-card-button">Explore City Guide</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="home-section home-community-section" data-testid="community-section">
        <div className="container">
          <div className="community-content">
            <h2 className="community-title">Know a place others should visit?</h2>
            <p className="community-description">
              Help fellow travelers discover amazing places by sharing your experiences
            </p>
            <Link to="/add-place">
              <button className="community-button" data-testid="add-place-cta">Add a Place</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mini How It Works */}
      <section className="home-section" data-testid="how-it-works-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="how-it-works-grid">
            <div className="how-it-works-card" data-testid="step-1">
              <div className="step-number">1</div>
              <h3 className="step-title">Choose a city</h3>
              <p className="step-description">Browse our collection of travel destinations</p>
            </div>
            
            <div className="how-it-works-card" data-testid="step-2">
              <div className="step-number">2</div>
              <h3 className="step-title">Explore places, food, and stays</h3>
              <p className="step-description">Discover recommendations from real travelers</p>
            </div>
            
            <div className="how-it-works-card" data-testid="step-3">
              <div className="step-number">3</div>
              <h3 className="step-title">Share your experience</h3>
              <p className="step-description">Add places to help other travelers</p>
            </div>
          </div>
          <div className="how-it-works-link">
            <Link to="/how-it-works" className="link-button">Learn More</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// City Template Page (Complete with all sections)
const CityTemplatePage = () => {
  return (
    <div data-testid="city-template-page">
      <Header />
      
      {/* City Hero Section */}
      <div className="city-template-hero" data-testid="city-template-hero">
        <div className="city-template-image-placeholder" data-testid="hero-image-placeholder">
          <span className="placeholder-text">City Image Here</span>
        </div>
        <div className="city-template-overlay">
          <h1 className="city-template-title" data-testid="city-template-title">City Name Here</h1>
          <p className="city-template-subtitle">Your complete travel guide</p>
        </div>
      </div>

      {/* About the City */}
      <section className="template-section">
        <div className="container">
          <h2 className="section-title">About This City</h2>
          <div className="template-content-box" data-testid="about-content">
            <p className="template-placeholder-text">
              [Placeholder paragraph about the city. This will be replaced with actual city information, 
              history, culture, and general overview. Include what makes this city special and unique.]
            </p>
          </div>
        </div>
      </section>

      {/* Places to Visit */}
      <section className="template-section gray-bg">
        <div className="container">
          <h2 className="section-title">Places to Visit</h2>
          <div className="template-places-grid" data-testid="places-grid">
            <Link to="/place-detail" className="template-place-card" data-testid="place-card-1">
              <div className="template-place-image">
                <span className="placeholder-text-small">Image</span>
              </div>
              <div className="template-place-content">
                <h3 className="template-place-name">Place Name 1</h3>
                <p className="template-place-description">Short description of the place goes here</p>
                <span className="budget-tag budget-free" data-testid="budget-tag-1">Free</span>
              </div>
            </Link>
            
            <Link to="/place-detail" className="template-place-card" data-testid="place-card-2">
              <div className="template-place-image">
                <span className="placeholder-text-small">Image</span>
              </div>
              <div className="template-place-content">
                <h3 className="template-place-name">Place Name 2</h3>
                <p className="template-place-description">Short description of the place goes here</p>
                <span className="budget-tag budget-cheap" data-testid="budget-tag-2">Cheap</span>
              </div>
            </Link>
            
            <Link to="/place-detail" className="template-place-card" data-testid="place-card-3">
              <div className="template-place-image">
                <span className="placeholder-text-small">Image</span>
              </div>
              <div className="template-place-content">
                <h3 className="template-place-name">Place Name 3</h3>
                <p className="template-place-description">Short description of the place goes here</p>
                <span className="budget-tag budget-moderate" data-testid="budget-tag-3">Moderate</span>
              </div>
            </Link>
            
            <Link to="/place-detail" className="template-place-card" data-testid="place-card-4">
              <div className="template-place-image">
                <span className="placeholder-text-small">Image</span>
              </div>
              <div className="template-place-content">
                <h3 className="template-place-name">Place Name 4</h3>
                <p className="template-place-description">Short description of the place goes here</p>
                <span className="budget-tag budget-cheap" data-testid="budget-tag-4">Cheap</span>
              </div>
            </Link>
          </div>
          
          <div className="empty-state" data-testid="empty-state">
            <p className="empty-state-text">More places will be added soon.</p>
          </div>
        </div>
      </section>

      {/* Food & Cafes */}
      <section className="template-section">
        <div className="container">
          <h2 className="section-title">Food & Cafes</h2>
          <div className="template-list" data-testid="food-list">
            <div className="template-list-item" data-testid="food-item-1">
              <h3 className="template-list-title">Food Place Name 1</h3>
              <p className="template-list-description">Description of the food or cafe</p>
            </div>
            <div className="template-list-item" data-testid="food-item-2">
              <h3 className="template-list-title">Food Place Name 2</h3>
              <p className="template-list-description">Description of the food or cafe</p>
            </div>
            <div className="template-list-item" data-testid="food-item-3">
              <h3 className="template-list-title">Food Place Name 3</h3>
              <p className="template-list-description">Description of the food or cafe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Stays */}
      <section className="template-section gray-bg">
        <div className="container">
          <h2 className="section-title">Budget-Friendly Stays</h2>
          <div className="template-stays-grid" data-testid="stays-grid">
            <div className="template-stay-card" data-testid="stay-card-1">
              <h3 className="template-stay-name">Stay Name 1</h3>
              <p className="template-stay-budget">₹500 - ₹1000 per night</p>
              <p className="template-stay-description">Brief description of the stay</p>
            </div>
            <div className="template-stay-card" data-testid="stay-card-2">
              <h3 className="template-stay-name">Stay Name 2</h3>
              <p className="template-stay-budget">₹1000 - ₹2000 per night</p>
              <p className="template-stay-description">Brief description of the stay</p>
            </div>
            <div className="template-stay-card" data-testid="stay-card-3">
              <h3 className="template-stay-name">Stay Name 3</h3>
              <p className="template-stay-budget">₹2000 - ₹3000 per night</p>
              <p className="template-stay-description">Brief description of the stay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Itinerary */}
      <section className="template-section">
        <div className="container">
          <h2 className="section-title">Suggested Itinerary</h2>
          <div className="template-itinerary" data-testid="itinerary">
            <div className="template-itinerary-day" data-testid="day-1">
              <div className="template-day-number">Day 1</div>
              <div className="template-day-content">
                <h3 className="template-day-title">Day 1 Activities</h3>
                <p className="template-day-description">
                  [Placeholder for day 1 itinerary. Add activities, places to visit, and timing suggestions.]
                </p>
              </div>
            </div>
            
            <div className="template-itinerary-day" data-testid="day-2">
              <div className="template-day-number">Day 2</div>
              <div className="template-day-content">
                <h3 className="template-day-title">Day 2 Activities</h3>
                <p className="template-day-description">
                  [Placeholder for day 2 itinerary. Add activities, places to visit, and timing suggestions.]
                </p>
              </div>
            </div>
            
            <div className="template-itinerary-day" data-testid="day-3">
              <div className="template-day-number">Day 3</div>
              <div className="template-day-content">
                <h3 className="template-day-title">Day 3 Activities</h3>
                <p className="template-day-description">
                  [Placeholder for day 3 itinerary. Add activities, places to visit, and timing suggestions.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Stay - Hotel Booking Placeholder */}
      <section className="template-section gray-bg">
        <div className="container">
          <h2 className="section-title">Where to Stay</h2>
          <div className="hotel-grid" data-testid="hotel-grid">
            <div className="hotel-card" data-testid="hotel-1">
              <div className="hotel-image">
                <span className="placeholder-text-small">Hotel Image</span>
              </div>
              <div className="hotel-content">
                <h3 className="hotel-name">Budget Hotel Name</h3>
                <span className="hotel-type">Budget</span>
                <p className="hotel-price">₹800 - ₹1500 per night</p>
                <button className="hotel-book-button" data-testid="book-hotel-1">Book Hotel</button>
                <p className="coming-soon-text">Booking will be available soon</p>
              </div>
            </div>
            
            <div className="hotel-card" data-testid="hotel-2">
              <div className="hotel-image">
                <span className="placeholder-text-small">Hotel Image</span>
              </div>
              <div className="hotel-content">
                <h3 className="hotel-name">Standard Hotel Name</h3>
                <span className="hotel-type">Standard</span>
                <p className="hotel-price">₹2000 - ₹3500 per night</p>
                <button className="hotel-book-button" data-testid="book-hotel-2">Book Hotel</button>
                <p className="coming-soon-text">Booking will be available soon</p>
              </div>
            </div>
            
            <div className="hotel-card" data-testid="hotel-3">
              <div className="hotel-image">
                <span className="placeholder-text-small">Hotel Image</span>
              </div>
              <div className="hotel-content">
                <h3 className="hotel-name">Luxury Hotel Name</h3>
                <span className="hotel-type">Luxury</span>
                <p className="hotel-price">₹5000+ per night</p>
                <button className="hotel-book-button" data-testid="book-hotel-3">Book Hotel</button>
                <p className="coming-soon-text">Booking will be available soon</p>
              </div>
            </div>
          </div>
          <div className="partner-note" data-testid="hotel-partner-note">
            <p>Hotel bookings will be handled by trusted third-party partners.</p>
          </div>
        </div>
      </section>

      {/* Travel to This City - Bus Booking Placeholder */}
      <section className="template-section">
        <div className="container">
          <h2 className="section-title">Travel to This City</h2>
          <div className="bus-booking-container" data-testid="bus-booking">
            <div className="bus-booking-form">
              <div className="bus-form-row">
                <div className="bus-form-group">
                  <label className="bus-label">From City</label>
                  <input type="text" className="bus-input" placeholder="Enter your city" data-testid="from-city-input" />
                </div>
                <div className="bus-form-group">
                  <label className="bus-label">To City</label>
                  <input type="text" className="bus-input" value="City Name Here" readOnly data-testid="to-city-input" />
                </div>
                <div className="bus-form-group">
                  <label className="bus-label">Travel Date</label>
                  <input type="date" className="bus-input" data-testid="travel-date-input" />
                </div>
              </div>
              <button className="bus-search-button" data-testid="search-buses-button">Search Buses</button>
              <p className="coming-soon-text">Bus booking will be available soon</p>
            </div>
            <div className="partner-note" data-testid="bus-partner-note">
              <p>Bus bookings will redirect to official travel partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* City Map */}
      <section className="template-section gray-bg">
        <div className="container">
          <h2 className="section-title">City Map</h2>
          <div className="template-map-placeholder" data-testid="map-placeholder">
            <p className="template-map-text">Interactive map coming soon</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="template-section">
        <div className="container">
          <h2 className="section-title">Reviews</h2>
          <div className="reviews-placeholder" data-testid="reviews-placeholder">
            <div className="stars-placeholder">★★★★★</div>
            <p className="reviews-coming-soon">Traveler reviews coming soon</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="template-section gray-bg">
        <div className="container">
          <h2 className="section-title">Photo Gallery</h2>
          <div className="gallery-grid" data-testid="gallery-grid">
            <div className="gallery-item">
              <span className="placeholder-text-small">Photo 1</span>
            </div>
            <div className="gallery-item">
              <span className="placeholder-text-small">Photo 2</span>
            </div>
            <div className="gallery-item">
              <span className="placeholder-text-small">Photo 3</span>
            </div>
            <div className="gallery-item">
              <span className="placeholder-text-small">Photo 4</span>
            </div>
          </div>
          <p className="gallery-coming-soon">Traveler photos will appear here</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="template-section template-cta">
        <div className="container">
          <div className="cta-content" data-testid="cta-section">
            <h2 className="cta-title">Know a place in this city?</h2>
            <p className="cta-description">Help other travelers discover hidden gems</p>
            <Link to="/add-place">
              <button className="cta-button" data-testid="add-place-button">Add a Place</button>
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
        <h1 className="place-detail-title" data-testid="place-detail-title">Place Name</h1>
      </div>

      <section className="place-detail-section">
        <div className="container">
          <div className="place-detail-content">
            <h2 className="section-title">About This Place</h2>
            <p className="place-detail-description" data-testid="place-description">
              [Short description of the place. This will be replaced with actual information about the place, 
              what makes it special, and why travelers should visit.]
            </p>
            
            <div className="place-detail-tag">
              <span className="budget-tag budget-free">Free</span>
            </div>
          </div>

          <div className="place-detail-gallery">
            <h2 className="section-title">Photos</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <span className="placeholder-text-small">Photo 1</span>
              </div>
              <div className="gallery-item">
                <span className="placeholder-text-small">Photo 2</span>
              </div>
              <div className="gallery-item">
                <span className="placeholder-text-small">Photo 3</span>
              </div>
            </div>
          </div>

          <div className="place-detail-map">
            <h2 className="section-title">Location</h2>
            <div className="template-map-placeholder">
              <p className="template-map-text">Map coming soon</p>
            </div>
          </div>

          <div className="place-detail-reviews">
            <h2 className="section-title">Reviews</h2>
            <div className="reviews-placeholder">
              <div className="stars-placeholder">★★★★★</div>
              <p className="reviews-coming-soon">Reviews coming soon</p>
            </div>
            <button className="review-button" data-testid="write-review-button">
              Write a review (coming soon)
            </button>
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
      
      <div className="page-hero" data-testid="add-place-hero">
        <h1 className="page-title">Add a Place to Help Other Travelers</h1>
        <p className="page-subtitle">Share a place you visited so others can discover it too.</p>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="add-place-form-container">
            <form className="add-place-form" data-testid="add-place-form">
              
              {/* What are you adding? */}
              <div className="form-section" data-testid="form-section-type">
                <h3 className="form-section-title">What are you adding?</h3>
                <div className="radio-group">
                  <label className="radio-label" data-testid="type-place">
                    <input type="radio" name="place-type" className="radio-input" />
                    <span className="radio-text">Place to Visit</span>
                  </label>
                  <label className="radio-label" data-testid="type-food">
                    <input type="radio" name="place-type" className="radio-input" />
                    <span className="radio-text">Food / Cafe</span>
                  </label>
                  <label className="radio-label" data-testid="type-stay">
                    <input type="radio" name="place-type" className="radio-input" />
                    <span className="radio-text">Budget Stay</span>
                  </label>
                  <label className="radio-label" data-testid="type-experience">
                    <input type="radio" name="place-type" className="radio-input" />
                    <span className="radio-text">Experience</span>
                  </label>
                </div>
              </div>

              {/* Select City */}
              <div className="form-section" data-testid="form-section-city">
                <h3 className="form-section-title">Select City</h3>
                <select className="form-select" data-testid="city-select">
                  <option value="">Choose a city...</option>
                  <option value="rishikesh">Rishikesh</option>
                  <option value="goa">Goa</option>
                  <option value="manali">Manali</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="udaipur">Udaipur</option>
                </select>
              </div>

              {/* Place Name */}
              <div className="form-section" data-testid="form-section-name">
                <h3 className="form-section-title">Place Name</h3>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Enter the name of the place" 
                  data-testid="place-name-input"
                />
              </div>

              {/* Location */}
              <div className="form-section" data-testid="form-section-location">
                <h3 className="form-section-title">Location</h3>
                <div className="location-placeholder" data-testid="location-placeholder">
                  <p className="location-placeholder-text">Map selection will be added later</p>
                </div>
              </div>

              {/* Description */}
              <div className="form-section" data-testid="form-section-description">
                <h3 className="form-section-title">Description</h3>
                <textarea 
                  className="form-textarea" 
                  rows="6" 
                  placeholder="Tell us about this place..." 
                  data-testid="description-textarea"
                ></textarea>
              </div>

              {/* Budget Type */}
              <div className="form-section" data-testid="form-section-budget">
                <h3 className="form-section-title">Budget Type</h3>
                <div className="radio-group radio-group-horizontal">
                  <label className="radio-label" data-testid="budget-free">
                    <input type="radio" name="budget-type" className="radio-input" />
                    <span className="radio-text">Free</span>
                  </label>
                  <label className="radio-label" data-testid="budget-cheap">
                    <input type="radio" name="budget-type" className="radio-input" />
                    <span className="radio-text">Cheap</span>
                  </label>
                  <label className="radio-label" data-testid="budget-moderate">
                    <input type="radio" name="budget-type" className="radio-input" />
                    <span className="radio-text">Moderate</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-section">
                <button type="button" className="form-submit" data-testid="submit-place-button">
                  Submit for Review
                </button>
              </div>

              {/* Thank You Message */}
              <div className="thank-you-message" data-testid="thank-you-message">
                <p className="thank-you-text">
                  Thanks for contributing! We will review and add it soon.
                </p>
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
            <div className="how-step" data-testid="how-step-1">
              <div className="how-step-number">1</div>
              <div className="how-step-content">
                <h2 className="how-step-title">Choose a city</h2>
                <p className="how-step-description">
                  Browse our collection of travel destinations and select the city you want to explore. 
                  Each city has a complete guide with places to visit, food recommendations, and stay options.
                </p>
              </div>
            </div>

            <div className="how-step" data-testid="how-step-2">
              <div className="how-step-number">2</div>
              <div className="how-step-content">
                <h2 className="how-step-title">Explore places, food, stays, and travel options</h2>
                <p className="how-step-description">
                  Discover recommendations shared by real travelers. Find budget-friendly stays, local food spots, 
                  must-visit places, and convenient travel options. All information is contributed by the community.
                </p>
              </div>
            </div>

            <div className="how-step" data-testid="how-step-3">
              <div className="how-step-number">3</div>
              <div className="how-step-content">
                <h2 className="how-step-title">Share your experience</h2>
                <p className="how-step-description">
                  Know a great place others should visit? Add it to our platform! Your contributions help fellow 
                  travelers discover amazing experiences. Every submission is reviewed before being added.
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

// Admin Review Page (Hidden)
const AdminReviewPage = () => {
  return (
    <div data-testid="admin-review-page">
      <Header />
      
      <div className="page-hero">
        <h1 className="page-title">Submissions Review (Admin)</h1>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="admin-placeholder" data-testid="admin-placeholder">
            <p className="admin-placeholder-text">
              Submitted places will appear here for review and approval.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Search Results Page
const SearchResultsPage = () => {
  return (
    <div data-testid="search-results-page">
      <Header />
      
      <div className="page-hero">
        <h1 className="page-title">Search Results</h1>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="search-placeholder" data-testid="search-placeholder">
            <p className="search-placeholder-text">
              Search functionality coming soon.
            </p>
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
        <h1 className="page-title">About TravelCommunity</h1>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="about-content-detailed">
            <p className="about-text-large" data-testid="about-main-text">
              This platform helps travelers discover places, food spots, budget stays, and travel options 
              through real experiences shared by the community.
            </p>
            
            <div className="about-mission">
              <h2 className="section-title">Our Mission</h2>
              <p className="about-text">
                To create a community-driven platform where travelers can share and discover authentic travel 
                experiences, making trip planning easier and more reliable for everyone.
              </p>
            </div>

            <div className="about-values">
              <h2 className="section-title">Our Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <h3 className="value-title">Community First</h3>
                  <p className="value-text">Built by travelers, for travelers</p>
                </div>
                <div className="value-card">
                  <h3 className="value-title">Authenticity</h3>
                  <p className="value-text">Real experiences from real people</p>
                </div>
                <div className="value-card">
                  <h3 className="value-title">Accessibility</h3>
                  <p className="value-text">Travel options for every budget</p>
                </div>
                <div className="value-card">
                  <h3 className="value-title">Transparency</h3>
                  <p className="value-text">Honest recommendations you can trust</p>
                </div>
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
      
      <div className="page-hero">
        <h1 className="page-title">Contact Us</h1>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="contact-content-simple">
            <p className="contact-text-simple" data-testid="contact-text">
              For suggestions or queries, please contact us.
            </p>
            
            <div className="contact-details-simple">
              <div className="contact-item-simple">
                <h3 className="contact-label-simple">Email</h3>
                <p className="contact-value-simple">hello@travelcommunity.com</p>
              </div>
              
              <div className="contact-item-simple">
                <h3 className="contact-label-simple">Support</h3>
                <p className="contact-value-simple">support@travelcommunity.com</p>
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
          <Route path="/admin-review" element={<AdminReviewPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
