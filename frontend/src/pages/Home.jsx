import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSlideshow from "../components/HeroSlideshow";
import ScrollCard from "../components/ScrollCard";
import { 
  CITIES_DATA, 
  ICONIC_PLACES_DATA, 
  COMMUNITY_PHOTOS_DATA 
} from "../data/mockData";

const Home = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query) => {
    if (query.trim()) {
      const city = CITIES_DATA.find(c => 
        c.city_name.toLowerCase().includes(query.toLowerCase())
      );
      if (city) {
        navigate(`/destination/${city.city_id}`);
      }
    }
  };

  return (
    <div className="page-container" data-testid="homepage">
      <Header />
      
      {/* Hero Section with Background Slideshow */}
      <HeroSlideshow onSearch={handleSearch} />

      {/* Community Slideshow */}
      <section className="community-slideshow-section" data-testid="community-section">
        <div className="container">
          <div className="community-slideshow-header">
            <h2 className="section-title">Shared by Travelers</h2>
            <button 
              className="post-photo-btn" 
              onClick={() => setShowSignupModal(true)}
              data-testid="post-photo-btn"
            >
              Post your photo
            </button>
          </div>
          <div className="horizontal-scroll">
            {COMMUNITY_PHOTOS_DATA.map((photo) => (
              <div className="community-photo-card" key={photo.id} data-testid={`community-photo-${photo.id}`}>
                <div 
                  className="community-photo-image"
                  style={photo.photo ? {
                    backgroundImage: `url(${photo.photo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  } : {}}
                />
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
          <div className="modal-overlay" onClick={() => setShowSignupModal(false)} />
          <div className="modal" data-testid="signup-modal">
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

      {/* Iconic Places */}
      <section className="iconic-section" data-testid="iconic-places-section">
        <div className="container">
          <h2 className="section-title">Iconic Places You Must Visit</h2>
          <div className="horizontal-scroll">
            {ICONIC_PLACES_DATA.map((place) => (
              <ScrollCard
                key={place.id}
                name={place.name}
                description={place.tagline}
                image={place.image}
                testId={`iconic-place-${place.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities - No Direct Links (as per requirements) */}
      <section className="home-section" data-testid="popular-destinations-section">
        <div className="container">
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">Search above to explore these destinations</p>
          <div className="horizontal-scroll">
            {CITIES_DATA.map((city) => (
              <ScrollCard
                key={city.city_id}
                name={city.city_name}
                description={city.short_description}
                image={city.hero_image}
                testId={`city-${city.city_id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA */}
      <section className="home-section cta-section" data-testid="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Plan your trip in a single click</h2>
            <p className="cta-description">Get personalized suggestions for places, food, and stays based on your preferences</p>
            <Link to="/trip-planner">
              <button className="cta-button" data-testid="start-planning-btn">Start Planning</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
