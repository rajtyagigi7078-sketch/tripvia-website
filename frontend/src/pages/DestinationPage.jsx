import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollCard from "../components/ScrollCard";
import { CITIES_DATA, ITEMS_DATA } from "../data/mockData";

const DestinationPage = () => {
  const { cityId } = useParams();
  
  const city = CITIES_DATA.find(c => c.city_id === cityId) || CITIES_DATA[0];
  const places = ITEMS_DATA.filter(i => i.city_id === cityId && i.type === "place");
  const food = ITEMS_DATA.filter(i => i.city_id === cityId && i.type === "food");
  const activities = ITEMS_DATA.filter(i => i.city_id === cityId && i.type === "activity");
  const stays = ITEMS_DATA.filter(i => i.city_id === cityId && i.type === "stay");

  return (
    <div className="page-container" data-testid="destination-page">
      <Header />
      
      {/* City Hero */}
      <div 
        className="city-hero"
        style={city?.hero_image ? {
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${city.hero_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : {}}
      >
        <div className="city-hero-overlay" data-testid="city-hero-info">
          <h1 className="city-hero-title">{city?.city_name}</h1>
          <p className="city-hero-subtitle">{city?.short_description}</p>
        </div>
      </div>

      {/* Weather & Best Time */}
      <section className="template-section" data-testid="info-section">
        <div className="container">
          <div className="info-cards-grid">
            <div className="info-card weather-card" data-testid="weather-card">
              <h3 className="info-card-title">Current Weather</h3>
              <div className="weather-content">
                <div className="weather-temp">{city?.weather?.temp}</div>
                <div className="weather-condition">{city?.weather?.condition}</div>
                <div className="weather-season">Season: {city?.weather?.season}</div>
              </div>
              <p className="info-note">Weather data placeholder - will update with API</p>
            </div>
            
            <div className="info-card best-time-card" data-testid="best-time-card">
              <h3 className="info-card-title">Best Time to Visit</h3>
              <p className="best-time-text">{city?.best_time}</p>
              <p className="info-note">Plan your visit during these months for the best experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="template-section gray-bg" data-testid="about-section">
        <div className="container">
          <h2 className="section-title">About {city?.city_name}</h2>
          <div className="content-box">
            <p className="content-text">{city?.long_description}</p>
          </div>
        </div>
      </section>

      {/* Places to Visit */}
      {places.length > 0 && (
        <section className="template-section" data-testid="places-section">
          <div className="container">
            <h2 className="section-title">Places to Visit</h2>
            <div className="horizontal-scroll">
              {places.map((item) => (
                <ScrollCard
                  key={item.item_id}
                  name={item.title}
                  description={item.short_description}
                  price={item.approx_price_range}
                  budgetType={item.budget_type}
                  testId={`place-${item.item_id}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Food & Cafes */}
      {food.length > 0 && (
        <section className="template-section gray-bg" data-testid="food-section">
          <div className="container">
            <h2 className="section-title">Food & Cafes</h2>
            <div className="horizontal-scroll">
              {food.map((item) => (
                <ScrollCard
                  key={item.item_id}
                  name={item.title}
                  description={item.short_description}
                  price={item.approx_price_range}
                  testId={`food-${item.item_id}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Things to Do */}
      {activities.length > 0 && (
        <section className="template-section" data-testid="activities-section">
          <div className="container">
            <h2 className="section-title">Things to Do</h2>
            <div className="horizontal-scroll">
              {activities.map((item) => (
                <ScrollCard
                  key={item.item_id}
                  name={item.title}
                  description={item.short_description}
                  price={item.approx_price_range}
                  testId={`activity-${item.item_id}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hotels & Stays */}
      {stays.length > 0 && (
        <section className="template-section gray-bg" data-testid="stays-section">
          <div className="container">
            <h2 className="section-title">Where to Stay</h2>
            <div className="horizontal-scroll">
              {stays.map((item) => (
                <div className="scroll-card" key={item.item_id} data-testid={`stay-${item.item_id}`}>
                  <div className="scroll-card-image" />
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
      )}

      {/* Map Section */}
      <section className="template-section" data-testid="map-section">
        <div className="container">
          <h2 className="section-title">City Map</h2>
          <div className="map-placeholder-container">
            <div className="map-placeholder">
              <div className="map-icon">📍</div>
              <p className="map-placeholder-text">Interactive map coming soon</p>
              <p className="map-note">OpenStreetMap + Leaflet integration will be added with API setup</p>
              <p className="map-coords">Coordinates: {city?.lat}, {city?.lng}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Info */}
      <section className="template-section gray-bg" data-testid="travel-section">
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
      <section className="template-section cta-section" data-testid="destination-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Know a place in {city?.city_name}?</h2>
            <p className="cta-description">Help travelers discover hidden gems</p>
            <Link to="/add-place">
              <button className="cta-button" data-testid="add-place-btn">Add a Place</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationPage;
