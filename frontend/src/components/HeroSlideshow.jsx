import { useState, useEffect } from "react";
import { BACKGROUND_IMAGES, HERO_TEXTS } from "../data/mockData";

const HeroSlideshow = ({ onSearch }) => {
  const [heroText, setHeroText] = useState("");
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Set random hero text on mount
    const randomText = HERO_TEXTS[Math.floor(Math.random() * HERO_TEXTS.length)];
    setHeroText(randomText);
    
    // Background slideshow - 7 seconds per image
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery);
    }
  };

  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="home-hero" data-testid="hero-slideshow">
      {/* Background Slideshow with Crossfade */}
      <div className="hero-background-slideshow">
        {BACKGROUND_IMAGES.map((img, index) => (
          <div
            key={img.id}
            className={`hero-bg-slide ${index === currentBgIndex ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${img.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            data-testid={`slide-${img.type}`}
          />
        ))}
        {/* Dark gradient overlay */}
        <div className="hero-overlay" />
      </div>
      
      <div className="home-hero-content">
        <h1 className="home-hero-title" data-testid="hero-title">{heroText}</h1>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="home-search-container" data-testid="search-form">
          <input 
            type="text" 
            placeholder="Search destinations, hotels, restaurants..." 
            className="home-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            data-testid="search-input"
          />
          <button type="submit" className="home-search-button" data-testid="search-button">
            Search
          </button>
        </form>

        {/* Category Row */}
        <div className="category-row" data-testid="category-row">
          {['Hotels', 'Things to Do', 'Food & Cafes'].map((cat, idx) => (
            <button 
              onClick={scrollToSearch} 
              className="category-card" 
              key={idx}
              data-testid={`category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <span className="category-name">{cat}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;
