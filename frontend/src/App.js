import "@/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

// ============================================
// DYNAMIC HERO TEXTS
// ============================================
const HERO_TEXTS = [
  "Plan your next journey, one place at a time",
  "Where every trip begins with an idea",
  "Discover places. Plan better trips.",
  "Turn travel ideas into real journeys",
  "Your guide to unforgettable trips",
  "Explore destinations the smart way",
  "From planning to exploring — all in one place",
  "Travel smarter, not harder",
  "Find places, food, stays & experiences",
  "Every destination has a story — start yours"
];

// ============================================
// MOCK DATA STRUCTURES (Backend-Ready)
// ============================================

const CITIES_DATA = [
  {
    city_id: "rishikesh",
    city_name: "Rishikesh",
    short_description: "Yoga capital & spiritual destination",
    long_description: "Rishikesh is a city in India's northern state of Uttarakhand, in the Himalayan foothills beside the Ganges River. The river is considered holy, and the city is renowned as a center for studying yoga and meditation.",
    hero_image: null,
    state: "Uttarakhand",
    country: "India",
    weather: { temp: "25°C", condition: "Pleasant", season: "Winter" },
    best_time: "September to November, February to April",
    lat: 30.0869,
    lng: 78.2676
  },
  {
    city_id: "goa",
    city_name: "Goa",
    short_description: "Beaches & nightlife",
    long_description: "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area's tropical spice plantations.",
    hero_image: null,
    state: "Goa",
    country: "India",
    weather: { temp: "28°C", condition: "Sunny", season: "Winter" },
    best_time: "November to February",
    lat: 15.2993,
    lng: 74.1240
  },
  {
    city_id: "manali",
    city_name: "Manali",
    short_description: "Mountain adventures",
    long_description: "Manali is a high-altitude Himalayan resort town in India's northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.",
    hero_image: null,
    state: "Himachal Pradesh",
    country: "India",
    weather: { temp: "10°C", condition: "Cold", season: "Winter" },
    best_time: "October to June",
    lat: 32.2432,
    lng: 77.1892
  },
  {
    city_id: "jaipur",
    city_name: "Jaipur",
    short_description: "Pink city heritage",
    long_description: "Jaipur is the capital of India's Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City.",
    hero_image: null,
    state: "Rajasthan",
    country: "India",
    weather: { temp: "22°C", condition: "Clear", season: "Winter" },
    best_time: "November to February",
    lat: 26.9124,
    lng: 75.7873
  }
];

const ITEMS_DATA = [
  // Rishikesh Places
  { item_id: "r1", city_id: "rishikesh", title: "Laxman Jhula", type: "place", budget_type: "budget", short_description: "Iconic suspension bridge", image: null, approx_price_range: "Free", booking_url: "" },
  { item_id: "r2", city_id: "rishikesh", title: "Beatles Ashram", type: "place", budget_type: "budget", short_description: "Historic meditation center", image: null, approx_price_range: "₹150", booking_url: "" },
  { item_id: "r3", city_id: "rishikesh", title: "River Rafting", type: "activity", budget_type: "standard", short_description: "Thrilling water adventure", image: null, approx_price_range: "₹500-₹1500", booking_url: "" },
  { item_id: "r4", city_id: "rishikesh", title: "Chotiwala Restaurant", type: "food", budget_type: "budget", short_description: "Famous North Indian cuisine", image: null, approx_price_range: "₹200-₹400", booking_url: "" },
  { item_id: "r5", city_id: "rishikesh", title: "Zostel Rishikesh", type: "stay", budget_type: "budget", short_description: "Backpacker hostel", image: null, approx_price_range: "₹500-₹800/night", booking_url: "" },
  { item_id: "r6", city_id: "rishikesh", title: "Ganga Beach Resort", type: "stay", budget_type: "premium", short_description: "Luxury riverside resort", image: null, approx_price_range: "₹5000+/night", booking_url: "" },
  
  // Goa
  { item_id: "g1", city_id: "goa", title: "Baga Beach", type: "place", budget_type: "budget", short_description: "Popular beach destination", image: null, approx_price_range: "Free", booking_url: "" },
  { item_id: "g2", city_id: "goa", title: "Water Sports", type: "activity", budget_type: "standard", short_description: "Parasailing, jet ski", image: null, approx_price_range: "₹1000-₹3000", booking_url: "" },
  { item_id: "g3", city_id: "goa", title: "Vinayak Family Restaurant", type: "food", budget_type: "budget", short_description: "Authentic Goan seafood", image: null, approx_price_range: "₹300-₹600", booking_url: "" },
  { item_id: "g4", city_id: "goa", title: "Backpacker Panda", type: "stay", budget_type: "budget", short_description: "Beach hostel", image: null, approx_price_range: "₹600-₹1000/night", booking_url: "" },
  
  // Manali
  { item_id: "m1", city_id: "manali", title: "Rohtang Pass", type: "place", budget_type: "standard", short_description: "High mountain pass", image: null, approx_price_range: "₹500 permit", booking_url: "" },
  { item_id: "m2", city_id: "manali", title: "Paragliding", type: "activity", budget_type: "standard", short_description: "Mountain paragliding", image: null, approx_price_range: "₹2000-₹3000", booking_url: "" },
  { item_id: "m3", city_id: "manali", title: "Johnson's Cafe", type: "food", budget_type: "standard", short_description: "Popular cafe & bakery", image: null, approx_price_range: "₹400-₹800", booking_url: "" },
  { item_id: "m4", city_id: "manali", title: "Zostel Manali", type: "stay", budget_type: "budget", short_description: "Mountain hostel", image: null, approx_price_range: "₹700-₹1200/night", booking_url: "" },
  
  // Jaipur
  { item_id: "j1", city_id: "jaipur", title: "Hawa Mahal", type: "place", budget_type: "budget", short_description: "Palace of Winds", image: null, approx_price_range: "₹200", booking_url: "" },
  { item_id: "j2", city_id: "jaipur", title: "City Palace Tour", type: "activity", budget_type: "standard", short_description: "Royal palace exploration", image: null, approx_price_range: "₹500-₹1000", booking_url: "" },
  { item_id: "j3", city_id: "jaipur", title: "Laxmi Mishthan Bhandar", type: "food", budget_type: "budget", short_description: "Famous sweets & snacks", image: null, approx_price_range: "₹200-₹500", booking_url: "" },
  { item_id: "j4", city_id: "jaipur", title: "Jaipur Inn", type: "stay", budget_type: "budget", short_description: "Heritage guesthouse", image: null, approx_price_range: "₹800-₹1500/night", booking_url: "" }
];

const ICONIC_PLACES_DATA = [
  { id: "ip1", name: "Taj Mahal", tagline: "Symbol of eternal love", image: null },
  { id: "ip2", name: "Golden Temple", tagline: "Spiritual sanctuary", image: null },
  { id: "ip3", name: "Gateway of India", tagline: "Historic monument", image: null },
  { id: "ip4", name: "Hawa Mahal", tagline: "Palace of winds", image: null },
  { id: "ip5", name: "Amber Fort", tagline: "Majestic hilltop palace", image: null },
  { id: "ip6", name: "Victoria Memorial", tagline: "Colonial architecture", image: null }
];

const COMMUNITY_PHOTOS_DATA = [
  { id: "cp1", username: "traveler_raj", photo: null, caption: "Sunset at Goa beach" },
  { id: "cp2", username: "wanderlust_priya", photo: null, caption: "Rishikesh rafting adventure" },
  { id: "cp3", username: "explorer_amit", photo: null, caption: "Manali snow views" },
  { id: "cp4", username: "foodie_neha", photo: null, caption: "Street food in Jaipur" },
  { id: "cp5", username: "mountain_lover", photo: null, caption: "Himalayan sunrise" }
];

const BACKGROUND_IMAGES = [
  { id: 1, type: "mountains", gradient: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))" },
  { id: 2, type: "beach", gradient: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))" },
  { id: 3, type: "city", gradient: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))" },
  { id: 4, type: "forest", gradient: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))" }
];

const TRAVEL_INFO_DATA = [
  { from_city: "Delhi", to_city: "Rishikesh", travel_type: "bus", approx_price_range: "₹400-₹800", booking_url: "" },
  { from_city: "Delhi", to_city: "Manali", travel_type: "bus", approx_price_range: "₹800-₹1500", booking_url: "" },
  { from_city: "Mumbai", to_city: "Goa", travel_type: "bus", approx_price_range: "₹600-₹1200", booking_url: "" }
];

// ============================================
// HEADER COMPONENT
// ============================================
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
            <Link to="/city-template" className="nav-link">Destinations</Link>
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
          <Link to="/city-template" className="mobile-drawer-link" onClick={() => setMenuOpen(false)}>Destinations</Link>
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

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
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
        <p>© 2025 TravelCommunity. All rights reserved.</p>
      </div>
    </footer>
  );
};

// ============================================
// HOMEPAGE
// ============================================
const Home = () => {
  const [heroText, setHeroText] = useState("");
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const randomText = HERO_TEXTS[Math.floor(Math.random() * HERO_TEXTS.length)];
    setHeroText(randomText);
    
    // Background slideshow
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Will redirect to search results or destination page
      const city = CITIES_DATA.find(c => 
        c.city_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (city) {
        window.location.href = `/destination/${city.city_id}`;
      }
    }
  };

  return (
    <div className="page-container" data-testid="homepage">
      <Header />
      
      {/* Hero Section with Background Slideshow */}
      <section className="home-hero">
        {/* Background Slideshow */}
        <div className="hero-background-slideshow">
          {BACKGROUND_IMAGES.map((img, index) => (
            <div
              key={img.id}
              className={`hero-bg-slide ${index === currentBgIndex ? 'active' : ''} bg-${img.type}`}
              style={{ background: img.gradient }}
            ></div>
          ))}
        </div>
        
        <div className="home-hero-content">
          <h1 className="home-hero-title">{heroText}</h1>
          
          {/* Search Bar - Always here on desktop, always above categories on mobile */}
          <form onSubmit={handleSearch} className="home-search-container">
            <input 
              type="text" 
              placeholder="Search destinations, hotels, restaurants..." 
              className="home-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="home-search-button">Search</button>
          </form>

          {/* Category Row - Desktop Below Search, Mobile Below Search */}
          <div className="category-row">
            {['Hotels', 'Things to Do', 'Food & Cafes'].map((cat, idx) => (
              <button onClick={scrollToSearch} className="category-card" key={idx}>
                <span className="category-name">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Community Slideshow */}
      <section className="community-slideshow-section">
        <div className="container">
          <div className="community-slideshow-header">
            <h2 className="section-title">Shared by Travelers</h2>
            <button className="post-photo-btn" onClick={() => setShowSignupModal(true)}>
              Post your photo
            </button>
          </div>
          <div className="horizontal-scroll">
            {COMMUNITY_PHOTOS_DATA.map((photo) => (
              <div className="community-photo-card" key={photo.id}>
                <div className="community-photo-image"></div>
                <div className="community-photo-info">
                  <p className="community-username">@{photo.username}</p>
                  <p className="community-caption">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Modal */}
      {showSignupModal && (
        <>
          <div className="modal-overlay" onClick={() => setShowSignupModal(false)}></div>
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">Create Account</h2>
              <button className="modal-close" onClick={() => setShowSignupModal(false)}>✕</button>
            </div>
            <div className="modal-content">
              <p className="modal-text">Sign up to share your travel photos and experiences with the community.</p>
              <div className="modal-note">
                <p>Note: Browsing does not require signup. Only posting photos requires an account.</p>
              </div>
              <button className="modal-button">Create Account (Coming Soon)</button>
            </div>
          </div>
        </>
      )}

      {/* Iconic Places - Extensible */}
      <section className="iconic-section">
        <div className="container">
          <h2 className="section-title">Iconic Places You Must Visit</h2>
          <div className="horizontal-scroll">
            {ICONIC_PLACES_DATA.map((place) => (
              <div className="scroll-card iconic-card" key={place.id}>
                <div className="scroll-card-image"></div>
                <div className="scroll-card-content">
                  <h3 className="scroll-card-name">{place.name}</h3>
                  <p className="scroll-card-description">{place.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities - No Direct Links */}
      <section className="home-section">
        <div className="container">
          <h2 className="section-title">Popular Destinations</h2>
          <div className="horizontal-scroll">
            {CITIES_DATA.map((city) => (
              <div className="scroll-card city-card" key={city.city_id} data-testid={`city-${city.city_id}`}>
                <div className="scroll-card-image"></div>
                <div className="scroll-card-content">
                  <h3 className="scroll-card-name">{city.city_name}</h3>
                  <p className="scroll-card-description">{city.short_description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA */}
      <section className="home-section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Plan your trip in a single click</h2>
            <p className="cta-description">Get personalized suggestions for places, food, and stays based on your preferences</p>
            <Link to="/trip-planner">
              <button className="cta-button">Start Planning</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// ============================================
// DESTINATION PAGE (Dynamic, Result-Only)
// ============================================
const DestinationPage = () => {
  const { cityId } = window.location.pathname.split('/').pop() ? { cityId: window.location.pathname.split('/').pop() } : { cityId: "rishikesh" };
  const city = CITIES_DATA.find(c => c.city_id === cityId) || CITIES_DATA[0];
  const places = ITEMS_DATA.filter(i => i.city_id === cityId && i.type === "place");
  const food = ITEMS_DATA.filter(i => i.city_id === cityId && i.type === "food");
  const activities = ITEMS_DATA.filter(i => i.city_id === cityId && i.type === "activity");
  const stays = ITEMS_DATA.filter(i => i.city_id === cityId && i.type === "stay");

  return (
    <div className="page-container">
      <Header />
      
      {/* City Hero */}
      <div className="city-hero">
        <div className="city-hero-image"></div>
        <div className="city-hero-overlay">
          <h1 className="city-hero-title">{city?.city_name}</h1>
          <p className="city-hero-subtitle">{city?.short_description}</p>
        </div>
      </div>

      {/* Weather & Best Time */}
      <section className="template-section">
        <div className="container">
          <div className="info-cards-grid">
            <div className="info-card weather-card">
              <h3 className="info-card-title">Current Weather</h3>
              <div className="weather-content">
                <div className="weather-temp">{city?.weather?.temp}</div>
                <div className="weather-condition">{city?.weather?.condition}</div>
                <div className="weather-season">Season: {city?.weather?.season}</div>
              </div>
              <p className="info-note">Weather data placeholder - will update with API</p>
            </div>
            
            <div className="info-card best-time-card">
              <h3 className="info-card-title">Best Time to Visit</h3>
              <p className="best-time-text">{city?.best_time}</p>
              <p className="info-note">Plan your visit during these months for the best experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="template-section gray-bg">
        <div className="container">
          <h2 className="section-title">About {city?.city_name}</h2>
          <div className="content-box">
            <p className="content-text">{city?.long_description}</p>
          </div>
        </div>
      </section>

      {/* Places to Visit */}
      <section className="template-section">
        <div className="container">
          <h2 className="section-title">Places to Visit</h2>
          <div className="horizontal-scroll">
            {places.map((item) => (
              <div className="scroll-card" key={item.item_id}>
                <div className="scroll-card-image"></div>
                <div className="scroll-card-content">
                  <h3 className="scroll-card-name">{item.title}</h3>
                  <p className="scroll-card-description">{item.short_description}</p>
                  <span className={`budget-tag budget-${item.budget_type}`}>{item.approx_price_range}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food & Cafes */}
      <section className="template-section gray-bg">
        <div className="container">
          <h2 className="section-title">Food & Cafes</h2>
          <div className="horizontal-scroll">
            {food.map((item) => (
              <div className="scroll-card" key={item.item_id}>
                <div className="scroll-card-image"></div>
                <div className="scroll-card-content">
                  <h3 className="scroll-card-name">{item.title}</h3>
                  <p className="scroll-card-description">{item.short_description}</p>
                  <span className="scroll-card-budget">{item.approx_price_range}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="template-section">
        <div className="container">
          <h2 className="section-title">Things to Do</h2>
          <div className="horizontal-scroll">
            {activities.map((item) => (
              <div className="scroll-card" key={item.item_id}>
                <div className="scroll-card-image"></div>
                <div className="scroll-card-content">
                  <h3 className="scroll-card-name">{item.title}</h3>
                  <p className="scroll-card-description">{item.short_description}</p>
                  <span className="scroll-card-budget">{item.approx_price_range}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels & Stays */}
      <section className="template-section gray-bg">
        <div className="container">
          <h2 className="section-title">Where to Stay</h2>
          <div className="horizontal-scroll">
            {stays.map((item) => (
              <div className="scroll-card" key={item.item_id}>
                <div className="scroll-card-image"></div>
                <div className="scroll-card-content">
                  <h3 className="scroll-card-name">{item.title}</h3>
                  <span className={`hotel-type type-${item.budget_type}`}>{item.budget_type}</span>
                  <p className="scroll-card-description">{item.short_description}</p>
                  <span className="scroll-card-budget">{item.approx_price_range}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="template-section">
        <div className="container">
          <h2 className="section-title">City Map</h2>
          <div className="map-placeholder-container">
            <div className="map-placeholder">
              <div className="map-icon">📍</div>
              <p className="map-placeholder-text">Interactive map coming soon</p>
              <p className="map-note">OpenStreetMap + Leaflet integration will be added with API setup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Info */}
      <section className="template-section gray-bg">
        <div className="container">
          <h2 className="section-title">Travel to {city?.city_name}</h2>
          <div className="travel-box">
            <p className="travel-info">Travel options available via bus and train</p>
            <div className="travel-note-box">
              <p><strong>By Bus:</strong> Multiple operators available from major cities</p>
              <p><strong>By Train:</strong> Well connected to nearest railway station</p>
              <p className="travel-booking-note">Booking integration coming soon with third-party partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="template-section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Know a place in {city?.city_name}?</h2>
            <p className="cta-description">Help travelers discover hidden gems</p>
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

// ============================================
// COMPLETE TRIP PLANNER PAGE (NEW)
// ============================================
const TripPlannerPage = () => {
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState("");
  const [persons, setPersons] = useState("");
  const [budget, setBudget] = useState("");

  const showResults = step === 4;
  const selectedCity = CITIES_DATA.find(c => c.city_id === destination);
  const suggestedPlaces = ITEMS_DATA.filter(i => i.city_id === destination && i.type === "place");
  const suggestedFood = ITEMS_DATA.filter(i => i.city_id === destination && i.type === "food");
  const suggestedActivities = ITEMS_DATA.filter(i => i.city_id === destination && i.type === "activity");
  const suggestedStays = ITEMS_DATA.filter(i => i.city_id === destination && i.type === "stay" && i.budget_type === budget);

  return (
    <div className="page-container">
      <Header />
      
      <div className="page-hero">
        <h1 className="page-title">Complete Trip Plan</h1>
        <p className="page-subtitle">Get personalized suggestions in 3 simple steps</p>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="trip-planner-container">
            
            {/* Step 1: Select Destination */}
            {step === 1 && (
              <div className="trip-step">
                <h2 className="trip-step-title">Step 1: Select Destination</h2>
                <div className="trip-options">
                  {CITIES_DATA.map((city) => (
                    <button
                      key={city.city_id}
                      className={`trip-option-btn ${destination === city.city_id ? 'active' : ''}`}
                      onClick={() => setDestination(city.city_id)}
                    >
                      {city.city_name}
                    </button>
                  ))}
                </div>
                <button 
                  className="trip-next-btn" 
                  disabled={!destination}
                  onClick={() => setStep(2)}
                >
                  Next
                </button>
              </div>
            )}

            {/* Step 2: Number of Persons */}
            {step === 2 && (
              <div className="trip-step">
                <h2 className="trip-step-title">Step 2: Number of Persons</h2>
                <div className="trip-options">
                  {['1', '2', '3-4', '5+'].map((num) => (
                    <button
                      key={num}
                      className={`trip-option-btn ${persons === num ? 'active' : ''}`}
                      onClick={() => setPersons(num)}
                    >
                      {num} {num === '1' ? 'Person' : 'People'}
                    </button>
                  ))}
                </div>
                <div className="trip-nav-btns">
                  <button className="trip-back-btn" onClick={() => setStep(1)}>Back</button>
                  <button 
                    className="trip-next-btn" 
                    disabled={!persons}
                    onClick={() => setStep(3)}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Budget */}
            {step === 3 && (
              <div className="trip-step">
                <h2 className="trip-step-title">Step 3: Select Budget</h2>
                <div className="trip-options">
                  {['budget', 'standard', 'premium'].map((b) => (
                    <button
                      key={b}
                      className={`trip-option-btn ${budget === b ? 'active' : ''}`}
                      onClick={() => setBudget(b)}
                    >
                      {b.charAt(0).toUpperCase() + b.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="trip-nav-btns">
                  <button className="trip-back-btn" onClick={() => setStep(2)}>Back</button>
                  <button 
                    className="trip-next-btn" 
                    disabled={!budget}
                    onClick={() => setStep(4)}
                  >
                    Get Plan
                  </button>
                </div>
              </div>
            )}

            {/* Results */}
            {showResults && (
              <div className="trip-results">
                <h2 className="trip-results-title">Your Trip Plan to {selectedCity?.city_name}</h2>
                <p className="trip-results-subtitle">{persons} {persons === '1' ? 'Person' : 'People'} • {budget.charAt(0).toUpperCase() + budget.slice(1)} Budget</p>

                <div className="trip-results-section">
                  <h3 className="trip-results-heading">Suggested Places</h3>
                  <div className="horizontal-scroll">
                    {suggestedPlaces.map((item) => (
                      <div className="scroll-card" key={item.item_id}>
                        <div className="scroll-card-image"></div>
                        <div className="scroll-card-content">
                          <h3 className="scroll-card-name">{item.title}</h3>
                          <p className="scroll-card-description">{item.short_description}</p>
                          <span className="scroll-card-budget">{item.approx_price_range}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="trip-results-section">
                  <h3 className="trip-results-heading">Food Suggestions</h3>
                  <div className="horizontal-scroll">
                    {suggestedFood.map((item) => (
                      <div className="scroll-card" key={item.item_id}>
                        <div className="scroll-card-image"></div>
                        <div className="scroll-card-content">
                          <h3 className="scroll-card-name">{item.title}</h3>
                          <p className="scroll-card-description">{item.short_description}</p>
                          <span className="scroll-card-budget">{item.approx_price_range}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="trip-results-section">
                  <h3 className="trip-results-heading">Recommended Stays</h3>
                  <div className="horizontal-scroll">
                    {suggestedStays.length > 0 ? suggestedStays.map((item) => (
                      <div className="scroll-card" key={item.item_id}>
                        <div className="scroll-card-image"></div>
                        <div className="scroll-card-content">
                          <h3 className="scroll-card-name">{item.title}</h3>
                          <p className="scroll-card-description">{item.short_description}</p>
                          <span className="scroll-card-budget">{item.approx_price_range}</span>
                        </div>
                      </div>
                    )) : <p className="no-results">No stays available for this budget</p>}
                  </div>
                </div>

                <div className="trip-booking-section">
                  <h3 className="trip-results-heading">Book Your Travel</h3>
                  <div className="trip-booking-cards">
                    <div className="trip-booking-card">
                      <h4>Bus Travel</h4>
                      <p>Approx: ₹400-₹800</p>
                      <button className="trip-booking-btn">Book Bus</button>
                    </div>
                    <div className="trip-booking-card">
                      <h4>Hotel Booking</h4>
                      <p>Based on your budget</p>
                      <button className="trip-booking-btn">Book Hotel</button>
                    </div>
                  </div>
                  <p className="trip-note">Costs are approximate. Bookings handled by third-party partners.</p>
                </div>

                <button className="trip-reset-btn" onClick={() => { setStep(1); setDestination(""); setPersons(""); setBudget(""); }}>
                  Plan Another Trip
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// ============================================
// ADD A PLACE PAGE
// ============================================
const AddPlacePage = () => {
  return (
    <div className="page-container">
      <Header />
      
      <div className="page-hero">
        <h1 className="page-title">Add a Place</h1>
        <p className="page-subtitle">Share a place you visited</p>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="form-container">
            <form className="place-form">
              
              <div className="form-section">
                <h3 className="form-section-title">Place Type</h3>
                <div className="radio-group">
                  <label className="radio-label">
                    <input type="radio" name="place-type" className="radio-input" />
                    <span>Place to Visit</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="place-type" className="radio-input" />
                    <span>Food / Cafe</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="place-type" className="radio-input" />
                    <span>Budget Stay</span>
                  </label>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Select City</h3>
                <select className="form-select">
                  <option value="">Choose a city...</option>
                  {CITIES_DATA.map((city) => (
                    <option key={city.city_id} value={city.city_id}>{city.city_name}</option>
                  ))}
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
                <h3 className="form-section-title">Photo Upload (Optional)</h3>
                <div className="photo-upload-container">
                  <input type="file" id="photo-upload" className="photo-upload-input" accept="image/*" />
                  <label htmlFor="photo-upload" className="photo-upload-label">
                    <span className="photo-upload-text">Choose Photo</span>
                  </label>
                  <p className="photo-upload-note">Photo upload is optional. You can submit without a photo.</p>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Budget Type</h3>
                <div className="radio-group radio-group-horizontal">
                  <label className="radio-label">
                    <input type="radio" name="budget-type" className="radio-input" />
                    <span>Budget</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="budget-type" className="radio-input" />
                    <span>Standard</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="budget-type" className="radio-input" />
                    <span>Premium</span>
                  </label>
                </div>
              </div>

              <button type="button" className="form-submit">Submit for Review</button>

              <div className="thank-you-message">
                <p>Thanks for contributing! We will review and add it soon.</p>
              </div>

            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// About & Contact Pages
const AboutPage = () => (
  <div className="page-container">
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
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

const ContactPage = () => (
  <div className="page-container">
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
              <p>hello@travelcommunity.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

// Main App
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:cityId" element={<DestinationPage />} />
          <Route path="/trip-planner" element={<TripPlannerPage />} />
          <Route path="/add-place" element={<AddPlacePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
